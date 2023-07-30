// some comman element selecting form id & class
const input: HTMLInputElement = document.querySelector("#screen")!;
const clear: HTMLButtonElement = document.querySelector("#clear")!;
const show = document.querySelectorAll<HTMLButtonElement>(".show");
const result: HTMLButtonElement = document.querySelector(".equal")!;
const backspace: HTMLButtonElement = document.querySelector(".back")!;
const fact: HTMLButtonElement = document.querySelector(".fact")!;
const memory: HTMLDivElement = document.querySelector("#memory")!;
const angle: HTMLDivElement = document.querySelector("#angleUnitConvert")!;
const memory_clear: HTMLButtonElement = document.querySelector("#mem_clear")!;
const memory_recall: HTMLButtonElement = document.querySelector("#mem_recall")!;
const func: HTMLDivElement = document.querySelector("#func")!;
const func1: HTMLDivElement = document.querySelector("#func1")!;
const func2: HTMLDivElement = document.querySelector("#func2")!;
const myDropdown: HTMLDivElement = document.querySelector("#myDropdown")!;
const myDropdown2: HTMLDivElement = document.querySelector("#myDropdown2")!;
const rotate: HTMLSpanElement = document.querySelector("#rotate")!;
const rotate2: HTMLSpanElement = document.querySelector("#rotate2")!;
const myFunction: HTMLDivElement = document.querySelector("#myFunction")!;
const myFunction2: HTMLDivElement = document.querySelector("#myFunction2")!;
const changeSign: HTMLButtonElement = document.querySelector("#changeSign")!;

// second Function
const featureToggle: HTMLButtonElement = document.querySelector("#otherFun")!;
const restTo3: HTMLButtonElement = document.querySelector("#restTo3")!;
const cuberoot: HTMLButtonElement = document.querySelector("#cuberoot")!;
const y_squrroot_x: HTMLButtonElement =
  document.querySelector("#y-squrroot-x")!;
const twox: HTMLButtonElement = document.querySelector("#twox")!;
const xbasey: HTMLButtonElement = document.querySelector("#xbasey")!;
const exponential1: HTMLButtonElement =
  document.querySelector("#exponential1")!;
const restTo2: HTMLButtonElement = document.querySelector("#restTo2")!;
const squrroot: HTMLButtonElement = document.querySelector("#squrroot")!;
const x_restTo_y: HTMLButtonElement = document.querySelector("#x-restTo-y")!;
const tenx: HTMLButtonElement = document.querySelector("#tenx")!;
const logarithm: HTMLButtonElement = document.querySelector("#log")!;
const ln: HTMLButtonElement = document.querySelector("#ln")!;

export {
  input,
  clear,
  show,
  result,
  backspace,
  fact,
  memory,
  angle,
  memory_clear,
  memory_recall,
  func,
  func1,
  func2,
  myDropdown,
  myDropdown2,
  rotate,
  rotate2,
  myFunction,
  myFunction2,
  changeSign,
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
};
