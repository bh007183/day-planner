var salmon = moment().format('MMMM Do YYYY, h:mm a')
$("#currentDay").text(salmon)
var hour = parseInt(moment().format("H"))

console.log(hour)
console.log(typeof(hour))
if (hour ==="8"){console.log(true)}

/////////////FUNCTION FOR COMPARING TIME TO COL////////////

function colors(x, y) {

if (hour < y){
    x.css("background-color", "#ff6961")
} else if (hour === y){
    x.css("background-color", "#77dd77")
} else {x.css("background-color", "#d3d3d3")}

}

colors($(".nine"), 9)
colors($(".ten"), 10)
colors($(".eleven"), 11)
colors($(".twelve"), 12)
colors($(".one"), 13)
colors($(".two"), 14)
colors($(".three"), 15)
colors($(".four"), 16)
colors($(".five"), 17)


////////////SAVE BUTTONS AND STORAGE/////////////////


function assignValue (x){
var saved = localStorage.getItem("input" + x) || []
$(".input-" + x).val(saved)

$(".container").on("click", function(event){
    if (event.target.matches("button")){
    var input = $(".input-" + x).val()
    localStorage.setItem("input" + x, input)
    
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








