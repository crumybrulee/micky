const slider = document.querySelector(".sliderAnimation");
const tl = new TimelineMax();
const landingPage = document.getElementById("landing-page");
const bgLanding = document.getElementById("landingAnimationBg");
const sliderSection = document.getElementById("slider");
const landingAnimationSec = document.getElementById("landing-animation");

function landing() {
  tl.fromTo(".sliderAnimation", 1, { width: "0px", height: "0px" }, { width: "175px", height: "175px", ease: Power4.easeInOut })
    .fromTo(".micky-team", 1.5, { opacity: "0" }, { opacity: "1", ease: RoughEase.easeInOut })
    .fromTo(".sliderAnimation", 1.2, { width: "175px", height: "175px" }, { width: "100vw", height: "100vh", ease: ExpoScaleEase.easeInOut })
    .fromTo(".sliderAnimation", 0.3, { borderRadius: "90pt" }, { borderRadius: "0pt", ease: Power1.easeInOut })
    .to(".micky-team", { opacity: 0, duration: 2 });

  landingPage.style.display = "block";

  setTimeout(() => {
    tl.to(".sliderAnimation", { opacity: 0, duration: 1.5 }).to(bgLanding, { opacity: 0, duration: 1 });
  }, 6000);
  setTimeout(() => {
    // bgLanding.style.display = "none";
    // slider.style.display = "none";
    landingAnimationSec.style.display = "none";
  }, 9000);
}

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".landing").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientX * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

landing();

const btnLanding = document.getElementById("button-landing-page");
btnLanding.addEventListener("click", function () {
  slider.style.color = "#111222";
  tl.fromTo(".sliderAnimation");
});
