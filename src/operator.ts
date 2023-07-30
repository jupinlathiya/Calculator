type myfunction = (a: number, b: number) => number;
interface obj {
  pred: number;
  func: myfunction;
  assoc: string;
}
export const findResult = (exp: string) => {
  const digits: string = "0123456789.";
  const operators: (string | number)[] = [
    "+",
    "-",
    "*",
    "/",
    "%",
    "^",
    "negate",
  ];
  const legend: { [key: string]: obj } = {
    "+": {
      pred: 2,
      func: (a: number, b: number) => {
        return a + b;
      },
      assoc: "left",
    },
    "-": {
      pred: 2,
      func: (a: number, b: number) => {
        return a - b;
      },
      assoc: "left",
    },
    "*": {
      pred: 3,
      func: (a: number, b: number) => {
        return a * b;
      },
      assoc: "left",
    },
    "/": {
      pred: 3,
      func: (a: number, b: number) => {
        if (b != 0) {
          return a / b;
        } else {
          return 0;
        }
      },
      assoc: "left",
    },
    "%": {
      pred: 3,
      func: (a, b) => {
        return a % b;
      },
      assoc: "left",
    },
    "^": {
      pred: 4,
      func: (a, b) => {
        return a ** b;
      },
      assoc: "left",
    },
    negate: {
      pred: 5,
      func: (a: number, b: number) => {
        return b * a;
      },
      assoc: "right",
    },
  };
  exp = exp.replace(/\s/g, "");

  let operations: (string | number)[] = [];
  let outputQueue: (string | number)[] = [];
  let ind: number = 0;
  let str: string = "";
  while (ind < exp.length) {
    let ch: string = exp[ind]!;

    if (operators.includes(ch)) {
      if (str !== "") {
        outputQueue.push(Number(str));

        str = "";
      }
      if (ch === "-") {
        if (ind == 0) {
          ch = "negate";
        } else {
          let nextCh: string = exp[ind + 1]!;
          let prevCh: string = exp[ind - 1]!;
          if (
            (digits.includes(nextCh) || nextCh === "(" || nextCh === "-") &&
            (operators.includes(prevCh) || exp[ind - 1] === "(")
          ) {
            ch = "negate";
          }
        }
      }

      if (operations.length > 0) {
        let topOper = operations[operations.length - 1]!;

        while (
          operations.length > 0 &&
          legend[topOper] &&
          ((legend[ch]!.assoc === "left" &&
            legend[ch]!.pred <= legend[topOper]!.pred) ||
            (legend[ch]!.assoc === "right" &&
              legend[ch]!.pred < legend[topOper]!.pred))
        ) {
          outputQueue.push(operations.pop()!);

          topOper = operations[operations.length - 1]!;
        }
      }

      operations.push(ch);
    } else if (digits.includes(ch)) {
      str += ch;
    } else if (ch === "(") {
      operations.push(ch);
    } else if (ch === ")") {
      if (str !== "") {
        outputQueue.push(Number(str));
        str = "";
      }
      while (
        operations.length > 0 &&
        operations[operations.length - 1] !== "("
      ) {
        outputQueue.push(operations.pop()!);
      }
      if (operations.length > 0) {
        operations.pop();
      }
    }
    ind++;
  }

  if (str !== "") {
    outputQueue.push(Number(str));
  }

  outputQueue = outputQueue.concat(operations.reverse());

  let res: (string | number)[] = [];
  while (outputQueue.length > 0) {
    let ch = outputQueue.shift()!;

    if (operators.includes(ch)) {
      if (ch === "negate") {
        let a = Number(res.pop()!);
        res.push(legend[ch]!.func(a, -1));
      } else {
        let [num2, num1] = [res.pop()!, res.pop()!];
        if (typeof num1 == "number" && typeof num2 == "number")
          res.push(legend[ch]!.func(num1, num2));
      }
    } else {
      res.push(ch);
    }
  }
  return String(res.pop()!.valueOf());
};
