"use strict";
var tabs = document.querySelectorAll(".tab");
var form = document.querySelectorAll("article");

// Show default form
form[0].classList.add("showForm");

// Switch forms
for (var i = 0; i < tabs.length; ++i) {
  tabs[i].addEventListener("click", function(event) {
    this.classList.add("activeTab");

    switch (this.getAttribute("id")) {
      case "login":
        form[1].classList.remove("showForm");
        form[2].classList.remove("showForm");
        form[0].classList.add("showForm");
        break;
      case "register":
        form[0].classList.remove("showForm");
        form[1].classList.add("showForm");
        form[2].classList.remove("showForm");
        break;
      case "forgot":
        form[0].classList.remove("showForm");
        form[1].classList.remove("showForm");
        form[2].classList.add("showForm");
        break;
      default:
        form[0].classList.add("showForm");
        form[1].classList.remove("showForm");
        form[2].classList.remove("showForm");
    }

    // Hide non active tabs
    for (var tab of tabs) {
      if (tab.getAttribute("id") !== this.getAttribute("id")) {
        tab.classList.remove("activeTab");
      }
    }
  });
}
