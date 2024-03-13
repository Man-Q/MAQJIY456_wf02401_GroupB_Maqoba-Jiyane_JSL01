function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    function validateInput(){
        input = input.toLowerCase();

        if(!input.startsWith("pet_")){
            result = "Invalid Syntax";
            console.log(result);
        }

        let stringFound = false;
        let numberFound = false;
        let newString = input.substring(4);

        for(let i = 0; i < newString.length; i++){
            
            if(!isNaN(parseInt(newString[i]))){
                numberFound = true;
            }
        }

        const regex = /[a-z]/;
        const found = newString.match(regex);

        if(found){
            stringFound = true;
        }

        if(numberFound && stringFound){
            result = "Valid Syntax";
        }else{
            result = "Invalid Syntax";
        }
    }
    validateInput();
    document.getElementById('result').innerText = result;
}


