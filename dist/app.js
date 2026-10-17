(function () {
  'use strict';
  const page = document.body.dataset.page;
  const ui = window.siteText || ((text) => text);
  const locale = window.SITE_LANG || 'en';
  const app = document.getElementById('app');
  const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.5"/></svg>';
  const down = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" stroke="currentColor" stroke-width="1.5"/></svg>';
  const mark = '<svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="24" rx="21" ry="9" transform="rotate(-40 24 24)"/><ellipse cx="24" cy="24" rx="21" ry="9" transform="rotate(40 24 24)"/><circle cx="24" cy="24" r="2.5"/></svg>';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const tagList = (items) => '<div class="tags">' + items.map((x) => '<span>' + esc(x) + '</span>').join('') + '</div>';
  const sectionTop = (n, label, heading, sub) => '<div class="section-heading reveal"><div><p class="eyebrow"><span>' + n + '</span> / ' + label + '</p><h2>' + heading + '</h2></div>' + (sub ? '<p class="section-note">' + sub + '</p>' : '') + '</div>';
  const languageControl = '<label class="language-control"><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><ellipse cx="10" cy="10" rx="3.5" ry="7.5"/><path d="M3 7h14M3 13h14"/></svg><span class="sr-only">Choose language</span><select id="language-select" aria-label="Choose language"><option value="en" lang="en">EN</option><option value="zh" lang="zh-CN">CN</option><option value="de" lang="de">DE</option><option value="fr" lang="fr">FR</option></select></label>';
  const header = (person) => '<header class="site-header"><a href="index.html" class="brand" aria-label="Yaoli and Yihan home">' + mark + '<span>MA <i>×</i> ZHANG</span></a>' +
    (person ? '<nav class="profile-nav" aria-label="Page sections"><a href="#research">Research</a><a href="#journey">Journey</a><a href="#off-duty">Off duty</a><a href="#contact">Contact</a></nav><div class="header-actions"><a class="switch-person" href="' + (page === 'yaoli' ? 'yihan.html' : 'yaoli.html') + '">Meet ' + (page === 'yaoli' ? 'Yihan' : 'Yaoli') + ' ' + arrow + '</a>'
    : '<span class="header-note">TWO PERSPECTIVES. ONE SHARED SPACE.</span><div class="header-actions"><a class="header-link" href="#choose">Meet us ' + down + '</a>') + languageControl + '</div></header>';
  const motionButton = '<button class="motion-toggle" type="button" aria-label="Pause ambient animation" aria-pressed="false"><span class="motion-icon" aria-hidden="true"><i></i><i></i><i></i></span><span class="motion-label">Motion on</span></button>';
  const footer = '<footer class="site-footer"><span>© ' + new Date().getFullYear() + ' YAOLI MA & YIHAN ZHANG</span><span class="footer-center">STAY CURIOUS. KEEP EXPLORING.</span>' + motionButton + '</footer>';

  function home() {
    app.innerHTML = header() +
      '<main id="main" class="home-main"><section class="home-hero" aria-labelledby="home-title">' +
      '<div class="home-copy"><p class="eyebrow intro-reveal"><span class="status-dot"></span> A LITTLE OF US. A WORLD TO EXPLORE.</p>' +
      '<h1 id="home-title" class="intro-reveal">Two minds.<br>One <span class="orbit-word">orbit<svg viewBox="0 0 360 150" aria-hidden="true"><ellipse cx="180" cy="75" rx="176" ry="61" transform="rotate(-9 180 75)"/></svg></span>.</h1>' +
      '<p class="home-description intro-reveal">From intelligent machines to financial markets.<br>Different perspectives. A shared curiosity.</p>' +
      '<div id="choose" class="person-selector intro-reveal"><p class="selector-label">You want to learn about</p>' +
      '<a class="person-link yaoli-link" href="yaoli.html"><span class="person-number">01</span><span class="person-name">Yaoli <b>MA</b><small>ROBOTICS · PERCEPTION · MACHINE LEARNING</small></span><span class="person-arrow">' + arrow + '</span></a>' +
      '<a class="person-link yihan-link" href="yihan.html"><span class="person-number">02</span><span class="person-name">Yihan <b>ZHANG</b><small>QUANTITATIVE FINANCE · DATA SCIENCE</small></span><span class="person-arrow">' + arrow + '</span></a></div><p class="creator-credit intro-reveal"><span class="credit-spark" aria-hidden="true">✳</span><span>Created by our lovely GPT-6 Astra Ultra</span></p></div>' +
      '<div class="home-art intro-reveal"><div class="orbital-ring ring-one"></div><div class="orbital-ring ring-two"></div><span class="orbit-node node-one"></span><span class="orbit-node node-two"></span>' +
      '<span class="art-coordinate coordinate-top">48°08′ N / 48°51′ N</span><div class="couple-frame"><img class="couple-photo" src="assets/couple.jpg" alt="Yaoli and Yihan together, reflected in the water" width="810" height="1216" fetchpriority="high"><div class="photo-shade"></div><div class="photo-caption"><span>A SHARED HORIZON</span><strong>Yaoli & Yihan</strong></div><span class="frame-corner corner-tl"></span><span class="frame-corner corner-br"></span></div>' +
      '<div class="photo-footnote"><span>01 / TOGETHER</span><span>MUNICH ↔ PARIS</span></div><span class="art-star star-top">✳</span><span class="art-star star-bottom">+</span></div></section></main>' + footer;
  }

  function diagram(type, index) {
    const grid = '<defs><pattern id="grid-' + index + '" width="35" height="35" patternUnits="userSpaceOnUse"><path d="M35 0H0V35" fill="none" stroke="currentColor" stroke-width=".5" opacity=".13"/></pattern></defs><rect width="600" height="280" fill="url(#grid-' + index + ')"/>';
    let body = '';
    if (type === 'olfaction') {
      const pts = [[140,90],[167,118],[121,137],[181,75],[158,159],[197,133],[117,65],[199,91],[370,144],[402,169],[430,125],[390,100],[446,163],[423,192],[365,190],[460,113]];
      body = '<ellipse cx="158" cy="117" rx="85" ry="79" fill="none" stroke="currentColor" opacity=".27" transform="rotate(-28 158 117)"/><ellipse cx="409" cy="149" rx="87" ry="75" fill="none" stroke="currentColor" opacity=".27" transform="rotate(-28 409 149)"/>' +
        pts.map((p,i)=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(i%3===0?5:3)+'" fill="currentColor" opacity="'+(i<8?'.8':'.4')+'"/>').join('') +
        '<path d="M230 120h96m-10-7 10 7-10 7M327 161h-97m10-7-10 7 10 7" fill="none" stroke="currentColor" opacity=".7"/><text x="103" y="238">SOURCE DOMAIN</text><text x="354" y="238">TARGET DOMAIN</text><text x="239" y="55" opacity=".5">ALIGNMENT</text>';
    } else if (type === 'mapping') {
      body = '<ellipse cx="386" cy="140" rx="146" ry="92" fill="none" stroke="currentColor" opacity=".15"/><ellipse cx="386" cy="140" rx="106" ry="69" fill="none" stroke="currentColor" opacity=".3"/><ellipse cx="386" cy="140" rx="66" ry="44" fill="none" stroke="currentColor" opacity=".5"/><ellipse cx="386" cy="140" rx="27" ry="20" fill="currentColor" opacity=".12"/><circle cx="386" cy="140" r="5" fill="currentColor"/><path d="M73 202 123 107 162 183 208 85 246 168 292 107 331 160 386 140" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 6"/><circle cx="73" cy="202" r="9" fill="#11151b" stroke="currentColor"/><text x="65" y="248">ROBOT PATH</text><text x="401" y="146">SOURCE</text><text x="66" y="46">SENSE → MAP → LOCALIZE</text>';
    } else if (type === 'factors') {
      body = '<path d="M60 218H545M60 40v178" fill="none" stroke="currentColor" opacity=".3"/><path d="M60 194 93 199 117 178 150 186 185 161 212 169 239 147 272 158 302 126 330 134 359 100 390 112 420 84 453 92 482 60 510 73 540 45" fill="none" stroke="currentColor" stroke-width="2"/><path d="M60 190 95 183 121 197 155 175 184 183 215 166 244 173 272 162 302 165 331 145 360 155 390 140 422 145 451 121 482 128 510 110 540 115" fill="none" stroke="currentColor" opacity=".3" stroke-width="1.5"/><text x="61" y="250">FACTOR SIGNALS / BETA / COSTS</text>';
    } else if (type === 'ml') {
      body = '<path d="M300 55v47M300 102H165v47M300 102h135v47M165 170v30H97v35M165 200h68v35M435 170v30h-68v35M435 200h68v35" fill="none" stroke="currentColor" opacity=".4"/>' +
        [[300,43],[165,160],[435,160],[97,242],[233,242],[367,242],[503,242]].map((p,i)=>'<rect x="'+(p[0]-22)+'" y="'+(p[1]-13)+'" width="44" height="26" rx="4" fill="#11111a" stroke="currentColor" opacity="'+(1-i*.09)+'"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="3" fill="currentColor"/>').join('') + '<text x="34" y="44">17 FEATURES</text><text x="436" y="44">NONLINEAR SIGNALS</text>';
    } else {
      body = '<path d="M60 190Q93 100 120 154T170 144T220 90T270 140T320 88T370 119T420 90T470 145T540 92L540 177Q501 215 470 190T420 155T370 190T320 156T270 205T220 162T170 207T120 213T60 230Z" fill="currentColor" opacity=".075"/><path d="M60 212 82 184 105 192 126 170 148 193 170 173 192 185 215 127 238 159 260 174 282 147 304 167 326 123 348 163 370 155 392 177 414 126 436 153 458 186 480 164 502 187 524 147 540 158" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M60 222H540" stroke="currentColor" stroke-dasharray="4 6" opacity=".3"/><text x="60" y="48">UNCERTAINTY, MODELLED.</text><text x="60" y="256">VOLATILITY / TAIL RISK / REGIME SHIFTS</text>';
    }
    return '<div class="project-visual" aria-hidden="true"><svg viewBox="0 0 600 280">' + grid + body + '</svg><span class="visual-note">CONCEPT VISUALIZATION</span></div>';
  }

  // Education arrays have the same order in every language; school IDs stay independent of translated names.
  const educationSchools = {
    yaoli: [['tum'], ['tum'], ['kirchberg']],
    yihan: [['polytechnique', 'hec-paris'], ['cuhk'], ['hec-paris']]
  };
  const schoolAssets = {
    tum: 'tum.svg',
    kirchberg: 'kirchberg.svg',
    polytechnique: 'polytechnique.svg',
    'hec-paris': 'hec-paris.svg',
    cuhk: 'cuhk.png'
  };
  function educationHeading(institution, index) {
    const schools = educationSchools[page]?.[index] || [];
    const logos = schools.map(id => '<span class="school-logo school-logo--' + id + '"><img src="assets/schools/' + schoolAssets[id] + '" alt="" width="96" height="64" loading="lazy" decoding="async"></span>').join('');
    return '<div class="education-heading"><h3>' + esc(institution) + '</h3><div class="school-logos" aria-hidden="true">' + logos + '</div></div>';
  }

  function profile(p) {
    document.body.classList.add('profile-page',page+'-theme');
    document.documentElement.style.setProperty('--accent',p.accent);
    const projects = p.projects.map((project,i) => '<article class="project-card reveal">' + diagram(project.visual,i) + '<div class="project-content"><div class="project-meta"><span>' + esc(project.number || '0'+(i+1)) + ' / ' + esc(project.category) + '</span><span>' + esc(project.date) + '</span></div><h3>' + esc(project.title) + '</h3><p>' + esc(project.description) + '</p>' + tagList(project.tags) + '<details><summary>Inside the research <span>+</span></summary><div class="project-details"><ul>' + project.details.map(x=>'<li>'+esc(x)+'</li>').join('') + '</ul>' + (project.result ? '<p class="result-note">' + esc(project.result) + '</p>' : '') + '</div></details></div></article>').join('');
    const experiences = p.experience.map(x => '<article class="timeline-row reveal"><p class="timeline-date">' + esc(x.date) + '</p><div><span class="timeline-type">EXPERIENCE</span><h3>' + esc(x.company) + '</h3><h4>' + esc(x.role) + '</h4><p>' + esc(x.description) + '</p><ul>' + x.points.map(v=>'<li>'+esc(v)+'</li>').join('') + '</ul></div></article>').join('');
    const education = p.education.map((x, i) => '<article class="timeline-row reveal"><p class="timeline-date">' + esc(x.date) + '</p><div><span class="timeline-type">EDUCATION</span>' + educationHeading(x.institution, i) + '<h4>' + esc(x.degree) + '</h4><p>' + esc(x.description) + '</p>' + (x.detail ? '<p class="education-detail">'+esc(x.detail)+'</p>':'') + '</div></article>').join('');
    const skills = p.skills.map((x,i)=>'<div class="skill-group reveal"><span class="mono">0'+(i+1)+'</span><h3>'+esc(x.label)+'</h3>'+tagList(x.items)+'</div>').join('');
    const photos = p.gallery.map((x,i)=>'<button class="gallery-item reveal" type="button" data-photo="'+i+'" aria-label="Enlarge photo: '+esc(x.alt)+'"><img src="'+esc(x.src)+'" alt="'+esc(x.alt)+'" loading="lazy" width="900" height="1100"><span><span>'+esc(x.caption)+'</span>'+arrow+'</span></button>').join('');
    app.innerHTML = header(p) + '<main id="main"><section class="profile-hero content-width" aria-labelledby="profile-name"><div class="profile-intro"><p class="eyebrow intro-reveal"><span class="status-dot"></span>'+esc(p.location.toUpperCase())+'</p><h1 id="profile-name" class="intro-reveal">'+esc(p.firstName)+'<br><span>'+esc(p.lastName)+'.</span></h1><h2 class="profile-discipline intro-reveal">'+esc(p.discipline)+'</h2><p class="profile-bio intro-reveal">'+esc(p.bio)+'</p><div class="hero-actions intro-reveal"><a class="button button-primary" href="#research">Explore my work '+down+'</a><a class="text-link" href="#contact">Get in touch '+arrow+'</a></div><div class="profile-stats intro-reveal">'+p.stats.map(x=>'<div><strong>'+esc(x.value)+'</strong><span>'+esc(x.label)+'</span></div>').join('')+'</div></div><div class="profile-portrait intro-reveal"><div class="portrait-orbit"></div><img src="'+esc(p.portrait)+'" alt="'+esc(p.portraitAlt)+'" style="object-position:'+esc(p.imagePosition)+'" fetchpriority="high" width="1080" height="1616"><div class="portrait-shade"></div><span class="portrait-label">'+esc(p.fullName.toUpperCase())+'<br><span>A WORK IN PROGRESS. ALWAYS.</span></span><span class="portrait-index">'+(page==='yaoli'?'01':'02')+'</span><span class="portrait-side">THE PERSON BEHIND THE WORK</span></div></section>'+
      '<div class="focus-strip"><div class="content-width">'+p.focus.map(x=>'<span>'+esc(x)+'</span><i aria-hidden="true">✳</i>').join('')+'<span>'+esc(p.location)+'</span></div></div>'+
      '<section id="research" class="section content-width">'+sectionTop('01','SELECTED RESEARCH','Curiosity, in practice.',page==='yaoli'?'Teaching machines to make sense of the physical world.':'Looking for signal. Questioning the assumptions.')+'<div class="projects-grid">'+projects+'</div>'+(p.github?'<a class="text-link research-github" href="'+esc(p.github)+'" target="_blank" rel="noopener noreferrer">Explore my GitHub '+arrow+'</a>':'')+'</section>'+
      '<section id="journey" class="section content-width">'+sectionTop('02','THE JOURNEY','Always moving forward.','The places, people, and problems that shape my perspective.')+'<div class="journey-layout"><div class="journey-label"><span class="mono">LEARNING BY DOING</span><p>Experience<span>↘</span></p></div><div class="timeline">'+experiences+'</div></div><div class="journey-layout education-layout"><div class="journey-label"><span class="mono">BUILDING FOUNDATIONS</span><p>Education<span>↘</span></p></div><div class="timeline">'+education+'</div></div></section>'+
      '<section id="toolkit" class="section toolkit-section"><div class="content-width">'+sectionTop('03','TOOLS & PERSPECTIVES','What I work with.','A toolkit that keeps growing.')+'<div class="skills-grid">'+skills+'</div><div class="credentials-grid"><div class="reveal"><p class="eyebrow">LANGUAGES</p><p>'+p.languages.map(esc).join('<span class="separator"> / </span>')+'</p></div><div class="reveal"><p class="eyebrow">RECOGNITION</p><ul>'+p.honors.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div></div></div></section>'+
      '<section id="off-duty" class="section content-width">'+sectionTop('04','BEYOND THE DESK',esc(p.offDutyTitle),esc(p.offDutyText))+'<div class="gallery gallery-'+p.gallery.length+'">'+photos+'</div></section>'+
      '<section id="contact" class="contact-section content-width reveal"><p class="eyebrow"><span class="status-dot"></span> GOOD CONVERSATIONS START SOMEWHERE.</p><h2>Let’s connect<span>↗</span></h2><div class="contact-bottom"><div><p>Ideas, research, or just a hello.</p><a class="email-link" href="mailto:'+esc(p.email)+'">'+esc(p.email)+'</a></div><div class="contact-actions"><button type="button" class="button copy-email" data-email="'+esc(p.email)+'">Copy email '+arrow+'</button><button type="button" class="text-link print-profile">Print profile '+arrow+'</button></div></div><p id="copy-status" class="copy-status" role="status" aria-live="polite"></p></section>'+
      '<a class="other-world" href="'+(page==='yaoli'?'yihan':'yaoli')+'.html"><div class="content-width"><span class="eyebrow">ONE MORE PERSPECTIVE</span><span>Enter '+(page==='yaoli'?'Yihan’s':'Yaoli’s')+' world</span>'+arrow+'</div></a></main>'+footer+
      '<dialog class="lightbox" aria-label="Photo viewer"><button class="lightbox-close" aria-label="Close photo viewer">×</button><button class="lightbox-prev" aria-label="Previous photo">←</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightbox-next" aria-label="Next photo">→</button></dialog>';
    initGallery(p.gallery);
    document.querySelector('.copy-email').addEventListener('click',async () => {
      const status = document.getElementById('copy-status');
      try { await navigator.clipboard.writeText(p.email); status.textContent = ui('Email copied. Say hello when you’re ready.'); }
      catch { status.textContent = ui('You can copy the address above or click it to open your email app.'); }
    });
    let detailsClosedBeforePrint = [];
    window.addEventListener('beforeprint',()=>{
      detailsClosedBeforePrint = [...document.querySelectorAll('details:not([open])')];
      detailsClosedBeforePrint.forEach(el=>el.open=true);
    });
    window.addEventListener('afterprint',()=>{
      detailsClosedBeforePrint.forEach(el=>el.open=false);
      detailsClosedBeforePrint = [];
    });
    document.querySelector('.print-profile').addEventListener('click',()=>window.print());
  }

  function initGallery(photos) {
    const dialog = document.querySelector('.lightbox');
    let active=0, opener;
    const show=(index)=>{
      active=(index+photos.length)%photos.length;
      const photo=photos[active], img=dialog.querySelector('img');
      img.src=photo.src;img.alt=photo.alt;
      dialog.querySelector('figcaption').textContent=photo.caption+'  /  '+(active+1)+' '+ui('of')+' '+photos.length;
    };
    document.querySelectorAll('[data-photo]').forEach(el=>el.addEventListener('click',()=>{
      opener=el;show(Number(el.dataset.photo));dialog.showModal();document.body.classList.add('lightbox-open');
    }));
    dialog.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());
    dialog.querySelector('.lightbox-prev').addEventListener('click',()=>show(active-1));
    dialog.querySelector('.lightbox-next').addEventListener('click',()=>show(active+1));
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
    dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(active-1);}if(e.key==='ArrowRight'){e.preventDefault();show(active+1);}});
    dialog.addEventListener('close',()=>{document.body.classList.remove('lightbox-open');if(opener)opener.focus();});
  }

  if(page==='home') home(); else profile(window.I18N?.[locale]?.profiles?.[page] || window.PROFILES[page]);
  if(window.translateInterface) window.translateInterface(app);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionEnabled = !reduce.matches;
  try { if(localStorage.getItem('ym-yz-motion')==='off') motionEnabled=false; } catch {}
  const motionToggle = document.querySelector('.motion-toggle');
  const canvas = document.getElementById('starfield');
  const context = canvas.getContext('2d');
  let width=0,height=0,stars=[],frame=0,raf=0;
  function sizeCanvas(){
    const dpr=Math.min(window.devicePixelRatio||1,2);
    width=window.innerWidth;height=window.innerHeight;
    canvas.width=width*dpr;canvas.height=height*dpr;
    context.setTransform(dpr,0,0,dpr,0,0);
    stars=Array.from({length:width<700?28:65},(_,i)=>({x:((i*137.508)%997)/997*width,y:((i*233.17)%991)/991*height,r:i%7===0?1.2:.65,phase:i*.8}));
    draw();
  }
  function draw(){
    context.clearRect(0,0,width,height);
    for(const star of stars){
      const opacity=motionEnabled?.18+.2*(Math.sin(frame*.007+star.phase)+1)/2:.25;
      context.fillStyle='rgba(190,204,236,'+opacity+')';
      context.beginPath();context.arc(star.x,star.y,star.r,0,Math.PI*2);context.fill();
    }
  }
  function tick(){frame++;if(frame%2===0)draw();raf=requestAnimationFrame(tick);}
  function applyMotion(){
    document.body.classList.toggle('motion-off',!motionEnabled);
    motionToggle.setAttribute('aria-pressed',String(!motionEnabled));
    motionToggle.setAttribute('aria-label',ui(motionEnabled?'Pause ambient animation':'Enable ambient animation'));
    motionToggle.querySelector('.motion-label').textContent=ui(motionEnabled?'Motion on':'Motion off');
    cancelAnimationFrame(raf);draw();
    if(motionEnabled&&!document.hidden)raf=requestAnimationFrame(tick);
  }
  motionToggle.addEventListener('click',()=>{motionEnabled=!motionEnabled;try{localStorage.setItem('ym-yz-motion',motionEnabled?'on':'off');}catch{}applyMotion();});
  reduce.addEventListener('change',()=>{motionEnabled=!reduce.matches;applyMotion();});
  document.addEventListener('visibilitychange',applyMotion);
  window.addEventListener('resize',sizeCanvas,{passive:true});
  sizeCanvas();applyMotion();

  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  } else {document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
  const sections=[...document.querySelectorAll('main section[id]')];
  if(sections.length>1&&'IntersectionObserver' in window){
    const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.profile-nav a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-15% 0px -65% 0px'});
    sections.forEach(el=>navObserver.observe(el));
  }
})();

