import {
  featureToggle,
  restTo3,
  cuberoot,
  y_squrroot_x,
  twox,
  xbasey,
  exponential1,
  restTo2,
  squrroot,
  x_restTo_y,
  tenx,
  logarithm,
  ln,
} from "./utiles.js";

// toggle 2nd to 1st and change the button respectivly

featureToggle?.addEventListener("click", () => {
  let unit = featureToggle.innerText;

  if (unit == "2nd") {
    restTo3.style.display = "block";
    cuberoot.style.display = "block";
    y_squrroot_x.style.display = "block";
    twox.style.display = "block";
    xbasey.style.display = "block";
    exponential1.style.display = "block";

    restTo2.style.display = "none";
    squrroot.style.display = "none";
    x_restTo_y.style.display = "none";
    tenx.style.display = "none";
    logarithm.style.display = "none";
    ln.style.display = "none";

    featureToggle.innerHTML = "<span>1<sup>st</sup></span>";
  } else if (unit == "1st") {
    restTo3.style.display = "none";
    cuberoot.style.display = "none";
    y_squrroot_x.style.display = "none";
    twox.style.display = "none";
    xbasey.style.display = "none";
    exponential1.style.display = "none";

    restTo2.style.display = "block";
    squrroot.style.display = "block";
    x_restTo_y.style.display = "block";
    tenx.style.display = "block";
    logarithm.style.display = "block";
    ln.style.display = "block";

    featureToggle.innerHTML = "<span>2<sup>nd</sup></span>";
  }
});
