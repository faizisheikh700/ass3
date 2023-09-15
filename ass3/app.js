
// assignment 12 & 13 
//? Q 1
// var input_char = prompt("Enter a character (number or string):");
// if (input_char.length === 1) {
//     var charCode = input_char.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         document.write(input_char + " is a number.");
//     }

//     else if (charCode >= 65 && charCode <= 90) {
//         document.write(input_char + " is an uppercase letter.");
//     }

//     else if (charCode >= 97 && charCode <= 122) {
//         document.write(input_char + " is a lowercase letter.");
//     }
//     else {
//         document.write(input_char + " is not a number, uppercase letter, or lowercase letter.");
//     }
// } else {
//     document.write("Please enter only a single character.");
// }

//? Q 2

// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// if (num1 > num2) {
//   document.write(num1 + " is larger.");
// } 
// else if (num2 > num1) {
//   document.write(num2 + " is larger.");
// } 
// else if (num1 != 97 && num2 != 122) {
//   document.write(num2 + num1);
// } 
// else {
//   document.write("Both integers are equal.");
// }

//? Q 3

// var userInput = +prompt("Enter a number:");

// if (isNaN(userInput)) {
//   document.write("Invalid input. Please enter a valid number.");
// } else if (userInput > 0) {
//   document.write("The number is positive.");
// } else if (userInput < 0) {
//   document.write("The number is negative.");
// } else {
//   document.write("The number is zero.");
// }

//? Q 4

// var character = prompt("Enter a single character:");

// if (character.length === 1) {
//   var isVowel = "aeiou".indexOf(character) !== -1;
//   var num = "97 & 122".indexOf(character) !== -1; 
//   if (isVowel) {
//     document.write("True");
//   } 
//   else if(num){
//       document.write("It is not Character ")
//   }
//   else {
//     document.write("False");
//   }
// } 
// else {
//   document.write("Invalid input. Please enter a single character.");
// }

//? Q 5

// var correctPassword = "Faizan"; 

// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//   document.write("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   document.write("Correct! The password you entered matches the original password.");
// } else {
//   document.write("Incorrect password.");
// }


//? Q 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }


//? Q 7

// var inputTime = +prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):");

// if (inputTime >= 0 && inputTime <= 2359) {
//   var hour = Math.floor(inputTime / 100);
//   var minute = inputTime % 100;
//   var period;

//   if (hour >= 0 && hour < 12) {
//     period = "AM";
//     if (hour === 0) {
//       hour = 12;
//     }
//   } else {
//     period = "PM";
//     if (hour > 12) {
//       hour -= 12;
//     }
//   }

//   document.write("The time in 12-hour format is: " + hour + ":" + (minute < 10 ? "0" : "") + minute + " " + period);
// } else {
//   document.write("Invalid input. Please enter a valid time in 24-hour format.");
// }


//? ---------------------Assignmet Arrays-----------------


//? Q 1

// var studentNames = [];
// studentNames.push("Ali" + "<br>"  + "Faizan");


// document.write(studentNames[0])


//? Q 2

// var studentNames = [];
// studentNames.unshift("Ali" + "<br>"  + "Faizan");


// document.write(studentNames[0])


//? Q 3

// var fruits = ["apple", "banana", "cherry", "date"];


//? Q 4

// var numbers = [1, 2, 3, 4, 5];
// document.write(numbers[0])


//? Q 5

// var booleanArray = [true, false, true, true, false];
// document.write(booleanArray[4])

//? Q 6

// var mixedArr = [42, "Hello", true, null, { name: "John" }, ["apple", "banana"]];

//? Q 7

// var qualifications = [
//   "SSC (Secondary School Certificate)",
//   "HSC (Higher Secondary School Certificate)",
//   "BCS (Bachelor of Computer Science)",
//   "BS (Bachelor of Science)",
//   "BCOM (Bachelor of Commerce)",
//   "MS (Master of Science)",
//   "M. Phil. (Master of Philosophy)",
//   "PhD (Doctor of Philosophy)"
// ];

