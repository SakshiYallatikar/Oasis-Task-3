function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var targetUnit = document.getElementById('targetUnit').value;
    var convertedTemperatureElement = document.getElementById('convertedTemperature');

    if (isNaN(temperatureInput)) {
        convertedTemperatureElement.textContent = "Please enter a valid number for temperature.";
        return;
    }

    var convertedTemperature;

    if (inputUnit === 'celsius') {
        if (targetUnit === 'fahrenheit') {
            convertedTemperature = (temperatureInput * 9 / 5) + 32;
        } else if (targetUnit === 'kelvin') {
            convertedTemperature = temperatureInput + 273.15;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else if (inputUnit === 'fahrenheit') {
        if (targetUnit === 'celsius') {
            convertedTemperature = (temperatureInput - 32) * 5 / 9;
        } else if (targetUnit === 'kelvin') {
            convertedTemperature = (temperatureInput - 32) * 5 / 9 + 273.15;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else if (inputUnit === 'kelvin') {
        if (targetUnit === 'celsius') {
            convertedTemperature = temperatureInput - 273.15;
        } else if (targetUnit === 'fahrenheit') {
            convertedTemperature = (temperatureInput - 273.15) * 9 / 5 + 32;
        } else {
            convertedTemperature = temperatureInput;
        }
    }

    convertedTemperatureElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${targetUnit}`;
}
