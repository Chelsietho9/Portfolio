
//email
src="https://smtpjs.com/v3/smtp.js">

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Chelsiedesigns.ux@gmail.com",
        Password : "Gscapri9",
        To : 'Chelsiedesigns.ux@gmail.com',
        From : document.getElementById("email").value,
        Subject : "project request",
        Body : document.getElementById("message").value
    }).then(
      message => alert("Sent!")
    );
}

//progress bar
var scrollsec = document.getElementsByClassName('sticky')[0];

var scrollDot = document.getElementsByClassName('circle mark')[0];
var scrollDot1 = document.getElementsByClassName('circle mark')[1];
var scrollDot2 = document.getElementsByClassName('circle mark')[2];
var scrollDot3 = document.getElementsByClassName('circle mark')[3];
var scrollDot4 = document.getElementsByClassName('circle mark')[4];


const scrollProgress = document.getElementById('scroll-progress');
const height =
document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
    
  if (scrollTop >= 646){
  scrollProgress.style.width = `${((scrollTop-648 )/ height) * 100}%`;
  scrollDot.style.opacity = `${100}%`;
  scrollDot.style.color ="white";
  scrollDot.style.fontSize ='small';
  scrollDot.style.width=(20) + 'px';
  scrollDot.style.height=(20) + 'px';
  scrollDot.style.backgroundColor = 'blue';
  scrollsec.style.height = (60) + 'px';

  scrollDot1.style.fontSize ='small';
  scrollDot1.style.width=(20) + 'px';
  scrollDot1.style.height=(20) + 'px';

  scrollDot2.style.fontSize ='small';
  scrollDot2.style.width=(20) + 'px';
  scrollDot2.style.height=(20) + 'px';
  
  scrollDot3.style.fontSize ='small';
  scrollDot3.style.width=(20) + 'px';
  scrollDot3.style.height=(20) + 'px';

  scrollDot4.style.fontSize ='small';
  scrollDot4.style.width=(20) + 'px';
  scrollDot4.style.height=(20) + 'px';
  
  scrollDot1.style.color = null;
  scrollDot1.style.backgroundColor = null;
  

  if (scrollTop >=900){ 
    scrollDot1.style.opacity = `${100}%`;
    scrollDot1.style.color ="white";
    scrollDot1.style.backgroundColor = 'blue';
    scrollDot2.style.color = null;
    scrollDot2.style.backgroundColor = null;

  }

  if (scrollTop >=2000){ 
    scrollDot2.style.opacity = `${100}%`;
    scrollDot2.style.color ="white";
    scrollDot2.style.backgroundColor = 'blue';
    scrollDot3.style.color = null;
    scrollDot3.style.backgroundColor = null;
  }

  if (scrollTop >=3500){ 
    scrollDot3.style.opacity = `${100}%`;
    scrollDot3.style.color ="white";
    scrollDot3.style.backgroundColor = 'blue';
    scrollDot4.style.color = null;
    scrollDot4.style.backgroundColor = null;
  }

  if (scrollTop >=4000){ 
    scrollDot4.style.opacity = `${100}%`;
    scrollDot4.style.color ="white";
    scrollDot4.style.backgroundColor = 'blue';
    
  }

 if (scrollTop >=4000){ 
    scrollProgress.style.width =(700)+`px`;
  }

console.log(height);
console.log(scrollTop );
console.log(scrollProgress.style.width);
console.log();
}
  else{
    scrollProgress.style.width =0;
    scrollDot.style.opacity = null;
    scrollDot.style.color = null;
    scrollDot.style.fontSize = null;
    scrollDot.style.width = null;
    scrollDot.style.height= null;
    scrollDot.style.backgroundColor = null;

    scrollDot1.style.opacity = null;
    scrollDot1.style.color = null;
    scrollDot1.style.fontSize = null;
    scrollDot1.style.width = null;
    scrollDot1.style.height= null;
    scrollDot1.style.backgroundColor = null;

    scrollDot2.style.opacity = null;
    scrollDot2.style.color = null;
    scrollDot2.style.fontSize = null;
    scrollDot2.style.width = null;
    scrollDot2.style.height= null;
    scrollDot2.style.backgroundColor = null;
    
    scrollDot3.style.opacity = null;
    scrollDot3.style.color = null;
    scrollDot3.style.fontSize = null;
    scrollDot3.style.width = null;
    scrollDot3.style.height= null;
    scrollDot3.style.backgroundColor = null;

    scrollDot4.style.opacity = null;
    scrollDot4.style.color = null;
    scrollDot4.style.fontSize = null;
    scrollDot4.style.width = null;
    scrollDot4.style.height= null;
    scrollDot4.style.backgroundColor = null;
  }
});



