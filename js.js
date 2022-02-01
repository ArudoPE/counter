//The value is set to 0 by default
//First I neeed to capture the click on buttons
let CountButton = document.getElementById("CountButton");
CountButton.addEventListener("click", countFunction);
let DiscountButton = document.getElementById("DiscountButton");
DiscountButton.addEventListener("click", discountFunction);




//Functions
function countFunction() {
    let value = document.getElementById("input-number");
    let temp = parseInt(value.value);
    temp++;
    value.value = temp;
}
function discountFunction() {
    let value = document.getElementById("input-number");
    let temp = parseInt(value.value);
    if(temp == 0) {
        let errorMessage = document.getElementById("error-message");
        errorMessage.value = "You can't go below 0!";
    }
    else {
        temp--;
        value.value = temp;
    }
}


//document.getElementById("input-number").value = 1;