// document.write("<h2>  Educational Qualifications in Pakistan:</h2>",);

// document.write("<ul>");

// for (var i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }


//? Q 8


// var studentNames = ["Ali ","Raza ","Javed "];
// var studentScores = [450, 380, 420];

// var totalMarks = 500;
// var studentPercentages = [];

// for (var i = 0; i < studentScores.length; i++) {
//   var percentage = (studentScores[i] / totalMarks) * 100 ;
//   studentPercentages.push(percentage);
// }

// for (var i = 0; i < studentNames.length; i++) {
//   document.write("score of " +studentNames[i]+ "is "  + studentScores[i] + " out of " + totalMarks + " (" + studentPercentages[i].toFixed(2) + "%)", "<br>");
// }

//? Q 9


// var colors = ["red", "green", "blue"];
// document.write("Initial Array: " + colors);

// var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddAtBeginning);

// document.write("<br>" + "After adding at the beginning: " + colors);

// var colorToAddAtEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddAtEnd);

// document.write("<br>" + "After adding at the end: " + colors);

// colors.unshift("orange", "purple");

// document.write("<br>" + "After adding two more colors at the beginning: " + colors);

// colors.shift();

// document.write("<br>" + "After deleting the first color: " + colors);

// colors.pop();

// document.write("<br>" + "After deleting the last color: " + colors);

// var insertIndex = +prompt("Enter the index to add a color:");
// var colorToAddAtIndex = prompt("Enter the color to add at index " + insertIndex + ":");
// colors.splice(insertIndex, 0, colorToAddAtIndex);

// document.write("<br>" + "After adding at index " + insertIndex + ": " + colors);

// var deleteIndex = +prompt("Enter the index to start deleting colors:");
// var deleteCount = +prompt("Enter the number of colors to delete:");
// colors.splice(deleteIndex, deleteCount);

// document.write("<br>" + "After deleting from index " + deleteIndex + ": " + colors);


//? Q 10


// var studentScores = [85, 72, 93, 64, 78, 91];
// document.write("Score of students" + studentScores+ "<br>")
// studentScores.sort();

// document.write("Order score of Students: " + studentScores);


//? Q 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Sukkar", "Hydrabad"];
// document.write('<h1>cities List</h1>'+ "<br>"+ cities+ "<br>")
// var selectedCities = [];

// for (var i = 0; i < 3; i++) {
//   if (i < cities.length) {
//     selectedCities.push(cities[i]);
//   }
// }

// document.write("<h1>Selected Cities List</h1>: "+ "<br>" + selectedCities);


//? Q 12


// var arr = ["This ", " is ", " my ", " cat"];
// document.write("<h2>Array</h2>"+ "<br>"+ arr)
// var singleString = arr.join('');
// document.write("<h2>strings</h2>"+ "<br>"+singleString)

//? Q 13

// var fifoArray = [];

// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");
// var firstValue = fifoArray.shift();
// var secondValue = fifoArray.shift();
// var thirdValue = fifoArray.shift();

// document.write("First Value: " + firstValue);
// document.write("Second Value: " + secondValue);
// document.write("Third Value: " + thirdValue);

//? Q 14

// var lifoArray = [];

// lifoArray.push("Value 1");
// lifoArray.push("Value 2");
// lifoArray.push("Value 3");

// var lastValue = lifoArray.pop();
// var secondLastValue = lifoArray.pop();
// var thirdLastValue = lifoArray.pop();

// document.write("Last Value: " + lastValue+ "<br>" );
// document.write("Second Last Value: " + secondLastValue+ "<br>" );
// document.write("Third Last Value: " + thirdLastValue);


//? 15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var dropdownHTML = '<select id="manufacturerSelect">';
for (var i = 0; i < manufacturers.length; i++) {
  dropdownHTML += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
}
dropdownHTML += '</select>';

document.write(dropdownHTML);
