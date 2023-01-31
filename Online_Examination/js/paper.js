


const questionPaper = document.getElementById("question_paper");

let subjectName = document.getElementById('paperName');


let questionCount = 0;
let questionPaperAll = {

}

function addQuestions() {
  let questionOptionCount = 0;

  const queWrapper = document.createElement("div");
  queWrapper.setAttribute("class", `question${questionCount}`);

  const queDiv = document.createElement("div"); //1
  queDiv.setAttribute("class", "ques");

  const queHeading = document.createElement("h4"); // 1.1
  queHeading.innerText = "Question :-";

  const queInput = document.createElement("input"); // 1.2
  queInput.setAttribute("class", "textQue");
  queInput.setAttribute("name", `question${questionCount}`);
  queInput.type = "text";
  queInput.value = "";

  queDiv.append(queHeading, queInput);

  const ansDiv = document.createElement("div"); //2
  ansDiv.setAttribute("class", "ans");

  const ansHeading = document.createElement("h4"); // 2.1
  ansHeading.innerText = "Ans :-";

  const optionsDiv = document.createElement("div"); // 2.2
  optionsDiv.setAttribute("class", "options");

  const optionButton = document.createElement("button");
  optionButton.innerText = "Add Option";
  optionButton.type = "button";
  optionButton.setAttribute("class", `add_options_${questionCount}`);

  ansDiv.append(ansHeading, optionButton);

  optionButton.onclick = function () {
    if (questionOptionCount < 4) {
      const optionInput = document.createElement("input");
      optionInput.name = `question${questionCount}-option${questionOptionCount}`;
      optionInput.setAttribute("type", "text");
      optionInput.setAttribute("class", "inputOption");

      optionsDiv.appendChild(optionInput);

      questionOptionCount++;
      console.log(questionOptionCount);
    }

  };

  queWrapper.append(queDiv, ansDiv, optionsDiv);

  questionPaper.appendChild(queWrapper);
  questionCount++;
}

function putData(e) {
  e.preventDefault();
  console.log("Form Submittted....");
  let checkLength = document.getElementById('form').elements
  let allQuestions = [];

  valid = checkValidation(checkLength);
  let eachQuestionData = {};
  if (valid) {
    for (let i = 0; i < questionCount; i++) {

      // fetching question Input Value
      const questionInput = document.querySelector(`.question${i} .ques input`);
      eachQuestionData = {
        ...eachQuestionData,
        "question" : questionInput.value
      };
      

      // All options of a question
      const options = document.querySelectorAll(`.question${i} .options input`);

      if (options.length > 0) {
        let optionsArray = [];

        for (let k = 0; k < options.length; k++) {
          optionsArray.push(options[k].value);
        }

        eachQuestionData = {
          ...eachQuestionData,
          "options" : optionsArray
        };
        // eachQuestionData["options"] = optionsArray;
      }

      allQuestions.push(eachQuestionData);
    }
  
  }

  // console.log(allQuestions);

  // const stringifiedData = JSON.stringify(allQuestions);
  questionPaperAll={
    ...questionPaperAll,
    [subjectName.value]: allQuestions
  }
  localStorage.setItem("questionPaper",JSON.stringify(questionPaperAll));
  // localStorage.setItem(subjectName.value,stringifiedData)

  document.getElementById("form").reset();
}


function checkValidation(dataLength) {
  for (var i = 0; i < dataLength.length; i++) {
    if (dataLength[i].tagName != "BUTTON") {
      if (dataLength[i].value == "") {
        alert("Please fill the blank");
        return false;
      }
    }
  }
  return true;
}