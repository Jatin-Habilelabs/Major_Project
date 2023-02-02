$(document).ready(function () {
    $('#button_sign-in').click(function () {
        window.location.href = './login.html';

    })
    $('#button_sign-up').click(function () {
        window.location.href = './register.html';
    })

    $('#teacher').click(function () {
        if ($('#teacher').is(":checked")) {
            $('#teacher_data').show()
        }
        else {
            $('#teacher_data').hide()
        }

    })

})
// ================== put Register Data in local Storage====================


function getOutput(e) {
    e.preventDefault();
    var register_length = document.getElementById('form').elements;

    valid = ValidFun(register_length)
    let arr ;
    if(!localStorage.getItem('StoreData')){
        arr=[];
    }
    else{
        arr=JSON.parse(localStorage.getItem('StoreData'))
    }
    let allData = {}
    if (valid) {
        for (var i = 0; i < register_length.length; i++) {
            if (register_length[i].tagName != 'BUTTON' && register_length[i].type != 'checkbox') {
                let element = register_length[i].value;
                
            //   =================== store data =====================

                if (register_length[i].name != 'teacher_data') {
                    allData = {
                        ...allData,
                        [register_length[i].name]: element
                    };
                }

                if (register_length.teacher.checked) {
                    allData = {
                        ...allData,
                        "teacherId": register_length.teacher_data.value
                    };
                }
                if (!register_length.teacher.checked) {
                    allData = {
                        ...allData,
                        "teacherId": "not teacher"
                    };
                }
            }
        }
        arr.push(allData);
        const data = JSON.stringify(arr)
        localStorage.setItem('StoreData', data);

        alert("submitted sucessfully");
        document.getElementById('form').reset();
    }
}


// =====================CHECK CONDITIONS FOR VALIDATION================

function ValidFun(register_length) {
    let checkMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    var checkName = /[0-9]/

    for (var i = 0; i < register_length.length; i++) {

        if (register_length[i].tagName != 'BUTTON' && register_length[i].type != 'checkbox') {

            if (register_length.teacher.checked) {
                if (register_length[i].value == '') {
                    alert('Please fill the blank')
                    return false;
                }
            }
        }

    }

    if (register_length.username.value.match(checkName)) {
        alert('Name is not proper');
        return false;
    }
    if (isNaN(register_length.phoneNo.value) || register_length.phoneNo.value.length != 10) {
        alert('Phone Number is not proper')
        return false;
    }
    if (!(checkMail.test(register_length.email.value))) {
        alert('Email is not proper in name@gmail.com format')
        return false;
    }
    if (!register_length.password.value.match(/[$&+,:;=?@#|'<>.-^*()%!]/) || !register_length.password.value.match(/[0-9]/) || !register_length.password.value.match(/[a-z]/) ||
        register_length.password.value.length < 8 || !register_length.password.value.match(/[A-Z]/)) {
        console.log(register_length.password.value.length);
        alert('Make a Strong Password');
        return false;
    }
    return true;
}


// ===================CODE FOR EYE ENABLE & DISABLED======================

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


