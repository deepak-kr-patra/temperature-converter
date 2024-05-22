const convert = () => {
    let input_value = document.getElementById("inputTemperature").value;
    let output_value;
    // if no input value then no output value
    if (!input_value) {
        output_value = "";
        document.getElementById("outputTemperature").value = output_value;
        return;
    }
    console.log("not exited");
    if (document.getElementById("inputSelector").value == "Fahrenheit") {
        if (document.getElementById("outputSelector").value == "Celsius") {
            // converting from fahrenheit to celsius
            output_value = (input_value - 32) * 5 / 9;
        } else if (document.getElementById("outputSelector").value == "Kelvin") {
            // converting from fahrenheit to kelvin
            output_value = (input_value - 32) * 5 / 9 + 273.15;
        } else {
            output_value = input_value;
        }
    }
    else if (document.getElementById("inputSelector").value == "Celsius") {
        if (document.getElementById("outputSelector").value == "Fahrenheit") {
            // converting from celsius to fahrenheit
            output_value = (input_value * 9 / 5) + 32;
        } else if (document.getElementById("outputSelector").value == "Kelvin") {
            // converting from celsius to kelvin
            output_value = Number(input_value) + 273.15;
        } else {
            output_value = input_value;
        }
    }
    else if (document.getElementById("inputSelector").value == "Kelvin") {
        if (document.getElementById("outputSelector").value == "Fahrenheit") {
            // converting from kelvin to fahrenheit
            output_value = (input_value - 273.15) * 9 / 5 + 32;
        } else if (document.getElementById("outputSelector").value == "Celsius") {
            // converting from kelvin to celsius
            output_value = Number(input_value) - 273.15;
        } else {
            output_value = input_value;
        }
    }
    document.getElementById("outputTemperature").value = output_value;
};