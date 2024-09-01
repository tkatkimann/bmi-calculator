"use script";


let height = prompt("Enter your height in centimeters:");
height = parseFloat(height);


let weight = prompt("Enter your weight in kilograms:");
weight = parseFloat(weight);


if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid numbers for height and weight greater than zero.");
} else {
  
    let bmi = weight / ((height / 100) ** 2);
    bmi = bmi.toFixed(2);

   
    let category;
    if (bmi < 16) {
        category = "Severely Underweight";
    } else if (bmi >= 16 && bmi <= 18.4) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        category = "Moderately Obese";
    } else if (bmi >= 35 && bmi <= 39.9) {
        category = "Severely Obese";
    } else {
        category = "Morbidly Obese";
    }

 
    alert(`Your BMI is ${bmi}. You are classified as: ${category}.`);
}