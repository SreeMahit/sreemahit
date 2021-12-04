const button = document.getElementById("case-study");
const section = document.getElementsByClassName("project-popup");
const wrapper = document.getElementsByClassName("project-popup-wrapper");
const close = document.getElementById("close-popup");

// The following functions control the functionality of the popup.
// They control both the showing and hiding the popup.
// It also controls the aanimation of fading in and fading out the popup.

function openPopUp() {
  section[0].classList.remove("hidden");
  setTimeout(function () {
    wrapper[0].style.transform = "translateY(0)";
    wrapper[0].style.opacity = "1";
  }, 10);
}

function closePopUp() {
  wrapper[0].style.transform = "translateY(300px)";
  wrapper[0].style.opacity = "0.1";
  setTimeout(function () {
    section[0].classList.add("hidden");
  }, 400);
}
