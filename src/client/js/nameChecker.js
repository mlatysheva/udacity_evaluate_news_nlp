function checkInput(inputText) {
    console.log("::: Running checkInput :::", inputText);
    if(inputText === '') {
        alert("The input is empty, enter a valid text!")
    }
}

export { checkInput }
