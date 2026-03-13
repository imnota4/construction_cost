function calculate(){

let costSqFt = parseFloat(document.getElementById("costSqFt").value)
let sqFtUnit = parseFloat(document.getElementById("sqFtUnit").value)
let nonUnit = parseFloat(document.getElementById("nonUnit").value)/100
let units = parseFloat(document.getElementById("units").value)
let error = parseFloat(document.getElementById("error").value)/100

let unitSpace = sqFtUnit * units

let totalSqFt = unitSpace / (1 - nonUnit)

let baseCost = totalSqFt * costSqFt

let totalCost = baseCost * (1 + error)

document.getElementById("totalSqFt").innerText =
Math.round(totalSqFt).toLocaleString() + " sq ft"

document.getElementById("baseCost").innerText =
"$" + Math.round(baseCost).toLocaleString()

document.getElementById("totalCost").innerText =
"$" + Math.round(totalCost).toLocaleString()

}
