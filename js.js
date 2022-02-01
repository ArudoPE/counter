//The value is set to 0 by default
//First I neeed to capture the click on buttons
let CountButton = document.getElementById("CountButton");
CountButton.addEventListener("click", countFunction);
let DiscountButton = document.getElementById("DiscountButton");
DiscountButton.addEventListener("click", discountFunction);

//Functions
function countFunction() {
    document.getElementById("error-message").innerHTML = "";
    let value = document.getElementById("input-number");
    let temp = parseInt(value.value);
    temp++;
    value.value = temp;
}
function discountFunction() {
    let value = document.getElementById("input-number");
    let temp = parseInt(value.value);
    if(temp == 0) {
        document.getElementById("error-message").innerHTML = "You can't go below 0!";
    }
    else {
        document.getElementById("error-message").innerHTML = "";
        temp--;
        value.value = temp;
    }
}