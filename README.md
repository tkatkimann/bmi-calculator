# Exercise: BMI Calculator

Here is how the World Health Organization has categorized Body Mass Index:
Create an interactive BMI (Body Mass Index) calculator using JavaScript. Gain hands-on experience with conditional statements, and interactive console applications.

## World Health Organization BMI Categories

- **Severely Underweight:** Below 16 kg/m²
- **Underweight:** 16.0 to 18.4 kg/m²
- **Normal Weight:** 18.5 to 24.9 kg/m²
- **Overweight:** 25.0 to 29.9 kg/m²
- **Moderately Obese:** 30.0 to 34.9 kg/m²
- **Severely Obese:** 35.0 to 39.9 kg/m²
- **Morbidly Obese:** ≥40.0 kg/m²

## Instructions:

### Step 1: Prompt for Height
**Instructions:**
- Use `prompt` to ask the user to enter their height in centimeters.
- Convert the input to a floating-point number (`height`).

### Step 2: Prompt for Weight
**Instructions:**
- Use `prompt` again to ask the user to enter their weight in kilograms.
- Convert the input to a floating-point number (`weight`).

### Step 3: Validate Inputs
**Instructions:**
- Check if both `height` and `weight` are valid numbers.
- Ensure that `height` and `weight` are greater than zero.
- Display an alert if the inputs are invalid, prompting the user to enter valid height and weight.

### Step 4: Calculate BMI
**Instructions:**
- Calculate the BMI using the formula: BMI = weight / (height / 100)^2.

### Step 5: Determine BMI Category
**Instructions:**
- Use conditional statements to determine the BMI category based on the calculated BMI.
- Categories: Severely Underweight, Underweight, Normal weight, Overweight, Moderately Obese, Severely Obese, Morbidly Obese.

### Step 6: Display Result
**Instructions:**
- Display the calculated BMI and the determined category in an alert.
- Use `toFixed(2)` to limit the BMI to two decimal places.
