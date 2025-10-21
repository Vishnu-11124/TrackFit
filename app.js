function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");
  const bmiValue = document.getElementById("bmi-value");
  const bmiCategory = document.getElementById("bmi-category");
  const bmiMessage = document.getElementById("bmi-message");

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values!");
    return;
  }

  // Calculate BMI (height in meters)
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // Determine category and message
  let category = "";
  let message = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    message =
      "You may need to gain weight. Consult with a healthcare provider.";
    color = "text-blue-200";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal Weight";
    message = "Great! You have a healthy weight. Keep it up!";
    color = "text-green-300";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    message = "You may want to consider a healthier lifestyle.";
    color = "text-yellow-300";
  } else {
    category = "Obesity";
    message = "Please consult with a healthcare provider for guidance.";
    color = "text-red-300";
  }

  // Display results with animation
  resultDiv.classList.remove("hidden");
  bmiValue.textContent = bmi;
  bmiCategory.textContent = category;
  bmiCategory.className = `text-xl font-semibold mb-4 ${color}`;
  bmiMessage.textContent = message;

  // Smooth scroll to result
  resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Allow Enter key to calculate
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    calculateBMI();
  }
});
