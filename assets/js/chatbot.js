async function initChat(){
 const body=document.getElementById('chatBody'); if(!body) return;
 const data=await (await fetch('assets/data/faqs.json')).json();
 body.innerHTML='<p><b>Hi, I am Averra Assistant.</b><br>Select a question below.</p>'+data.map((x,i)=>`<button class="qbtn" data-i="${i}">${x.q}</button>`).join('')+'<div id="chatAnswer" class="chat-answer" style="display:none"></div>';
 body.onclick=e=>{if(e.target.classList.contains('qbtn')){const x=data[e.target.dataset.i],a=document.getElementById('chatAnswer');a.style.display='block';a.innerHTML='<b>'+x.q+'</b><br>'+x.a;}}
}
function toggleChat(){const w=document.querySelector('.chat-window');w.style.display=w.style.display==='block'?'none':'block'}
initChat();
