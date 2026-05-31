
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('show');
}

let currentSlide = 0;
function initSlider(){
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.getElementById('dots');
  if(!slides.length || !dots) return;
  dots.innerHTML = '';
  slides.forEach((_, i)=>{
    const b = document.createElement('button');
    b.onclick = ()=>showSlide(i);
    dots.appendChild(b);
  });
  showSlide(0);
  setInterval(()=>changeSlide(1), 5000);
}
function showSlide(n){
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('#dots button');
  if(!slides.length) return;
  currentSlide = (n + slides.length) % slides.length;
  slides.forEach((s,i)=>s.classList.toggle('active', i===currentSlide));
  dots.forEach((d,i)=>d.classList.toggle('active', i===currentSlide));
}
function changeSlide(step){ showSlide(currentSlide + step); }

function toggleBot(){
  document.getElementById('chatbot').classList.toggle('show');
}
function botAdd(text, cls=''){
  const body = document.getElementById('chatBody');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + cls;
  div.innerHTML = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}
function botReply(type){
  if(type==='courses'){
    botAdd('We offer 12 premium programs: Data Analytics, Statistics, SQL, Python, Data Governance, Data Quality, Data Engineering, ML, Deep Learning, NLP/LLM, GenAI and AI Governance.');
  } else if(type==='fees'){
    botAdd('Course duration is 2 to 3 months depending on program. For latest fees and batch timing, call +91 9322662805.');
  } else if(type==='contact'){
    botAdd('You can call +91 9322662805 or email info@averradata.com. Address: Lawale Phata, Pirangut, Pune 412115.');
  }
}
function sendBot(){
  const input = document.getElementById('botInput');
  const q = input.value.trim();
  if(!q) return;
  botAdd(q, 'user');
  input.value = '';
  const lower = q.toLowerCase();
  if(lower.includes('course')) botReply('courses');
  else if(lower.includes('fee') || lower.includes('duration')) botReply('fees');
  else botReply('contact');
}
document.addEventListener('DOMContentLoaded', initSlider);

function sendEnquiryEmail(event){
  event.preventDefault();
  const name = document.getElementById('enqName')?.value || '';
  const mobile = document.getElementById('enqMobile')?.value || '';
  const email = document.getElementById('enqEmail')?.value || '';
  const course = document.getElementById('enqCourse')?.value || '';
  const message = document.getElementById('enqMessage')?.value || '';
  const subject = encodeURIComponent('Course Enquiry - Averra Data Training Academy');
  const body = encodeURIComponent(
    'Hello Averra Data,%0D%0A%0D%0AI want to enquire about your course.%0D%0A%0D%0A' +
    'Name: ' + name + '%0D%0A' +
    'Mobile: ' + mobile + '%0D%0A' +
    'Email: ' + email + '%0D%0A' +
    'Course: ' + course + '%0D%0A' +
    'Message: ' + message + '%0D%0A'
  );
  window.location.href = 'mailto:info@averradata.com?subject=' + subject + '&body=' + body;
}
