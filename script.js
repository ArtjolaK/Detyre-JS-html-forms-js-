const form=document.getElementById ("form")
const nameInput=document.getElementById("name")
const nameError=document.getElementById("nameError")
const emailInput=document.getElementById("email")
const emailError=document.getElementById("emailError")
const passwordInput=document.getElementById("psw")
const passwordError=document.getElementById("passwordError")
const checkedLevel=document.getElementById("levelOfDevelopment")
const inputInbox= document.getElementById("input-box")
const inputInboxSec=document.getElementById("input-box1")
const inputInboxThird=document.getElementById("input-box2")


form.addEventListener("submit",function (event){
    event.preventDefault(); 
    
    const isFormValid=validateFormElements();
    if(isFormValid){
        console.log({
            name:nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        });
        inputInbox.style.border='none';
        nameError.style.color="green"
        emailError.style.color="none"
        passwordError.style.color="none"
        inputInboxSec.style.border="none";
        inputInboxThird.style.border="none";
     } else{
        inputInbox.style.border='1.2px solid red';
        nameError.style.color="red"
        emailError.style.color="red"
        passwordError.style.color="red"
        inputInboxSec.style.border="1.2px solid red";
        inputInboxThird.style.border="1.2px solid red";
        }
    
 
}); 

  function validateFormElements() {
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const checkedLevelValue=checkedLevel.value;
    
   
    
    if (nameValue.length <= 0) {
        nameError.innerText = "*Name is required";
        return false;
      } else if (nameValue.length <= 6) {
        nameError.innerText = "Enter a valid username*";
        return false;
      } else {
        nameError.innerText = "Username available";
      }
    
      if (emailValue.length <= 0) {
        emailError.innerText = "*Email is required";
        return false;
      } else if (emailValue.length < 6) {
        emailError.innerText = "Enter a valid email*";
        return false;
      } else {
        emailError.innerText = "Email is available";
      }
    
      if (passwordValue.length <= 0) {
        passwordError.innerText = "*Password is required";
        return false;
      } else if (passwordValue.length < 3) {
        passwordError.innerText = "*Yuor password is little secure";
        return false;
      } else {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        //Minimum eight characters, at least one letter and one number
        if (!regex.test(passwordValue)) {
          passwordError.innerText =
            "*Enter a valid password ";
          return false;
        } else {
          passwordError.innerText = "Password is secured";
        }
        return true;
      }
   

   }
           
   let radioButtons = document.querySelectorAll('input[name="levelOfDevelopment"]');
   let result = document.getElementById("result")
   let findSelected =()=>{
    let selected=document.querySelector("input[name='levelOfDevelopment']:checked").value;
    result.textContent=`Checked:${selected}`;
   }
   radioButtons.forEach(radioButtons =>{
    radioButtons.addEventListener("change", findSelected);
   });
   findSelected();