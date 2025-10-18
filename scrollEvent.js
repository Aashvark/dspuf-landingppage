window.onscroll = () => { scrollEvent(); };

function scrollEvent() {
  let scroll = window.scrollY;
  let condition = scroll + document.getElementById("header").getBoundingClientRect().height * 1.5 >= screen.height * 0.8;

  document.getElementById("nav-logo").style.opacity = condition ? 0 : 1;
  if (condition) document.getElementById("header").classList.remove("docked");
  else document.getElementById("header").classList.add("docked");

  document.getElementById("event").style.opacity = scroll != 0 ? 0 : 1;

  let b = document.getElementsByClassName("background-overlay");
  let overlays = Array.from(b).map((e, index) => {
    const img = new Image();
    img.src = b[index].dataset.img;
    return [b[index], b[index].getBoundingClientRect().y - screen.height];
  });
  let chosen;
  
  for (let overlay of overlays) { if (0 > overlay[1]) chosen = overlay[0]; }
  document.getElementById("background-img").src = chosen ? chosen.dataset.img : "https://static.wixstatic.com/media/8723fb_2e614884f5464188a50698df05305bcb~mv2.jpg";
  document.getElementById("background-courtesy").innerText = chosen ? chosen.dataset.courtesy : `Fall 2024 Officers in CVA Gallery. Taken By Brandon Hernandez, Career Services.`;

  resizeEvent();
}