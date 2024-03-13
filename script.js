function validateSyntax() {
    // Get the input value from the HTML input element with id 'petInput'
    let input = document.getElementById('petInput').value;

    // Placeholder for validation result
    let result = '';

    // Function to validate input syntax
    function validateInput() {
        // Convert input to lowercase for case-insensitive comparison
        input = input.toLowerCase();

        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (!input.startsWith("pet_")) {
            result = "Invalid Syntax"; // Set result to indicate invalid syntax
        }

        // Initialize flags to track presence of string and number characters
        let stringFound = false;
        let numberFound = false;

        // Extract the part of input after 'pet_'
        let newString = input.substring(4);

        // Loop through each character of the extracted string
        for (let i = 0; i < newString.length; i++) {
            // Check if the character is a number
            if (!isNaN(parseInt(newString[i]))) {
                numberFound = true; // Set numberFound flag to true if a number is found
            }
        }

        // Regular expression to match alphabetic characters
        const regex = /[a-z]/;
        // Check if any alphabetic character is found in the extracted string
        const found = newString.match(regex);

        if (found) {
            stringFound = true; // Set stringFound flag to true if alphabetic character is found
        }

        // Check if both string and number characters are present
        if (numberFound && stringFound) {
            result = "Valid Syntax"; // Set result to indicate valid syntax
        } else {
            result = "Invalid Syntax"; // Set result to indicate invalid syntax
        }
    }

    // Call the validateInput function to perform syntax validation
    validateInput();

    // Update the content of HTML element with id 'result' to display the validation result
    document.getElementById('result').innerText = result;
}
