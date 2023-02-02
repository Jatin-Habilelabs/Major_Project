$(document).ready(function () {
    $('#button_sign-in').click(function () {
        window.location.href = './login.html';

    })
    $('#button_sign-up').click(function () {
        window.location.href = './register.html';
    })
})

// =============GET DATA FROM Local Storage TO USE LOGIN=======================

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

        if (inputValue.teacherId != 'not teacher') {
            window.location.href = './teacher.html';
            return (inputValue.email == formLength.email.value && inputValue.password == formLength.pass.value)

        }
        else {
            let studentResultArr = [
                formLength.email.value
            ]

            localStorage.setItem("RESULT", JSON.stringify(studentResultArr))

            window.location.href = './studentPage.html';
            return (inputValue.email == formLength.email.value && inputValue.password == formLength.pass.value)

        }


    });
    if (ResultOutput.length == 0) {
        alert('Account not found , Register First')
    }
    else {
      
        alert('Login Successfully');
        document.getElementById('login_form').reset();
    }
}

// =========================== code for eye enable and disabled=====================

let passInput = document.getElementById('password');

$(document).ready(function () {
    $('#eye').click(function () {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            $('#eye').removeClass('bx bx-show');
            $('#eye').addClass('bx bx-low-vision');
        } else {
            passInput.type = 'password';
            $('#eye').removeClass('bx bx-low-vision');
            $('#eye').addClass('bx bx-show');

        }
    });
});


