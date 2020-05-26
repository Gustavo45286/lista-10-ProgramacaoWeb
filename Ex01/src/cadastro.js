/*document.getElementById("bt4").onclick = function(){
    location.href = "index.html";
}*/

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("bt3");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("bt6").onclick = function(){
    modal.style.display = "none";
}

// Get the modal1
var modal1 = document.getElementById("myModal1");
// Get the button that opens the modal
var btn1 = document.getElementById("bt4");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}



document.getElementById("bt7").onclick = function(){
    location.href = "http://127.0.0.1:8090/";
}


document.getElementById("bt8").onclick = function(){
    modal1.style.display = "none";
}