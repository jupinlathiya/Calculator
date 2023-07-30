import "./equalto.js";
import "./memory.js";
import "./featureToggle.js";
import { input, show, clear, fact, func1, func, func2, backspace, angle, changeSign, myDropdown, myDropdown2, rotate, rotate2, myFunction, myFunction2, exponential1, } from "./utiles.js";
// alias for the operator
show.forEach((item) => {
    item.addEventListener("click", (e) => {
        let btntext;
        const button = e.target;
        btntext = button.innerText;
        switch (btntext) {
            case "÷":
                btntext = "/";
                break;
            case "×":
                btntext = "*";
                break;
            case "π":
                btntext = "3.14159";
                break;
            case "mod":
                btntext = "%";
                break;
            case "e":
                btntext = "2.71828";
                break;
            case "xy":
                btntext = "^";
                break;
            case "tan-1":
                btntext = "arcTan";
                break;
            case "sin-1":
                btntext = "arcSin";
                break;
            case "cos-1":
                btntext = "arcCos";
                break;
            case "y√x":
                btntext = "√";
                break;
            case "logyx":
                btntext = "log";
                break;
        }
        input.value += btntext;
        input.focus();
    });
});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// for trigonometry button
myFunction === null || myFunction === void 0 ? void 0 : myFunction.addEventListener("click", () => {
    myDropdown.classList.toggle("shown");
    rotate.classList.toggle("rotate");
});
// for floor and ceil
myFunction2 === null || myFunction2 === void 0 ? void 0 : myFunction2.addEventListener("click", () => {
    myDropdown2.classList.toggle("shown");
    rotate2.classList.toggle("rotate");
});
myDropdown2 === null || myDropdown2 === void 0 ? void 0 : myDropdown2.addEventListener("click", (e) => {
    if (e.target.id == "floor") {
        input.value = Math.floor(Number(input.value)).toString();
    }
    else if (e.target.id == "ceil") {
        input.value = Math.ceil(Number(input.value)).toString();
    }
});
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("shown")) {
                openDropdown.classList.remove("shown");
                rotate.classList.remove("rotate");
                rotate2.classList.remove("rotate");
            }
        }
    }
};
// function for convert degree to radian or vice-versa & fix exponential
angle === null || angle === void 0 ? void 0 : angle.addEventListener("click", (e) => {
    if (e.target.id == "degree") {
        input.value = ((Number(input.value) * 180) / Math.PI).toFixed(5);
    }
    else if (e.target.id == "radian") {
        input.value = ((Number(input.value.slice(0, -1)) * Math.PI) / 180)
            .toFixed(5)
            .toString();
    }
    else if (e.target.id == "fe") {
        input.value = Number(input.value).toExponential(2).toString();
    }
});
// handle 1/x,x^2,x^3,|x| and exp button
func === null || func === void 0 ? void 0 : func.addEventListener("click", (e) => {
    if (e.target.id == "oneByX") {
        input.value = (1 / Number(input.value)).toString();
    }
    else if (e.target.id == "restTo2") {
        input.value = Math.pow(Number(input.value), 2).toString();
    }
    else if (e.target.id == "restTo3") {
        input.value = Math.pow(Number(input.value), 3).toString();
    }
    else if (e.target.id == "absolute") {
        input.value = Math.abs(Number(input.value)).toString();
    }
    else if (e.target.id == "exponential") {
        input.value = Math.exp(Number(input.value)).toString();
    }
});
// handle 10^x,2^x button
func1 === null || func1 === void 0 ? void 0 : func1.addEventListener("click", (e) => {
    if (e.target.id == "tenx") {
        input.value = Math.pow(10, Number(input.value)).toString();
    }
    else if (e.target.id == "twox") {
        input.value = Math.pow(2, Number(input.value)).toString();
    }
});
// handle 2√x,3√x button
func2 === null || func2 === void 0 ? void 0 : func2.addEventListener("click", (e) => {
    if (e.target.id == "squrroot") {
        input.value = Math.sqrt(Number(input.value)).toString();
    }
    else if (e.target.id == "cuberoot") {
        input.value = String(Math.pow(Number(input.value), 1 / 3));
    }
});
exponential1 === null || exponential1 === void 0 ? void 0 : exponential1.addEventListener("click", () => {
    input.value = Math.exp(Number(input.value)).toString();
});
// change text sign + to - or vice-versa
changeSign === null || changeSign === void 0 ? void 0 : changeSign.addEventListener("click", () => {
    if (input.value.charAt(0) == "-") {
        input.value = "" + input.value.slice(1);
    }
    else {
        input.value = "-" + input.value;
    }
});
// calculate factorial for given value
fact === null || fact === void 0 ? void 0 : fact.addEventListener("click", function () {
    let int = Number(input.value);
    if (int != Infinity && !isNaN(int)) {
        if (int == 0 || int == 1) {
            int = 1;
        }
        else {
            for (var i = int - 1; i >= 1; i--) {
                int *= i;
            }
        }
        input.value = int.toString();
    }
    else {
        alert("Invalid Input");
        input.value = "";
    }
});
// this erase one value from the back of any displayed value
backspace === null || backspace === void 0 ? void 0 : backspace.addEventListener("click", function () {
    let temp = input.value;
    temp = temp.slice(0, temp.length - 1);
    input.value = temp;
});
// this event for clear screen
clear === null || clear === void 0 ? void 0 : clear.addEventListener("click", () => {
    input.value = "";
});
