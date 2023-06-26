var Name;
var phonenumber;
var email;
var numberofPerson;
var date;
var time;
var couponCode;
var datevalue;
var timevalue;
function getData(){
    Name = document.getElementById("name").value;
    phonenumber = document.getElementById("phonenumber").value;
    email = document.getElementById("email").value;
    numberofPerson = document.getElementById("numberperson").value;
    datevalue = new Date(document.getElementById("Date").value);
    date = new Date(document.getElementById("Date").value).getTime();
    time = document.getElementById("Time").value;
    timevalue = document.getElementById("Time").value;
    couponCode = document.getElementById("coupon").value;
}

function NameValidation(name){
    if(name.length < 6){
        return false;
    }
    return true;
}
function phoneValidation(phone){
    if(!phone.startsWith("+(62)") || phone.length !=16){
        return false;
    }
    return true;
}

function emailValidation(email){
    let count = 0;
    // Validasi harus belakangnya @gmail dan @yahoo
    if(!email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com")){
        return false;
    }
    return true;
}

function numberofPersonValidation(NumberofPerson){
    if(NumberofPerson.localeCompare("0 Person")==0){
        return false;
    }
    return true;
}

function dateValidation(date){
    if(!date){
        return false
    }
    if(date <= Date.now()){
        return false;
    }
    return true;
}

function timeValidation(time){
    if(!time){
        return false;
    }
    time = time.split(":");
    let sec = parseInt(time[0])*60+parseInt(time[1]);
    if(sec < 540 || sec > 1140){
        return false;
    }
    return true;
}

function couponValidation(coupon){
    if(!coupon.includes("AbASk") && coupon.length!=0){
        return false;
    }
    return true;
}
function displayConfirmBox(){
    document.getElementById("content-form").style.filter = "blur(5px)";
    document.getElementById("steak").style.filter = "blur(5px)";
    document.getElementById("ConfirmationBox").style.display = "block";
    document.getElementById("namedetail").innerHTML = "<p>Name: "+ Name + "</p>";
    document.getElementById("phonenumberdetail").innerHTML = "<p>Phonenumber: "+ phonenumber + "</p>";
    document.getElementById("emaildetail").innerHTML = "<p>Email: "+ email + "</p>";
    document.getElementById("numberofpersondetail").innerHTML = "<p>Number of Person: "+ numberofPerson + "</p>";
    document.getElementById("datedetail").innerHTML = "<p>Date choosen: "+ datevalue + "</p>";
    document.getElementById("timedetail").innerHTML = "<p>Time: "+ timevalue + "</p>";

    document.getElementById("exit").onclick = ()=>{
        document.getElementById("ConfirmationBox").style.display = "none";
        document.getElementById("content-form").style.filter = "";
        document.getElementById("steak").style.filter = "";
        return false;
    }
    document.getElementById("confirm").onclick = ()=>{
        window.open("/reserve","_self");
    }
    
}
function Validation(){
    getData();
    
    // Validate Name
    if(!NameValidation(Name)){
        document.getElementById("error1").innerHTML = "<b>*Name must be more than 6 characters</b>";
        return false;
    }else{
        document.getElementById("error1").innerHTML = "";
    }
    // Validasi Phone
    if(!phoneValidation(phonenumber)){
        document.getElementById("error2").innerHTML = "<b>*Phonenumber must start with +(62) and must be 16 chars</b>";
        return false;
    }else{
        document.getElementById("error2").innerHTML = "";
    }
    // Validasi email
    if(!emailValidation(email)){
        document.getElementById("error3").innerHTML = "<b>*Email must end with @gmail.com dan @yahoo.com</b>";
        return false;
    }else{
        document.getElementById("error3").innerHTML = "";
    }

    // Validasi Number Of Person
    if(!numberofPersonValidation(numberofPerson)){
        document.getElementById("error4").innerHTML = "<b>*Number of Person to Choose at least 2 Person</b>";
        return false;
    }else{
        document.getElementById("error4").innerHTML = "";
    }

    // Validasi Date
    if(!dateValidation(date)){
        document.getElementById("error5").innerHTML = "<b>*Date Choosen need at least 1-Day after Today</b>";
        return false;
    }else{
        document.getElementById("error5").innerHTML = "";
    }
    // Validasi Time
    if(!timeValidation(time)){
        document.getElementById("error5").innerHTML = "<b>*Time Choosen must between 09:00 and 19.00</b>";
        return false;
    }else{
        document.getElementById("error5").innerHTML = "";
    }
    // Validasi Coupon
    if(!couponValidation(couponCode)){
        document.getElementById("error6").innerHTML = "<b>*Invalid Code</b>";
        return false;
    }else{
        document.getElementById("error6").innerHTML = "";
    }
    
    if(displayConfirmBox()){
        return true;
    }else{
        return false;
    }
        
}

