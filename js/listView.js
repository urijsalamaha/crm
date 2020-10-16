var buttons = document.querySelectorAll("#buttons button");
var sideBar = document.querySelector("#sideBar");
var sideBar_div = document.querySelectorAll("#sideBar div");
var icon = document.querySelectorAll('i');



// Style of buttons of header
for (var i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener("mouseover", function(event) {
    this.classList.add("mouseover");
  });
  buttons[i].addEventListener("mouseout", function(event) {
    this.classList.remove("mouseover");
    this.classList.remove("mousedown");
  });
  buttons[i].addEventListener("mousedown", function(event) {
    this.classList.add("mousedown");
  });
  buttons[i].addEventListener("mouseup", function(event) {
    this.classList.remove("mousedown");
  });
}

// Style of Side Bar
sideBar.addEventListener("mouseover", function(event) {
  this.classList.add("open_sideBar");
  for (var i = 0; i < sideBar_div.length; ++i) {
    sideBar_div[i].classList.add("div_open");
  }
});
sideBar.addEventListener("mouseout", function(event) {
  this.classList.remove("open_sideBar");
  for (var i = 0; i < sideBar_div.length; ++i) {
    sideBar_div[i].classList.remove("div_open");
  }
});
// Style of icon
for (var i = 0; i < icon.length; ++i){
  icon[i].addEventListener('mouseover', function (event) {
    this.classList.add('icon_mouse_over');
  })
    icon[i].addEventListener('mouseout', function (event) {
      this.classList.remove('icon_mouse_over');  
  })
}
