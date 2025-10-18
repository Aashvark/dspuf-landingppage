resizeEvent();
window.onresize = () => { resizeEvent(); };

function resizeEvent() {
  let k = `calc((100% - ${document.getElementById("nav-logo").getBoundingClientRect().width}px) / 2)`;
  document.getElementById("left-nav").style.width = k;
  document.getElementById("right-nav").style.width = k;

  let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  for (let element of document.getElementsByClassName("nav-link")) {
    let text = element.getAttribute("data-text");
    let icon = "fa-" + element.getAttribute("data-icon");

    element.innerHTML = width > 500 && document.getElementById("header").classList.contains("docked") ? text : "";
    if (width <= 500 || !document.getElementById("header").classList.contains("docked")) element.classList.add("fa-solid", icon);
    else element.classList.remove("fa-solid", icon);
  }
}
