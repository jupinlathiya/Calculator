//  Regular expression to detect maths operator

const root: RegExp = /(\d+(?:\.\d+)?) ?√ ?(\d+(?:\.\d+)?)/; // Regex for identifying root (x √ y)
const tan: RegExp = /tan(\d+)/; // Regex for identifying tan
const sin: RegExp = /sin(\d+)/; // Regex for identifying sin
const cos: RegExp = /cos(\d+)/; // Regex for identifying cos
const arcTan: RegExp = /arcTan(\d+)*(.)*(\d+)/; // Regex for identifying tan inverse
const arcSin: RegExp = /arcSin(\d+)*(.)*(\d+)/; // Regex for identifying sin inverse
const arcCos: RegExp = /arcCos(\d+)*(.)*(\d+)/; // Regex for identifying cos inverse
const log: RegExp = /log(\d+(?:\.\d+)?)/; // Regex for identifying log
const ylogx: RegExp = /(\d+(?:\.\d+)?) ?log ?(\d+(?:\.\d+)?)/; // Regex for identifying log x base y
const ln: RegExp = /ln(\d+(?:\.\d+)?)/; // Regex for identifying ln
const operator: RegExp = /^[0-9()+\-*%.\/\^]*$/; //Regex for arithmetic Operator

export {
  root,
  tan,
  sin,
  cos,
  arcTan,
  arcSin,
  arcCos,
  log,
  ylogx,
  ln,
  operator,
};
