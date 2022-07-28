const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   document.querySelector(".load").style.display = "block"
 

   btn.value = 'Envoie...';

   const serviceID = 'default_service';
   const templateID = 'template_jpgfgws';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoie';
      document.querySelector(".h3").innerHTML = "Ok vié pèr cè pati"
      document.querySelector(".load").style.display = "none"

      alert('Message envoyé!');
      
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
}); 

