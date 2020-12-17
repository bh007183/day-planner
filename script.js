var salmon = moment().format('MMMM Do YYYY, h:mm a')
$("#currentDay").text(salmon)
var hour = moment().format("H")
console.log(hour)
console.log(hour)
if (hour ==="8"){console.log(true)}
var white = "#d3d3d3"
var red = "#ff6961"
var green = "#77dd77"
var nine = $(".nine")
var ten = $(".ten")
var eleven = $(".eleven")
var twelve = $(".twelve")
var one = $(".one")
var two = $(".two")
var three = $(".three")
var four = $(".four")
var five = $(".five")




if (hour > "10"){
    ten.css("background-color", "#ff6961")
} else if (hour === "10"){
    ten.css("background-color", green)
} else {ten.css("background-color", white)}



if (hour < "9"){
    nine.css("background-color", "#ff6961")
} else if (hour === "9"){
    nine.css("background-color", green)
} else {nine.css("background-color", white)}


if (hour > "11"){
    eleven.css("background-color", red)
} else if (hour === "11am"){
    eleven.css("background-color", green)
} else {eleven.css("background-color", white)}

if (hour > "12"){
    twelve.css("background-color", red)
} else if (hour === "12am"){
    twelve.css("background-color", green)
} else {twelve.css("background-color", white)}

if (hour > "13"){
    one.css("background-color", red)
} else if (hour === "13am"){
    one.css("background-color", green)
} else {twelve.css("background-color", white)}

if (hour > "14"){
    two.css("background-color", red)
} else if (hour === "14am"){
    two.css("background-color", green)
} else {twelve.css("background-color", white)}

if (hour > "15"){
    three.css("background-color", red)
} else if (hour === "15am"){
    three.css("background-color", green)
} else {twelve.css("background-color", white)}

if (hour > "16"){
    four.css("background-color", red)
} else if (hour === "16am"){
    four.css("background-color", green)
} else {twelve.css("background-color", white)}

if (hour > "17"){
    five.css("background-color", red)
} else if (hour === "17am"){
    five.css("background-color", green)
} else {twelve.css("background-color", white)}



////////////








////////////SAVE BUTTONS AND STORAGE/////////////////


function assignValue (x){
var saved = localStorage.getItem("input" + x) || []
$(".input-" + x).val(saved)

$(".container").on("click", function(event){
    if (event.target.matches("button")){
        console.log("yay")
    
    var input = $(".input-" + x).val()
    
    localStorage.setItem("input" + x, input)
   
    console.log(saved)
    
}

})}


assignValue(1)
assignValue(2)
assignValue(3)
assignValue(4)
assignValue(5)
assignValue(6)
assignValue(7)
assignValue(8)
assignValue(9)








