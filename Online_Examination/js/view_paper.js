let getData = JSON.parse(localStorage.getItem('tempPaper'))
let PaperLength = (getData[0][Object.keys(getData[0])[0]].length);
// console.log(PaperLength);

// for(var i=0;i<PaperLength;i++){
var paperObj = getData[0][Object.keys(getData[0])]
let optionObj = paperObj[0].options
var optionLen = optionObj.length

let paperName = document.getElementById('paperName');
paperName.innerText = Object.keys(getData[0])
// console.log(optionObj);

showData(paperObj.length)
// }    
// $(document).ready(function () {
//     showData(PaperLength);
// });





function showData(FormLength) {


    let questionPaper = document.getElementById('question_paper')
    for (let questionCount = 0; questionCount < FormLength; questionCount++) {

        // let variable = getData[0][Object.keys(getData[questionCount])[questionCount]];
        // console.log(variable[0]);


        const queWrapper = document.createElement("div");
        queWrapper.setAttribute("class", `question${questionCount}`);

        const queDiv = document.createElement("div"); //1
        queDiv.setAttribute("class", "ques");

        const queHeading = document.createElement("h4"); // 1.1
        queHeading.innerText = "Question :-";


        const paraQue = document.createElement('p');
        paraQue.className = 'paragraph';
        paraQue.innerText = paperObj[questionCount].question



        queDiv.append(queHeading, paraQue);


        const optionsDiv = document.createElement("div"); // 2.2
        optionsDiv.setAttribute("class", "options");
        let optionLength = paperObj[questionCount].options

        for (var i = 0; i < optionLength.length; i++) {
            const optionDiv = document.createElement('div');
            const radioButton = document.createElement('input');




            radioButton.type = 'radio';
            radioButton.setAttribute("name", `radio${questionCount}-question${questionCount}`)
            radioButton.setAttribute("id", `question${questionCount}-option${i}`);
            radioButton.setAttribute("value", i + 1)

            const labelButton = document.createElement('label');
            labelButton.htmlFor = `question${questionCount}-option${i}`;

            labelButton.innerText = paperObj[questionCount].options[i]

            optionDiv.append(radioButton, labelButton);
            optionsDiv.append(optionDiv)

        }

        queWrapper.append(queDiv, optionsDiv);

        questionPaper.appendChild(queWrapper);
    }
}

// // var formLengthAll=document.getElementById('form').elements;
let arrAnswer = []

function getAllData() {

    for (var i = 0; i < PaperLength; i++) {

        var ele = document.getElementsByName(`radio${i}-question${i}`);

        for (var j = 0; j < ele.length; j++) {
            if (ele[j].checked) {
                arrAnswer.push(ele[j].value);
            }

        }
    }
    console.log("student",arrAnswer);
    
    checkQuestionAnswer();
}

function checkQuestionAnswer() {
    let studentResultObj = {}
    const checkAnswer = JSON.parse(localStorage.getItem('Answer'));
    const student = JSON.parse(localStorage.getItem('RESULT'));
    const AnsweObjLen = Object.keys(checkAnswer).length;
    
    let paperNameAns = Object.keys(checkAnswer)
    
    const paperOptionAns = checkAnswer[paperNameAns]
    console.log("teacher",paperOptionAns);
    
    for (var i = 0; i < AnsweObjLen; i++) {
        let totalMarks = 0;

        if (paperName.value== paperNameAns[i]) {

            for (var j = 0; j < PaperLength; j++) {
                if (arrAnswer[j] == paperOptionAns[j]) {
                    // console.log(arrAnswer[j] , paperOptionAns[j]);
                    totalMarks++;
                }
            }
        }
        studentResultObj = {
           [paperNameAns[i]]: totalMarks*2
        }
    }

    student.push(studentResultObj)
    console.log(student);
    localStorage.setItem("RESULT",JSON.stringify(student));
    alert('Thank You')
    window.location = "studentPage.html"
}


