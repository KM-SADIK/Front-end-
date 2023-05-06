function validatelogin(){
    const email=document.form.email.value;
    const password=document.form.password.value;


    if(email=="" || password==""){
        alert("please fill the entire details");
        return false;
    }else if(password.length<6){
        alert("Password must contains 8 characters");
        return false;
    }else{
        alert("Login Successfully");
        return true;
    }
}
function validateregister(){
    var email=document.form.email.value;
    var password=document.form.password.value;
    var confirmpassword=document.form.confirmpassword.value;
    
    if(email=="" || password=="" || confirmpassword==""){
        alert("please fill the entire details");
        return false;
    }else if(password.length<6){
        alert("Password must contains 8 characters");
        return false;
    }else if(password!=confirmpassword){
        alert("Password does't match");
        return false;
    }else{
        alert("Registration Successfully");
        return true;
    }
}