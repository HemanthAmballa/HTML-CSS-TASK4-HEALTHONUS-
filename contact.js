function selectValidation(arg){
    const stateValue =  arg.value;
    const code = document.getElementById("code");
    code.value = stateValue+" -"+" PROMO";
    
}

function validateGender(arg){
    
      if((arg.checked) && (arg.value=="Male")){
              console.log("hello")
               alert('“Hello Sir”')        
      }else if((arg.checked) && (arg.value=="Female")){

                alert('“Hello Lady”')   
      }


}

function  validateEmail(arg){
      
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(arg.value);  
    var spanval =   document.getElementById("spTwo");
    if(isValid && arg.value!="" ){
      
        spanval.innerHTML="*";
        spanval.className="inner_spanm";
    }else{
        spanval.innerHTML="email is Required";
        spanval.className="spanvaltwo";
     }
}


function validate(){
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var org = document.getElementById("Organization").value;
    if(name==""){
        var spanval = document.getElementById("spOne");
        spanval.innerHTML="Name is Required";
        spanval.className="spanval"
    }
    if(email==""){
        var spanval =   document.getElementById("spTwo");
        spanval.innerHTML="Email is Required";
        spanval.className="spanvaltwo"
    }
    if(org==""){
        var spanval =   document.getElementById("spThree");
        spanval.innerHTML="Org name is Required";
        spanval.className="spanvalthree"
       
    }
    console.log("val")
    event.preventDefault();
    if(name=="" || email=="" || org=="" ){
        console.log("val2")
          document.getElementById("spanone").innerHTML="Please fill all the required fields below";
     }else{
        console.log(val3)
        document.getElementById("spanone").style.display="none";
     }
 
    
}


function validateName(arg){

    var name = arg.value;
    var spanval =   document.getElementById("spOne");
    if(name!=""){
       
        spanval.innerHTML="*";
        spanval.className="inner_span";
     }else{
        spanval.innerHTML="name is Required";
        spanval.className="spanval";
     }
}

function validateOrg(arg){
    var org = arg.value;
    var spanval =   document.getElementById("spThree");
    if(org!=""){
     
        spanval.innerHTML="*";
        spanval.className="inner_spans";
    }else{
        spanval.innerHTML="Org name is Required";
        spanval.className="spanvalthree";
     }
}

function validateReset(){
  
    var spanval =   document.getElementById("spOne");
        spanval.innerHTML="*";
        spanval.className="inner_span";
     var spanval2 =   document.getElementById("spTwo");
        spanval2.innerHTML="*";
        spanval2.className="inner_spanm";
    var spanval3 =   document.getElementById("spThree");
        spanval3.innerHTML="*";
        spanval3.className="inner_spans";
      
        document.getElementById("spanone").innerHTML="";

}
