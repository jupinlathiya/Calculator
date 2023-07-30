import { input, result } from "./utiles.js";

import * as regExp from "./regEx.js";
import { findResult } from "./operator.js";

// this event handle equal sign
result?.addEventListener("click", function () {
  let ans = evaluate(input.value);
  input.value = ans;
});

//handle keyboard input
input.onkeydown = function (e: KeyboardEvent) {
  let key: string;
  if (window.event) {
    key = e.key;
    if (key === "Enter") {
      let ans = evaluate(input.value);
      input.value = ans;
    }
  }
};

// evaluate expression displayed on screen Pressing Equalto
const evaluate = (expr: string): string => {
  if (isNaN(Number(expr))) {
    let newExpr: string, ans: string;
    switch (true) {
      case regExp.operator.test(expr):
        newExpr = findResult(expr);
        return evaluate(newExpr);
      case regExp.tan.test(expr):
        ans = Math.tan((Number(expr.slice(3)) * Math.PI) / 180)
          .toFixed(2)
          .toString();

        if (ans.length > 6) {
          return "Not Defined";
        }
        return evaluate(ans);
      case regExp.sin.test(expr):
        ans = Math.sin((Number(expr.slice(3)) * Math.PI) / 180)
          .toFixed(2)
          .toString();
        return evaluate(ans);
      case regExp.cos.test(expr):
        ans = Math.cos((Number(expr.slice(3)) * Math.PI) / 180)
          .toFixed(2)
          .toString();
        return evaluate(ans);
      case regExp.arcTan.test(expr):
        ans = ((Math.atan(Number(expr.slice(6))) * 180) / Math.PI)
          .toFixed(2)
          .toString();
        return evaluate(ans);
      case regExp.arcSin.test(expr):
        ans = ((Math.asin(Number(expr.slice(6))) * 180) / Math.PI)
          .toFixed(2)
          .toString();
        return evaluate(ans);
      case regExp.arcCos.test(expr):
        ans = ((Math.acos(Number(expr.slice(6))) * 180) / Math.PI)
          .toFixed(2)
          .toString();
        return evaluate(ans);
      case regExp.root.test(expr):
        newExpr = expr.replace(regExp.root, (match, a: string, b: string) => {
          return Math.pow(Number(b), 1 / Number(a)).toString();
        });
        return evaluate(newExpr);
      case regExp.ylogx.test(expr):
        newExpr = expr.replace(regExp.ylogx, (match, a: string, b: string) => {
          return (Math.log(Number(b)) / Math.log(Number(a))).toString();
        });
        return evaluate(newExpr);
      case regExp.log.test(expr):
        ans = (Math.log(Number(expr.slice(3))) / Math.log(10))
          .toFixed(2)
          .toString();
        return evaluate(ans);
      case regExp.ln.test(expr):
        ans = Math.log(Number(expr.slice(2)))
          .toFixed(2)
          .toString();
        return evaluate(ans);
      default:
        alert("invalid input");
        return "";
    }
  }
  return expr;
};
