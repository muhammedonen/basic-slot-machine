const btn = document.getElementById('btn');
const stop = 3000;
var setInterval1;
var setInterval2;
var setInterval3;
var imgArray = [
  './img/next.png',
  './img/node.png',
  './img/react.png',
  './img/three.png',
  './img/sorui.png',
  './img/phaser.png',
  './img/p5.png'
]

var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');


function _clearInterval(params) {
  
   clearInterval(params);

}


 btn.addEventListener('click', ()=>{

  btn.disabled = true;

     function displayImage1() {
      var num = Math.floor(Math.random() * imgArray.length);
      s1.src= imgArray[num];
     }
     function displayImage2() {
      var num = Math.floor(Math.random() * imgArray.length);
      s2.src= imgArray[num];
     }
     function displayImage3() {
      var num = Math.floor(Math.random() * imgArray.length);
      s3.src= imgArray[num];
     } 
     function displayImage4() {
      var num = Math.floor(Math.random() * imgArray.length);
      s4.src= imgArray[num];
     } 
     
     setInterval1 = setInterval(displayImage1,99);
     setInterval2 = setInterval(displayImage2,99);
     setInterval3 = setInterval(displayImage3,99);
     setInterval4 = setInterval(displayImage4,99);


     
    

    setTimeout(() => {
      _clearInterval(setInterval1);
      

    }, stop);

    setTimeout(() => {
      _clearInterval(setInterval2);

    }, stop+500);

    setTimeout(() => {
      _clearInterval(setInterval3);
      
    }, stop+1000);

    setTimeout(() => {
      _clearInterval(setInterval4);
      

     
    hasDuplicate();


      
    }, stop+1500);

    function hasDuplicate() {
      var counts = {};
      var srcArray = [];
      var imgSrc = document.querySelectorAll("img[src]");
      
      imgSrc.forEach( x => {
       var xid = x.src;
        
        srcArray.push(xid);
        counts[x.src] = (counts[x.src] || 0) + 1 ;
          
        btn.disabled = false;
      });
      
      for (const key in counts) {
        if (counts.hasOwnProperty.call(counts, key)) {
          var element = counts[key];
          if (element >= 2) {
            document.body.style.background= "#A0D995";
           
            return;
          } else {
            document.body.style.background= "#1B2430";
          
          }
        }
       
      }
      
     

  }
  
 });


 
