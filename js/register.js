
function validate() {
    var name = document.getElementById("txtName").value;
    var email = document.getElementById("txtEmail").value;
    var address = document.getElementById("txtAddress").value;
    var city = document.getElementById("txtCity").value;
    var agree = document.getElementById("chkAgree").checked;

    var maleRadio = document.getElementById("rdMale").checked;
    var femaleRadio = document.getElementById("rdFemale").checked;
    var otherRadio = document.getElementById("rdOther").checked;

    // Hide dulu sblm validasi
    document.getElementById("nameWarning").hidden = true;
    document.getElementById("emailWarning").hidden = true;
    document.getElementById("cityWarning").hidden = true;
    document.getElementById("addressWarning").hidden = true;
    document.getElementById("genderWarning").hidden = true;
    document.getElementById("chkAgreeWarning").hidden = true;

    var valid = true;
    if (name == "") {
        valid = false;
        document.getElementById("nameWarning").hidden = false;
    }

    if (email == "" ) {
        valid = false;
        document.getElementById("emailWarning").hidden = false;
    }
    else if (email.includes('@') == false) {
        valid = false;
        alert("Email should include @ and use .com!");
    }

    if (city == "") {
        valid = false;
        document.getElementById("cityWarning").hidden = false;
    }

    if (address == "") {
        valid = false;
        document.getElementById("addressWarning").hidden = false;
    }

    if (maleRadio == false && femaleRadio == false && otherRadio == false) {
        valid = false;
        document.getElementById("genderWarning").hidden = false;
    }

    if (agree == false) {
        valid = false;
        document.getElementById("chkAgreeWarning").hidden = false;
    }

    if (valid) {
        document.getElementById("nameWarning").hidden = true;
        document.getElementById("emailWarning").hidden = true;
        document.getElementById("cityWarning").hidden = true;
        document.getElementById("addressWarning").hidden = true;
        document.getElementById("genderWarning").hidden = true;
        document.getElementById("chkAgreeWarning").hidden = true;
        document.getElementById("rdMale").checked = false;
        document.getElementById("rdFemale").checked = false;
        document.getElementById("rdOther").checked = false;
        document.getElementById("chkAgree").checked = false;

        alert("Successfully Registered!");
    }
    return valid;
}

