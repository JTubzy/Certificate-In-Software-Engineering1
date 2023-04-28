function Validate (){

  

    // picking input fields with their names
    let firstName = document.register.firstname;
    let lastName = document.register.lastname;
    let Town = document.register.town;
   
    

    
   
    let country = document.getElementById("Country");
    let gender = document.getElementById("gender");
    // let Dateofbirth= document.getElementById("Dob").value

    // pick error sections
    let firstNameError = document.getElementById("firstnameErr")
    let lastNameError = document.getElementById("lastnameErr")
    let genderError = document.getElementById("genderErr");
    let countryError = document.getElementById("CountryErr");
    let townError = document.getElementById("townErr");
   // let DateError= document.getElementById("dobErr");

     // validating first name for minimum length
     if(firstName.value.length < 2){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please the first name must be atleast 2 letters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    }
    // validating first name for maximum length
    else if(firstName.value.length > 250){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please the first name must be less than 250 letters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    } else {
        firstName.style.border = "1px solid green"
        firstNameError.innerHTML = ""
        lastName.focus()
    }


    
     // validating last name for minimum length
     if(lastName.value.length < 2){
        lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please the last name must be atleast 2 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    }
    // validating last name for maximum length
    else if(lastName.value.length > 250){
        lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please the last name must be less than 250 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    }

     // validating Adrress for minimum length
     if(Town.value.length < 2){
        Town.style.border = "1px solid red"
        townError.innerHTML = "Please the Address must be atleast 2 letters"
        townError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    }
    // validating first name for maximum length
    else if(Town.value.length > 250){
        Town.style.border = "1px solid red"
        townError.innerHTML = "Please the Address must be less than 250 letters"
        townError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    } else {
        Town.style.border = "1px solid green"
        townError.innerHTML = ""
        Town.focus()
    }

    // Country validations
    if (country.value == "") {
        country.style.border = "1px solid red";
        countryError.textContent = "Please select a Countryr";
        countryError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
      }else {
        country.style.border = "1px solid green"
        countryError.textContent = "";
      }

     // gender validations
     if (gender.value == "") {
      gender.style.border = "1px solid red";
      genderError.textContent = "Please select a gender";
      genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }else {
      gender.style.border = "1px solid green"
      genderError.textContent = "";
    }


        //Get the date from the TextBox.
        const regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
 
        // //Check whether valid dd/MM/yyyy Date Format.
        // if (!(Dateofbirth.value.match(regex))) {
        //     Dateofbirth.style.border = "1px solid red"
        //     DateError.textContent = "Date must be in format";
        //     DateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        //     return false;
        // }
           
           
    }
    function validateDob() {

let currentDate = new Date();
let Dateofbirth = document.getElementById("Dob").value;
let Dob = new Date(Dateofbirth);
let diff = new Date(currentDate - Dob)
let age = Math.abs(diff.getUTCFullYear() - 1970);

return age >= 18;
    }





