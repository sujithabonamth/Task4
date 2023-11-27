function updatePromoCode() {
    var stateDropdown = document.getElementById("state");
    var promoCodeField = document.getElementById("promoCode");
 
   
    var selectedState = stateDropdown.value;
 
   
    promoCodeField.value = selectedState.toUpperCase() + "-PROMO";
  }
function showGreeting() {
    var genderRadioButtons = document.getElementsByName("gender");
    var selectedGender;
 
    for (var i = 0; i < genderRadioButtons.length; i++) {
        if (genderRadioButtons[i].checked) {
            selectedGender = genderRadioButtons[i].value;
            break;
        }
    }
 
    if (selectedGender === "Male") {
        alert("Hello Sir");
    } else if (selectedGender === "Female") {
        alert("Hello Lady");
    }
}
function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
document.getElementById("detailsform").addEventListener("submit", function(event) {
    event.preventDefault();

    validationform(event);
});
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("myname").addEventListener("input", clearNameError);
document.getElementById("email").addEventListener("input", clearEmailError);
document.getElementById("orgname").addEventListener("input",clearOrgError);
});
function validationform(event) {
    console.log("Validation form started");
    event.preventDefault();
    
    var myname = document.forms["detailsform"]["myname"].value;
    var email = document.forms["detailsform"]["email"].value;
    var orgname = document.forms["detailsform"]["orgname"].value;
    var errorMessageDiv = document.getElementById("errorMessage");
    var successMessageDiv = document.getElementById("successMessage");

 
    var nameError = document.getElementById("nameerror");
    var emailError = document.getElementById("emailerror");
    var orgError = document.getElementById("orgerror");
    nameError.textContent = "";
    emailError.textContent = "";
    orgError.textContent = "";
    errorMessageDiv.textContent = "";
    successMessageDiv.textContent = "";
   
    if (myname.trim() === "") {
        nameError.textContent = "Name is required.";
    } else if (!isValidName(myname)) {
        nameError.textContent = "Numbers are not allowed in the name.";
 
    }
 
    if (email.trim() === "") {
        emailError.textContent = "Email is required.";
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email.";
    }
 
    if (orgname.trim() === "") {
        orgError.textContent = "Organization Name is required.";
    } else if (!isValidOrgname(orgname)) {
        orgError.textContent = "Invalid Organization Name.";
    }
 
    if (myname === "" || !isValidEmail(email) || orgname === "") {
        // Display the error message
        errorMessageDiv.textContent = "Please fill all the required fields below";
        console.log("Form submission prevented due to validation errors");
        return false; // Prevent form submission
    } else {
        // Clear the error message if all required fields are filled
        errorMessageDiv.textContent = "";
    
        // Display the success message
        successMessageDiv.textContent = "Form submitted successfully!";
        console.log("Validation form completed successfully");
        return true; // Allow the form submission
    }
     
   
 
   
 
   
    function isValidName(myname) {
        var nameRegex = /^[a-zA-Z\-]+$/;
        return nameRegex.test(myname);
    }
 
  
function isValidOrgname(orgname) {
    var nameRegex = /^[a-zA-Z\-]+$/;
    return nameRegex.test(orgname);
}

}
function clearNameError() {
    document.getElementById("nameerror").textContent = "";
}
function clearEmailError() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailerror");

    if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email.";
        return false; // Email is invalid
    } else {
        emailError.textContent = "";
        return true; // Email is valid
    }
}
function clearOrgError(){
    document.getElementById("orgerror").textContent = ""; 
}
 
 function clearForm(event) {
  
   event.preventDefault(); // Prevent default form submission
   document.getElementById("detailsform").reset();
   document.getElementById("successMessage").textContent = "";
}