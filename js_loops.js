//For/In Loop for Objects

let txt = ""; //without this; it console logs the last element only
let person = {
    fname:"John", 
    lname:"Doe", 
    age: 25
}; 

let x;
for (x in person) {
  txt += person[x] + " ";
}

//example number 2 (For Loop in Array)

let fruits = ["Apple", "Banana", ["mango"], "Orange"];
let x;
for (x in fruits) {
  console.log(fruits[x]) + " ";

}

//For each loop
fruits.forEach(function(i) {
    console.log(i);
  });

//Example 2 of For/Each Loop (for arrays)

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item)
});


  //For Loop
var text = " ";
var i;

for (i = 0; i < 9; i++) {
  text += "The number is " + i + "<br>";
}

//While Loops

let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}

//Do/While Loop

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);  