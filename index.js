console.log("script loaded");
let btnblack = document.getElementById("btnblack");
let btnpink = document.getElementById("btnpink");
let btnblue = document.getElementById("btnblue");
let btnred = document.getElementById("btnred");
let imgsrc = document.getElementById("watchpic");
let btntime = document.getElementById("btntime");
let btnrate = document.getElementById("btnrate");
//console.log(imgsrc);
btnblack.onclick = function(){
 
  imgsrc.src = "https://i.imgur.com/iOeUBV7.png";
}

btnred.addEventListener('click', function(){
 
  imgsrc.src = "https://i.imgur.com/PTgQlim.png";
})
btnblue.addEventListener('click',function(){
  
  imgsrc.src = "https://i.imgur.com/Mplj1YR.png";
})

btnpink.onclick = function(){
 
  imgsrc.src = "https://i.imgur.com/Zygu7I3.png";
}

function timer(){
  document.getElementById("heartbeat").style.visibility = "hidden";
  document.getElementById("time").style.visibility="visible";
  document.getElementById("heart-rate").style.visibility= "hidden";
  document.getElementById("heart-rate").textContent = "";

  setInterval(()=>{

      let addZero = (i) =>{
        if(i<10){
          i = "0"+i;
        }
        return i;
      }

        let d = new Date();
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        document.getElementById("time").innerHTML = h + ":"+ m + ":" + s;

    }, 0);
}
btntime.addEventListener('click', timer)

function heart(){
  document.getElementById("heartbeat").style.visibility = "visible";
  document.getElementById("time").style.visibility="hidden";
  document.getElementById("heart-rate").style.visibility= "visible";
  document.getElementById("heart-rate").textContent = "";
  
  document.getElementById("heart-rate").appendChild(document.createTextNode(randomNumber(70,100)));

}
  
let randomNumber = (min, max) =>{
  return Math.floor(Math.random()*(max - min) + min);
};

btnrate.addEventListener('click',heart);