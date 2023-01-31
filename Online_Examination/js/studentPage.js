const variable = document.getElementsByClassName('main_body')[0]

const PaperNameDiv = document.createElement("div");
PaperNameDiv.setAttribute("class", "paper");

variable.append(PaperNameDiv);

function showAllPaper() {
    const getData = JSON.parse(window.localStorage.getItem('questionPaper'));

    for (let i = 0; i < Object.keys(getData).length; i++) {

        let paperName = Object.keys(getData)[i]

        let PaperDiv = document.createElement("div");
        PaperDiv.className="Subjectfull";
        PaperDiv.setAttribute("id", `subpaper${i}`);
        PaperDiv.innerText = paperName




        PaperNameDiv.appendChild(PaperDiv);
    } 

    $(document).ready(function () {

        $('.Subjectfull').click(function () {
        for (var i = 0; i < Object.keys(getData).length; i++) {
         
                let subject = document.getElementById(`subpaper${i}`)
                
                console.log(subject.innerHTML);

            }
        })
})
};

variable.onload = showAllPaper()

