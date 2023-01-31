$(document).ready(function () {
    $('#button_sign-in').click(function () {
        window.location.href = './login.html';

    })
    $('#button_sign-up').click(function () {
        window.location.href = './register.html';
    })
})

// =============GET DATA FROM LS TO USE LOGIN=======================

var formLength = document.getElementById('login_Form').elements;
function Result(e) {
    e.preventDefault();

    for (var i = 0; i < formLength.length; i++) {

        if (formLength[i].tagName != 'BUTTON') {


            if (formLength[i].value == '') {

                alert('Please fill the blank')
                return false;
            }
        }

    }
  
    if (!localStorage.getItem('StoreData')) {
        alert('Please Register first');
        return false;
    }

   

let checkData = JSON.parse(localStorage.getItem('StoreData'));
var ResultOutput = checkData.filter(function (inputValue) {
    
    // console.log(inputValue.email)
    if(inputValue.teacherId != 'not teacher'){
        window.location.href = './teacher.html';
    return (inputValue.email == formLength.email.value && inputValue.password == formLength.pass.value)
    
    }
    else{
        window.location.href = './view_paper.html';
        return (inputValue.email == formLength.email.value && inputValue.password == formLength.pass.value)
        
    }


});
if (ResultOutput.length == 0) {
    alert('Account not found , Register First')
}
else {
    // if()
    alert('Login Successfully');
    // document.getElementById('login_form').reset();
}
}
