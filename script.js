const temperatureInput = document.getElementById('temperature');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const conversionResult = document.getElementById('conversion-result');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', convertTemperature);

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);

  if (isNaN(temperature)) {
    displayResult('Invalid input!', false);
    return;
  }

  const fromUnit = fromSelect.value;
  const toUnit = toSelect.value;
  let convertedTemperature;

  if (fromUnit === toUnit) {
    displayResult('Please select different units!', false);
    return;
  }

  if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      convertedTemperature = (temperature * 9 / 5) + 32;
    } else if (toUnit === 'kelvin') {
      convertedTemperature = temperature + 273.15;
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      convertedTemperature = (temperature - 32) * 5 / 9;
    } else if (toUnit === 'kelvin') {
      convertedTemperature = (temperature + 459.67) * 5 / 9;
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celsius') {
      convertedTemperature = temperature - 273.15;
    } else if (toUnit === 'fahrenheit') {
      convertedTemperature = (temperature * 9 / 5) - 459.67;
    }
  }

  displayResult(`${temperature.toFixed(2)} ${fromUnit.toUpperCase()} = ${convertedTemperature.toFixed(2)} ${toUnit.toUpperCase()}`, true);
}

function displayResult(result, success) {
  conversionResult.textContent = result;

  if (success) {
    conversionResult.classList.remove('error');
  } else {
    conversionResult.classList.add('error');
  }
}
