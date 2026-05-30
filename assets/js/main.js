async function loadCourses(targetId, limit=null){
 const el=document.getElementById(targetId); if(!el) return;
 const res=await fetch('assets/data/courses.json'); const courses=await res.json();
 el.innerHTML=(limit?courses.slice(0,limit):courses).map(c=>`<div class="card"><span class="pill">${c.level}</span><h3>${c.title}</h3><p>${c.summary}</p><div class="meta"><span>${c.duration}</span><span>${c.price}</span></div><a class="btn" href="course-detail.html?course=${c.slug}">View Details</a> <a class="btn alt" href="enroll.html?course=${c.slug}">Enroll</a></div>`).join('');
}
async function loadCourseDetail(){
 const el=document.getElementById('courseDetail'); if(!el) return;
 const slug=new URLSearchParams(location.search).get('course')||'data-analysis';
 const res=await fetch('assets/data/courses.json'); const courses=await res.json(); const c=courses.find(x=>x.slug===slug)||courses[0];
 document.title=c.title+' | Averra Data Training';
 el.innerHTML=`<div class="page-hero"><div class="wrap"><span class="eyebrow">${c.level}</span><h1>${c.title}</h1><p>${c.summary}</p><div class="meta" style="max-width:420px"><span>${c.duration}</span><span>${c.price}</span></div><a class="btn" href="enroll.html?course=${c.slug}">Enroll Now</a> <a class="btn alt" href="assets/downloads/${c.slug}.pdf">Download Syllabus</a></div></div><section class="section"><div class="wrap split"><div class="card"><h2>What you will learn</h2>${c.topics.map(t=>`<span class="pill">${t}</span>`).join('')}</div><div class="card"><h2>Programme Outcome</h2><p>You will learn practical concepts with examples, assignments and business scenarios. This course is designed to support career growth in data roles.</p><ul><li>Real-world use cases</li><li>Practice focused learning</li><li>Interview preparation</li><li>Certificate of completion</li></ul></div></div></section>`;
}
function setupMenu(){const b=document.querySelector('.mobile-toggle'),m=document.querySelector('.menu'); if(b&&m)b.onclick=()=>m.classList.toggle('open')}
setupMenu(); loadCourses('courseCards',6); loadCourses('allCourses'); loadCourseDetail();
