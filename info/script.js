document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDiv = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (!isNaN(temperature)) {
            let convertedTemperature = 0;
            let unitText = "";

            switch (unit) {
                case "celsius":
                    convertedTemperature = temperature;
                    unitText = "°C";
                    break;
                case "fahrenheit":
                    convertedTemperature = (temperature - 32) * (5 / 9);
                    unitText = "°C";
                    break;
                case "kelvin":
                    convertedTemperature = temperature - 273.15;
                    unitText = "K";
                    break;
            }

            resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitText}`;
        } else {
            resultDiv.textContent = "Please enter a valid temperature.";
        }
    });
});
