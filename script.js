function convertTemperature() {
  const tempInput = document.getElementById("temperature").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById("result");

  const temp = parseFloat(tempInput);

  if (isNaN(temp)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  let converted;
  let resultUnit;

  if (unit === "celsius") {
    converted = (temp * 9) / 5 + 32;
    resultUnit = "Fahrenheit";
  } else {
    converted = ((temp - 32) * 5) / 9;
    resultUnit = "Celsius";
  }

  resultDiv.textContent = `Converted Temperature: ${converted.toFixed(2)} °${
    resultUnit === "Celsius" ? "C" : "F"
  }`;
}


