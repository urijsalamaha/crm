//Style - button push
var button = document.querySelectorAll("button");
console.log(button);

for (var i = 0; i < button.length; ++i) {
  button[i].addEventListener("mousedown", function() {
    this.classList.remove('over');
    this.classList.add("push");
  });
  button[i].addEventListener("mouseup", function() {
    this.classList.add('over');
    this.classList.remove("push");
  });
  button[i].addEventListener("mouseout", function() {
    this.classList.remove("push", "over");
  });
  button[i].addEventListener('mouseover', function () {
    this.classList.add('over');
  })
}
