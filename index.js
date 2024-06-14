var popoverlay = document.getElementById("popbox-overlay");
var popbox = document.getElementById("popbox");
var plusbutton = document.getElementById("plusbutton");
plusbutton.addEventListener("click", function () {
  popoverlay.style.display = "block";
  popbox.style.display = "block";
}); ///select cancel
var cancel = document.getElementById("cancelbutton");
cancel.addEventListener("click", function (event) {
  event.preventDefault();
});
cancel.addEventListener("click", function () {
  popoverlay.style.display = "none";
  popbox.style.display = "none";
});
///select input element
var inputtitle = document.getElementById("book-input-title");
var inputauthor = document.getElementById("book-input-author");
var inputtextarea = document.getElementById("textarea-input");
var add = document.getElementById("add-book");
var box = document.querySelector(".box");
var container = document.querySelector(".container");
add.addEventListener("click", function (event) {
  event.preventDefault();

  var div = document.createElement("div");
  div.setAttribute("class", "box");

  div.innerHTML = `<h2>${inputtitle.value}</h2>

<h4>${inputauthor.value}</h4>
<p>
  ${inputtextarea.value}
</p>
<button onclick="deletebutton(event)">Delete</button>`;
 container.append(div);
 popoverlay.style.display = "none";
 popbox.style.display = "none";
});
function deletebutton(event){
    event.target.parentElement.remove()
}
