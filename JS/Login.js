
  var temp =0;
  
  function login() {  
    var email = document.getElementById("emailTextView").value;
    var password = document.getElementById("passwordTextView").value;
    if(email == "madhu" && password =="kullu") {
      window.location = "madhu/index.html";
    }else{  

      if(temp==0){
      window.alert("You are not allowed to enter..!!..");
      temp++;
      }
      else{
        window.alert("Ab zyada Gand na Phulao Maa chod denge tumhari..!!");
      }
      
    }

  }

  