(function () {
  'use strict';
  const supported = ['en','zh','de','fr'];
  const url = new URL(window.location.href);
  let saved = '';
  try { saved = localStorage.getItem('ym-yz-language') || ''; } catch {}
  const requested = url.searchParams.get('lang');
  const lang = supported.includes(requested) ? requested : supported.includes(saved) ? saved : 'en';
  window.SITE_LANG = lang;
  const dictionary = window.I18N && window.I18N[lang] ? window.I18N[lang].ui : {};
  window.siteText = (text) => Object.prototype.hasOwnProperty.call(dictionary,text) ? dictionary[text] : text;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.documentElement.dataset.language = lang;
  try { localStorage.setItem('ym-yz-language',lang); } catch {}
  window.translateInterface = function(root) {
    const walker = document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while ((node=walker.nextNode())) {
      if (['SCRIPT','STYLE'].includes(node.parentElement?.tagName)) continue;
      const key=node.nodeValue.trim();
      if (Object.prototype.hasOwnProperty.call(dictionary,key)) {
        const before=node.nodeValue.match(/^\s*/)[0], after=node.nodeValue.match(/\s*$/)[0];
        node.nodeValue=before+dictionary[key]+after;
      }
    }
    root.querySelectorAll('[aria-label],[alt],[title]').forEach(el=>{
      for(const attr of ['aria-label','alt','title']){
        const text=el.getAttribute(attr);
        if(!text)continue;
        if(text.startsWith('Enlarge photo: '))el.setAttribute(attr,window.siteText('Enlarge photo:')+' '+text.slice(15));
        else el.setAttribute(attr,window.siteText(text));
      }
    });
    document.title=window.siteText(document.title);
    document.querySelectorAll('meta[name="description"],meta[property="og:title"],meta[property="og:description"]').forEach(el=>{
      el.content=window.siteText(el.content);
    });
    const skip=document.querySelector('.skip-link');
    if(skip)skip.textContent=window.siteText('Skip to content');
    root.querySelectorAll('a[href]').forEach(link=>{
      const href=link.getAttribute('href');
      if(/^(index|yaoli|yihan)\.html(?:[?#]|$)/.test(href)){
        const target=new URL(href,window.location.href);
        target.searchParams.set('lang',lang);
        link.setAttribute('href',target.pathname.split('/').pop()+target.search+target.hash);
      }
    });
    const selector=document.getElementById('language-select');
    if(selector){
      selector.value=lang;
      selector.addEventListener('change',()=>{
        const next=selector.value;
        if(!supported.includes(next))return;
        try{localStorage.setItem('ym-yz-language',next);}catch{}
        const target=new URL(window.location.href);
        target.searchParams.set('lang',next);
        window.location.assign(target.href);
      });
    }
  };
})();
