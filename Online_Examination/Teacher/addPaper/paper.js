
const questionPaper = document.getElementById("question_paper");

let subjectName = document.getElementById('paperName');


let questionCount = 0;
let questionPaperAll = {

}

// ================== Add Question Tag for adding question by teacher ======================

function addQuestions() {
  let questionOptionCount = 0;

  const queWrapper = document.createElement("div");
  queWrapper.setAttribute("class", `question${questionCount}`);

  const queDiv = document.createElement("div"); //1
  queDiv.setAttribute("class", "ques");

  const queHeading = document.createElement("h4"); // 1.1
  queHeading.innerText = "Question";

  const queInput = document.createElement("input"); // 1.2
  queInput.setAttribute("class", "textQue");
  queInput.setAttribute("name", `question${questionCount}`);
  queInput.type = "text";
  queInput.value = "";

  queDiv.append(queHeading, queInput);

  const ansDiv = document.createElement("div"); //2
  ansDiv.setAttribute("class", "ans");

  const ansHeading = document.createElement("h4"); // 2.1
  ansHeading.innerText = "Ans";

  const optionsDiv = document.createElement("div"); // 2.2
  optionsDiv.setAttribute("class", "options");

  const optionButton = document.createElement("button");
  optionButton.innerText = "Add Option";
  optionButton.type = "button";
  optionButton.setAttribute("class", `add_options_${questionCount}`);

  ansDiv.append(ansHeading, optionButton);

  // =========== Adding option on click add option =====================================

  optionButton.onclick = function () {
    if (questionOptionCount < 4) {
      const innerOptionDiv = document.createElement('div')
      innerOptionDiv.setAttribute("class", "innerOptionDiv")

      const optionRadio = document.createElement("input");
      optionRadio.name = `radio${questionCount}-option${questionCount}`;
      optionRadio.setAttribute("type", "radio");
      optionRadio.setAttribute("class", "radioOption");
      optionRadio.value = `${questionOptionCount + 1}`


      const optionInput = document.createElement("input");
      optionInput.name = `question${questionCount}-option${questionOptionCount}`;
      optionInput.setAttribute("type", "text");
      optionInput.setAttribute("class", "inputOption");


      innerOptionDiv.append(optionRadio, optionInput);
      questionOptionCount++;
      console.log(questionOptionCount);
      optionsDiv.append(innerOptionDiv);
    }

  };


  queWrapper.append(queDiv, ansDiv, optionsDiv);

  questionPaper.appendChild(queWrapper);
  questionCount++;
}

// ====================  
let checkLength = document.getElementById('form').elements

function putData(e) {
  e.preventDefault();

  let allQuestions = [];

  valid = checkValidation(checkLength);
  let eachQuestionData = {};
  if (valid) {
    for (let i = 0; i < questionCount; i++) {

      // =========================  fetching question Input Value =======================================
      const questionInput = document.querySelector(`.question${i} .ques input`);
      eachQuestionData = {
        ...eachQuestionData,
        "question": questionInput.value
      };


      // =================== All options of a question  ================================

      const options = document.querySelectorAll(`.question${i} .options input[type='text']`);

      if (options.length > 0) {
        let optionsArray = [];

        for (let k = 0; k < options.length; k++) {
          optionsArray.push(options[k].value);
        }

        eachQuestionData = {
          ...eachQuestionData,

          "options": optionsArray
        };

      }
    
      allQuestions.push(eachQuestionData);
    }


    let getallans = getAllAnswer();

    if (getallans) {
      questionPaperAll = {
        ...questionPaperAll,
        [subjectName.value]: allQuestions
      }
  
  
      localStorage.setItem("questionPaper", JSON.stringify(questionPaperAll));
  
  
      document.getElementById("form").reset();
    }
  }

}

// ====================== validation for paper =================================
function checkValidation(dataLength) {
  for (var i = 0; i < dataLength.length; i++) {
    if (dataLength[i].tagName != "BUTTON") {
      if (dataLength[i].value == "") {
        alert("Please fill the blank");
        return false;
      }
      if (questionCount < 1) {
        alert('Please add questions');
        return false;
      }

    }
  }
  return true;
}

// ============================ store all correct answer======================================

function getAllAnswer() {

    let answers = {}
    let questionAnswer = []
    let countOptionAnswer=0;
    for (var i = 0; i < questionCount; i++) {

      var ele = document.getElementsByName(`radio${i + 1}-option${i + 1}`);
      for (var j = 0; j < ele.length; j++) {
        if (ele[j].checked) {
          countOptionAnswer++
          questionAnswer.push(ele[j].value);
        }
      }
    }

    if(countOptionAnswer!=questionCount){
      alert("Please select option for correct answer")   
        return false;
    }

    answers = {
      ...answers,
      [paperName.value]: questionAnswer
    }

    localStorage.setItem('Answer', JSON.stringify(answers))
    return true

}
