

console.log(Object.keys(getData).length);









// console.log(Object.keys(getData));
// let FormLength=getData.length;
// const questionPaper = document.getElementById("question_paper");



// $(document).ready(function () {
//   showData(FormLength);
// });

// function showData(FormLength) {


//   for (let questionCount = 0; questionCount < FormLength; questionCount++) {
//     let variable = getData[questionCount];

//     const queWrapper = document.createElement("div");
//     queWrapper.setAttribute("class", `question${questionCount}`);

//     const queDiv = document.createElement("div"); //1
//     queDiv.setAttribute("class", "ques");

//     const queHeading = document.createElement("h4"); // 1.1
//     queHeading.innerText = "Question :-";


//     const paraQue = document.createElement('p');
//     paraQue.className = 'paragraph';
//     paraQue.innerText = variable["question"]



//     queDiv.append(queHeading, paraQue);


//     const optionsDiv = document.createElement("div"); // 2.2
//     optionsDiv.setAttribute("class", "options");
//     let optionLength = variable["options"]
   
//     for (var i = 0; i < optionLength.length; i++) {
//       const optionDiv=document.createElement('div');
//          const radioButton=document.createElement('input');

//          radioButton.type='radio';
//          radioButton.setAttribute("name",`radio${questionCount}-question${questionCount}`)
//          radioButton.setAttribute("id", `question${questionCount}-option${i}`);
//          radioButton.setAttribute("value",variable["options"][i])

//          const labelButton=document.createElement('label');
//          labelButton.htmlFor=`question${questionCount}-option${i}`;

//          labelButton.innerText=variable["options"][i]

//          optionDiv.append(radioButton,labelButton);
//          optionsDiv.append(optionDiv)
//     }

//     queWrapper.append(queDiv, optionsDiv);

//     questionPaper.appendChild(queWrapper);
//   }
// }

// // var formLengthAll=document.getElementById('form').elements;


// // function getAllData(e){
// //   e.preventDefault()
// //   for(var i=0;i<formLengthAll.length;i++){
// // //     if(formLengthAll[i].){}
// // // console.log(formLengthAll[i].value);
// // console.log(document.querySelector('input[type="radio"]:checked').value);
// //   }
// // }