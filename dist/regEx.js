//  Regular expression to detect maths operator
const root = /(\d+(?:\.\d+)?) ?√ ?(\d+(?:\.\d+)?)/; // Regex for identifying root (x √ y)
const tan = /tan(\d+)/; // Regex for identifying tan
const sin = /sin(\d+)/; // Regex for identifying sin
const cos = /cos(\d+)/; // Regex for identifying cos
const arcTan = /arcTan(\d+)*(.)*(\d+)/; // Regex for identifying tan inverse
const arcSin = /arcSin(\d+)*(.)*(\d+)/; // Regex for identifying sin inverse
const arcCos = /arcCos(\d+)*(.)*(\d+)/; // Regex for identifying cos inverse
const log = /log(\d+(?:\.\d+)?)/; // Regex for identifying log
const ylogx = /(\d+(?:\.\d+)?) ?log ?(\d+(?:\.\d+)?)/; // Regex for identifying log x base y
const ln = /ln(\d+(?:\.\d+)?)/; // Regex for identifying ln
const operator = /^[0-9()+\-*%.\/\^]*$/; //Regex for arithmetic Operator
export { root, tan, sin, cos, arcTan, arcSin, arcCos, log, ylogx, ln, operator, };
