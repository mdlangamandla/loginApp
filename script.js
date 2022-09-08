function login()
{
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd1").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(uname =='')
  {
    alert("Please enter username.");
  }
  else if(pwd=='')
  {
        alert("Please enter the password.");
  }
  else if(!filter.test(uname))
  {
    alert("Please enter valid email.");
  }
  else if(pwd.length < 6 || pwd.length > 6)
  {
    alert("Password minimum length is 6.");
  }
  else
  {
alert('Thank You for Login & You are redirecting to the TO-DO List App');
//Redirecting to other page or webste code or you can set your own html page.
     window.location = "https://mdlangamandla-todo-list.vercel.app/";
    }
}