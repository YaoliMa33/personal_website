import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root = path.join(import.meta.dirname, 'dist');
const scripts = ['profiles.js', 'app.js'].map(file => fs.readFileSync(path.join(root, file), 'utf8'));
const noop = () => {};
const makeElement = () => ({
  addEventListener: noop, setAttribute: noop, focus: noop,
  querySelector: () => makeElement(), querySelectorAll: () => [],
  classList: {add: noop, toggle: noop, remove: noop}, style: {setProperty: noop}
});
let totalLinks = 0;
for (const page of ['home', 'yaoli', 'yihan']) {
  const app = {innerHTML: ''};
  const canvas = {getContext: () => ({setTransform:noop,clearRect:noop,beginPath:noop,arc:noop,fill:noop})};
  const doc = {
    body: {...makeElement(),dataset:{page}},
    documentElement:makeElement(),hidden:false,
    getElementById:id => id==='app'?app:id==='starfield'?canvas:makeElement(),
    querySelector:()=>makeElement(),querySelectorAll:()=>[],addEventListener:noop
  };
  const win = {
    innerWidth:1440,innerHeight:900,devicePixelRatio:1,
    matchMedia:()=>({matches:true,addEventListener:noop}),
    addEventListener:noop, print:noop
  };
  const sandbox = {window:win,document:doc,localStorage:{getItem:()=>null},cancelAnimationFrame:noop,requestAnimationFrame:()=>1,console};
  vm.createContext(sandbox);
  scripts.forEach(code=>vm.runInContext(code,sandbox));
  const html = app.innerHTML;
  assert(html.length > 1000, page + ' rendered no content');
  assert(!html.includes('undefined') && !html.includes('[object Object]'), page + ' has missing rendered data');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size, ids.length, page + ' has duplicate IDs');
  for (const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (url.startsWith('#')) { assert(ids.includes(url.slice(1)), page + ': broken anchor ' + url); }
    else if (!/^(https:|mailto:|data:)/.test(url)) {
      assert(fs.existsSync(path.join(root,url)), page + ': missing asset ' + url);
    }
    totalLinks++;
  }
  if (page==='yaoli') {
    assert(html.includes('Schloss Schule Kirchberg'));
    assert(html.includes('Mathematics, Physics and Music'));
    assert(html.includes('yaoli33ma@gmail.com'));
    assert.equal((html.match(/<article class="project-card/g)||[]).length,2);
  }
  if (page==='yihan') {
    assert(html.includes('Expected'));
    assert(html.includes('zhangyihan226@gmail.com'));
    assert(html.includes('no significant advantage'));
    assert.equal((html.match(/<article class="project-card/g)||[]).length,3);
  }
  if (page==='home') {
    assert(html.includes('You want to learn about'));
    assert(html.includes('assets/couple.jpg'));
    assert(html.includes('yaoli.html') && html.includes('yihan.html'));
  }
  console.log('PASS '+page+': render, content, anchors and local assets');
}
const css = fs.readFileSync(path.join(root,'styles.css'),'utf8');
for (const [,url] of css.matchAll(/url\(['"]?([^)'"]+)['"]?\)/g)) {
  if(!/^(data:|%23|#)/.test(url))assert(fs.existsSync(path.join(root,url)),'Missing font or CSS asset '+url);
}
assert(!css.includes('fonts.googleapis.com'),'Fonts must be local');
assert(css.includes('prefers-reduced-motion') && css.includes('@media print'));
console.log('PASS '+totalLinks+' links and media references; local fonts; reduced-motion and print styles');
