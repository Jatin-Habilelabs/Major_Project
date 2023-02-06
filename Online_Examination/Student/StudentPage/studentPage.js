const variable = document.getElementsByClassName('main_body')[0]
const PaperNameDiv = document.createElement("div");
PaperNameDiv.setAttribute("class", "paper");

variable.append(PaperNameDiv);

let getData = JSON.parse(localStorage.getItem('questionPaper'));

// ============get all data from storage and show all papers =====================================


function showAllPaper() {

    console.log(getData);
    for (let i = 0; i < Object.keys(getData).length; i++) {

        let paperName = Object.keys(getData)[i]


// ===============add div for each paper========================
        let PaperDiv = document.createElement("div");
        PaperDiv.className = "Subjectfull";
        PaperDiv.setAttribute("id", `subpaper${i}`);
        PaperDiv.innerHTML = `<img id="img${i}" onclick="nextpage(event)" src="/assest/book.jpg" height="100%"  alt="">`;


        let paperNamePara = document.createElement("p")
        paperNamePara.id = "paperNamePara"
        paperNamePara.innerText = paperName


        PaperNameDiv.appendChild(PaperDiv);
        PaperDiv.appendChild(paperNamePara);
    }
}

// ======== when click set paper in  different object so easilt get data from that object===========

function nextpage(e) {

    let imgId = e.target.id;

    const subject = document.getElementById(imgId).parentNode
    console.log(subject);

    for (var j = 0; j < Object.keys(getData).length; j++) {
        let tempArr = []
        let tempPaper = {}

        if (subject.innerText == Object.keys(getData)[j]) {
            let xyz = getData[Object.keys(getData)[j]]

            console.log(xyz);
            tempPaper = {
                ...tempPaper,
                [Object.keys(getData)[j]]: xyz
            }

            tempArr.push(tempPaper)

            localStorage.setItem('tempPaper', JSON.stringify(tempArr))
            window.location.href = '/Student/ViewPage/viewPaper.html';
        }
    }

}
variable.onload = showAllPaper()


