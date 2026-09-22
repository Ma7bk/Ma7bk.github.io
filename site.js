const sections=['home','education','projects','experience','skills','contact'];
const dots=document.createElement('aside');dots.className='section-dots';dots.setAttribute('aria-label','Section navigation');
sections.forEach(id=>{const a=document.createElement('a');a.href='#'+id;a.setAttribute('aria-label',id==='home'?'About':id);dots.append(a)});document.body.append(dots);
const observed=sections.map(id=>document.getElementById(id));
function updateNavigation(){let closest=observed[0];let distance=Infinity;observed.forEach(el=>{const d=Math.abs(el.getBoundingClientRect().top-180);if(d<distance){distance=d;closest=el}});document.querySelectorAll('nav a,.section-dots a').forEach(a=>{const active=a.hash==='#'+closest.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
let ticking=false;window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{updateNavigation();ticking=false});ticking=true}},{passive:true});updateNavigation();
