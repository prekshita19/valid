window.onload = () => (document.querySelector(".alert").innerHTML = "");

function formValidate() {
  let Form = document.forms["RegForm"];

  let name = Form.Name.value; // get name
  let address = Form.Address.value; // get address
  let email = Form.EMail.value; // get email
  let password = Form.Password.value; //get password
  let confirmpassword = Form.cPassword.value; //get confirm password
  let phone = Form.phone.value; // get phone
  // console.log(name, address, email, password, confirmpassword, phone);

  returns = {
    name: false,
    address: false,
    email: false,
    password: false,
    confirmpassword: false,
    phone: false,
  };

  let name_condition = /[a-zA-Z0-9]{8,15}/g;
  let address_condition = /[a-zA-Z0-9]/g;
  let email_condition = /[a-zA-Z0-9\,\_]+\@{1}[a-zA-Z0-9]+\.[a-z]{2,3}/g;
  //   let password_condition = /[A-Z]+[a-z]+[0-9]+[!|@|#|$|%|^|&|*|(|)]/g;
  let password_condition = /^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
  let phone_condition = /[0-9]{10}/g;

  //test name field
  if (!name_condition.test(name)) {
    document.querySelector("#name").innerHTML =
      "Atleast 8 to 15 characters Required";
  } else {
    document.querySelector("#name").innerHTML = "";
    returns["name"] = true;
  }

  //test address field
  if (!address_condition.test(address)) {
    document.querySelector("#address").innerHTML =
      "Address should not be empty";
  } else {
    document.querySelector("#address").innerHTML = "";
    returns["address"] = true;
  }

  //email field
  if (!email_condition.test(email)) {
    document.querySelector("#email").innerHTML = "Invalid Email";
  } else {
    document.querySelector("#email").innerHTML = "";
    returns["email"] = true;
  }

  //password  and confirm password field
  if (!password_condition.test(password)) {
    document.querySelector("#pwd").innerHTML =
      "password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and atleast 1 symbol";
  } else {
    document.querySelector("#pwd").innerHTML = "";
    returns["password"] = true;
  }

  if (confirmpassword.length === 0) {
    document.querySelector("#cpwd").innerHTML = "Field is empty";
  } else {
    if (password != confirmpassword) {
      document.querySelector("#cpwd").innerHTML = "Password does not match";
    } else {
      document.querySelector("#cpwd").innerHTML = "";
      returns["confirmPassword"] = true;
    }
  }

  //phone field
  if (!phone_condition.test(phone)) {
    document.querySelector("#phone").innerHTML = "Invalid Phone";
  } else {
    document.querySelector("#phone").innerHTML = "";
    returns["phone"] = true;
  }

  return false;

  counts = 0;
  for (i of returns) {
    if (returns[i] === true) {
      counts += 1;
    } else {
    }
  }

  if (counts === returns.length()) {
    document.querySelector(".success").innerHTML = "Regex Validation Success";
  }
}
