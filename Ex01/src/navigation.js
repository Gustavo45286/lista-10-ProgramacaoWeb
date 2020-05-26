function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

/*atalhos */
document.onkeyup = function(e) {
    if (e.which == 85) {
      if(document.getElementById("mySidenav").style.width === "250px"){
        closeNav();
      }else {
        openNav();
      }
    }else if(e.which == 72){
      location.href = "index.html";
    }
    
};

document.getElementById("con1").onclick = function(){
  location.href = "http://127.0.0.1:8090/html/classic";
}

document.getElementById("con2").onclick = function(){
  location.href = "http://127.0.0.1:8090/html/gx";
}

document.getElementById("con3").onclick = function(){
  location.href = "http://127.0.0.1:8090/html/5d";
}

document.getElementById("con4").onclick = function(){
  location.href = "http://127.0.0.1:8090/html/zexal";
}

document.getElementById("con5").onclick = function(){
  location.href = "http://127.0.0.1:8090/html/arcv";
}
document.getElementById("con6").onclick = function(){
  location.href = "http://127.0.0.1:8090/html/vrains";
}

document.getElementById("con7").onclick = function(){
  location.href = "http://127.0.0.1:8090/html/sevens";
}



//mouseover images

//1
document.getElementById("con1").onmouseover = function () {

  document.getElementById("21").setAttribute('src',"/images/purpEnter1");
  /*let style = document.createElement('style');
    style.innerHTML =`
    .c1{background-image: url("images/purpEnter1.jpg");}
    `;
    document.head.appendChild(style);
  */
}

document.getElementById("con1").onmouseleave = function () {
  document.getElementById("21").setAttribute('src',"/images/p1");
  /*
  let style = document.createElement('style');
  style.innerHTML =`
  .c1{background-image: url("images/p1.jpg");}
  `;
  document.head.appendChild(style);
  */
}

//2
document.getElementById("con2").onmouseover = function () {
  document.getElementById("22").setAttribute('src',"/images/purpEnter2");
  
}

document.getElementById("con2").onmouseleave = function () {
  document.getElementById("22").setAttribute('src',"/images/p2");
}

//3
document.getElementById("con3").onmouseover = function () {
  document.getElementById("23").setAttribute('src',"/images/purpEnter3");
  
}

document.getElementById("con3").onmouseleave = function () {
  document.getElementById("23").setAttribute('src',"/images/p3");
}

//4
document.getElementById("con4").onmouseover = function () {
  document.getElementById("24").setAttribute('src',"/images/purpEnter4");
  
}

document.getElementById("con4").onmouseleave = function () {
  document.getElementById("24").setAttribute('src',"/images/p4");
}

//5
document.getElementById("con5").onmouseover = function () {
  document.getElementById("25").setAttribute('src',"/images/purpEnter5");
  
}

document.getElementById("con5").onmouseleave = function () {
  document.getElementById("25").setAttribute('src',"/images/p5");
}

//6
document.getElementById("con6").onmouseover = function () {
  document.getElementById("26").setAttribute('src',"/images/purpEnter6");
  
}

document.getElementById("con6").onmouseleave = function () {
  document.getElementById("26").setAttribute('src',"/images/p6");
}

//7
document.getElementById("con7").onmouseover = function () {
  document.getElementById("27").setAttribute('src',"/images/purpEnter7");
  
}

document.getElementById("con7").onmouseleave = function () {
  document.getElementById("27").setAttribute('src',"/images/p7");
}