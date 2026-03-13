function calculate(){

let costSqFt = parseFloat(document.getElementById("costSqFt").value)
let sqFtUnit = parseFloat(document.getElementById("sqFtUnit").value)
let nonUnit = parseFloat(document.getElementById("nonUnit").value)/100
let units = parseFloat(document.getElementById("units").value)

let unitSpace = sqFtUnit * units

let totalSqFt = unitSpace / (1 - nonUnit)

let totalCost = totalSqFt * costSqFt

document.getElementById("totalSqFt").innerText =
Math.round(totalSqFt).toLocaleString() + " sq ft"

document.getElementById("totalCost").innerText =
"$" + Math.round(totalCost).toLocaleString()

}
