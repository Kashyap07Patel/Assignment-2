let fnamenode=document.getElementById('fname');
let error1=document.getElementById('error1');

let lnamenode=document.getElementById('lname');
let error2=document.getElementById('error2');

let emailnode=document.getElementById('email');
let error3=document.getElementById('error3');

let phonenode=document.getElementById('phone');
let error4=document.getElementById('error4');

let passnode=document.getElementById('pass');
let error5=document.getElementById('error5');

let c_passnode=document.getElementById('c_pass');
let error6=document.getElementById('error6');

let checknode=document.getElementById('checkbox');


function fnameCheck(){
    error1.innerHTML="";
    let fname=fnamenode.value;
    if(fname==""){
        error1.innerHTML="First Name is required";
        fnamenode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else if(fname.length<2){
        error1.innerHTML="First Name should have atleast 2 characters";
        fnamenode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else{
        fnamenode.style.boxShadow="inset 4px 4px 4px #cbced1, inset -4px -4px 4px #ffffff";
        return true;
    }
}

function lnameCheck(){
    error2.innerHTML="";
    let lname=lnamenode.value;
    if(lname==""){
        error2.innerHTML="Last Name is required";
        lnamenode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else if(lname.length<2){
        error2.innerHTML="Last Name should have atleast 2 characters";
        lnamenode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else{
        lnamenode.style.boxShadow="inset 4px 4px 4px #cbced1, inset -4px -4px 4px #ffffff";
        return true;
    }
}

function emailCheck(){
    error3.innerHTML="";
    let email=emailnode.value;
    let ss=email.substring(email.indexOf("@")+1);
    if(email==""){
        error3.innerHTML="E-mail is required";
        emailnode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else if(!email.includes("@")||ss==""){
        error3.innerHTML="Invalid E-mail";
        emailnode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else{
        emailnode.style.boxShadow="inset 4px 4px 4px #cbced1, inset -4px -4px 4px #ffffff";
        return true;
    }
}

function phoneCheck(){
    error4.innerHTML="";
    let phone=phonenode.value;
    let regexp = new RegExp("^[0-9]{10}$");
    if(phone==""){
        error4.innerHTML="Phone Number is required";
        phonenode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else if(regexp.test(phone)==false){
        error4.innerHTML="Phone Number should have 10 digits";
        phonenode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else{
        phonenode.style.boxShadow="inset 4px 4px 4px #cbced1, inset -4px -4px 4px #ffffff";
        return true;
    }
}

function passCheck(){
    error5.innerHTML="";
    let pass=phonenode.value;
    let regexp=new RegExp("^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&-+=()])");
    if(pass==""){
        error5.innerHTML="Password is required";
        passnode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else if(regexp.test(pass)==false){
        error5.innerHTML="Password must be alphanumeric";
        passnode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else{
        passnode.style.boxShadow="inset 4px 4px 4px #cbced1, inset -4px -4px 4px #ffffff";
        return true;
    }
}

function c_passCheck(){
    error6.innerHTML="";
    let pass=passnode.value;
    let c_pass=c_passnode.value;
    if(c_pass==""){
        error6.innerHTML="This field is required";
        c_passnode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else if(c_pass!=pass){
        error6.innerHTML="Password does not match ";
        c_passnode.style.boxShadow="inset 4px 4px 4px #8b4a4a, inset -4px -4px 4px rgb(255, 118, 118)";
        return false;
    }
    else{
        c_passnode.style.boxShadow="inset 4px 4px 4px #cbced1, inset -4px -4px 4px #ffffff";
        return true;
    }
}
function showpass(){
    if(checknode.checked){
        passnode.type="text";
        c_passnode.type="text";
    }
    else{
        passnode.type="password";
        c_passnode.type="password";
    }
}


function validateForm(){
    let state1=fnameCheck();
    let state2=lnameCheck();
    let state3=emailCheck();
    let state4=phoneCheck();
    let state5=passCheck();
    let state6=c_passCheck();
    return(state1 && state2 && state3 && state4 && state5 && state6);
}
