"use strict";

loading();
function loading() {
  // 1.5초 후 로딩창 사라짐
  const roundLoding = document.querySelector(".loading");
  const text1 = document.querySelector(".text1");
  const text2 = document.querySelector(".text2");
  const loading = document.querySelector(".loading_page");
  const bg = document.querySelectorAll(".bg");
  const plane = document.querySelector(".plane");
  setTimeout(() => {
    roundLoding.style.opacity = "0";
    setTimeout(() => {
      text1.style.opacity = "1";
      text1.style.transform = "translate(-50%, -50%)";
      setTimeout(() => {
        text1.style.opacity = "0";
        loading.style.backgroundColor = "transparent";
        setTimeout(() => {
          text2.style.opacity = "1";
          text2.style.transform = "translate(-50%, -50%)";
          setTimeout(() => {
            text2.style.opacity = "0";
            setTimeout(() => {
              bg.forEach((a) => {
                a.style.zIndex = "-1";
              });
              setTimeout(() => {
                loading.style.display = "none";
                plane.style.opacity = 1;
              }, 500);
            }, 500);
          }, 500);
        }, 1000);
      }, 300);
    }, 1000);
  }, 1500);
}

homePage();
function homePage() {
  const plane = document.querySelector(".plane");
  const worldFrame = document.querySelector(".home .world_frame");
  const world = document.querySelector(".home .world_frame .world");
  const castle = document.querySelector(".home .world .castle");
  const cloud = document.querySelector(".home .world .cloud");
  const textWrap = document.querySelector(".home .text_wrap");
  const text = document.querySelector(".home .text_wrap .text");
  const portfolio = document.querySelector("home .text_wrap .portfolio");
  plane.addEventListener("click", () => {
    worldFrame.classList.add("windowFrame");
    world.classList.add("windowFrame");
    castle.style.opacity = "1";
    cloud.style.opacity = "1";
    textWrap.style.opacity = "1";
    text.style.transform = "translate(-100%, 0%)";
  });
}
