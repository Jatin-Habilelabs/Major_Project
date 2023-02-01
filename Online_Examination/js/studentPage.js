const variable = document.getElementsByClassName('main_body')[0]
// let getData=JSON.parse(localStorage.getItem(''))
const PaperNameDiv = document.createElement("div");
PaperNameDiv.setAttribute("class", "paper");

variable.append(PaperNameDiv);

function showAllPaper() {
    let getData = JSON.parse(window.localStorage.getItem('questionPaper'));
    // console.log(getData);
    for (let i = 0; i < Object.keys(getData).length; i++) {

        let paperName = Object.keys(getData)[i]

        let PaperDiv = document.createElement("div");
        PaperDiv.className = "Subjectfull";
        PaperDiv.setAttribute("id", `subpaper${i}`);
        PaperDiv.innerText = paperName

        let paperNamePara = document.createElement("p")
        paperNamePara.id = "paperNamePara"
        paperNamePara.innerText = paperName




        PaperNameDiv.append(PaperDiv, paperNamePara);
    }

    $(document).ready(function () {

        $('.Subjectfull').click(function () {

            // const subject = $(this)
            for (var j = 0; j < Object.keys(getData).length; j++) {
                let tempArr = []
                let tempPaper = {}

                if ($(this).html() == Object.keys(getData)[j]) {
                    let xyz = getData[Object.keys(getData)[j]]

                    // for (var i = 0; i < xyz.length; i++) {

                    console.log(xyz);
                    tempPaper = {
                        ...tempPaper,
                        [Object.keys(getData)[j]]: xyz
                    }

                    tempArr.push(tempPaper)
                    // }

                    localStorage.setItem('tempPaper', JSON.stringify(tempArr))
                    window.location.href = 'view_paper.html';
                }
            }
        })
    })
};

variable.onload = showAllPaper()

