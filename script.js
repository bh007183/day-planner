var salmon = moment().format('MMMM Do YYYY, h:mm:ss a')
document.querySelector("#currentDay").textContent = salmon
var hour = moment().format("h" + "a")
console.log(hour)
console.log(hour)

var white = "#d3d3d3"
var red = "#ff6961"
var green = "#77dd77"
var nine = document.querySelector(".nine")
var ten = document.querySelector(".ten")
var eleven = document.querySelector(".eleven")
var twelve = document.querySelector(".twelve")
var one = document.querySelector(".one")
var two = document.querySelector(".two")
var three = document.querySelector(".three")
var four = document.querySelector(".four")
var five = document.querySelector(".five")


if (hour > "6" && hour < "9"){
    nine.style.backgroundColor = red;
} else if (hour === "9am"){
    nine.style.backgroundColor = green;
} else {nine.style.backgroundColor = white;}

if (hour > "6" && hour < "10"){
    ten.style.backgroundColor = red;
} else if (hour === "10am"){
    ten.style.backgroundColor = green;
} else {ten.style.backgroundColor = white;}

if (hour > "6" && hour < "11"){
    eleven.style.backgroundColor = red;
} else if (hour === "11am"){
    eleven.style.backgroundColor = green;
} else {eleven.style.backgroundColor = white;}

if (hour > "6" && hour < "12"){
    twelve.style.backgroundColor = red;
} else if (hour === "12am"){
    twelve.style.backgroundColor = green;
} else {twelve.style.backgroundColor = white;}





function postNoon(clas){
if (hour > "6" && hour <= "12"){
    clas.style.backgroundColor = red;
} else if (hour === "1"){
    clas.style.backgroundColor = green;
} else {clas.style.backgroundColor = white;}}

if("5am" > "4pm"){console.log(true)}

if (hour === "4"){
    
    nine.style.backgroundColor = red;
}
if (hour === "4"){
    
    nine.style.backgroundColor = red;
}
if (hour === "4"){
    
    nine.style.backgroundColor = red;
}
if (hour === "4"){
    
    nine.style.backgroundColor = red;
}
if (hour === "4"){
    
    nine.style.backgroundColor = red;
}
if (hour === "4"){
    
    nine.style.backgroundColor = red;
}
if (hour === "4"){
    
    nine.style.backgroundColor = red;
}
if (hour === "4"){
    
    nine.style.backgroundColor = red;
}
////////////
var nine = document.querySelector(".nine")







////////////

var saved = localStorage.getItem("input") || []


var button1 = document.querySelector(".btn1")

button1.addEventListener("click", function(){
    
    var input = document.querySelector(".input-1").value
    localStorage.setItem("input", saved)
    
    saved.push(input)
})

