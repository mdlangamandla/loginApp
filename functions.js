function login(form){
    if((form.email.value == "") && (form.password.value == "")){
      self.location.href = "";
      }
      else{
        console.log(form.email.value, form.password.value);
        // alert("You have successfully Logged in!!!");
        return true;
      }
  }