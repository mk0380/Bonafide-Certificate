document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll('.input-data input');

    inputFields.forEach(input => {
        input.addEventListener('input', function () {
            const label = this.parentNode.querySelector('label');
            if (this.value.trim() !== '') {
                label.classList.add('focused');
            } else {
                label.classList.remove('focused');
            }
        });
    });
});


import { PDFDocument, rgb } from 'https://cdn.skypack.dev/pdf-lib'


const generatePDF = async (name, roll, programme, branch, roomNo, hallNo, joiningYear, permanent, contact, parentName, contactParent, purpose) => {

    const exBytes = await fetch("./Bonafide_Certificate.pdf").then((res) =>
        res.arrayBuffer()
    );

    const exFont = await fetch("./Sanchez-Regular.ttf").then((res) =>
        res.arrayBuffer()
    );


    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);

    const myFont = await pdfDoc.embedFont(exFont)

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const font_size = 10;

    firstPage.drawText(name, {
        x: 300,
        y: 646,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(roll, {
        x: 300,
        y: 632,
        size: font_size+1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(programme, {
        x: 300,
        y: 614,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(branch, {
        x: 300,
        y: 578,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(roomNo, {
        x: 300,
        y: 523,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(hallNo, {
        x: 300,
        y: 541,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (purpose.toUpperCase().length > 158) {
        firstPage.drawText(purpose.substring(0, 46) + "-", {
            x: 300,
            y: 490.5,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(purpose.substring(46, 102)+"-", {
            x: 230,
            y: 478,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(purpose.substring(102, 158)+"-", {
            x: 230,
            y: 468,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(purpose.substring(158, purpose.length), {
            x: 230,
            y: 458,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if(purpose.length > 102 && purpose.length <=158){
        firstPage.drawText(purpose.substring(0, 46) + "-", {
            x: 300,
            y: 490.5,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(purpose.substring(46, 102)+"-", {
            x: 230,
            y: 478,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(purpose.substring(102, purpose.length), {
            x: 230,
            y: 468,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

    } else if(purpose.length > 46 && purpose.length <=102){

        firstPage.drawText(purpose.substring(0, 46) + "-", {
            x: 300,
            y: 490.5,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(purpose.substring(46, purpose.length), {
            x: 230,
            y: 478,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

    }else {
        firstPage.drawText(purpose, {
            x: 300,
            y: 490.5,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

        firstPage.drawText(joiningYear, {
            x: 300,
            y: 596,
            size: font_size+1,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(parentName, {
            x: 300,
            y: 440,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(contactParent, {
            x: 300,
            y: 422,
            size: font_size+1,
            font: myFont,
            color: rgb(0, 0, 0),
        });

    if (permanent.length > 41) {
        firstPage.drawText(permanent.substring(0, 41)+"-", {
            x: 300,
            y: 403,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(41, permanent.length), {
            x: 300,
            y: 391,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

    } else {
        firstPage.drawText(permanent, {
            x: 300,
            y: 403,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }


    firstPage.drawText(contact, {
        x: 300,
        y: 560,
        size: font_size+1,
        font: myFont,
        color: rgb(0, 0, 0),
    });


        const pdfBytes = await pdfDoc.save();

        var file = new File(
        [pdfBytes],
        "Bonafide Certificate.pdf",
        {
          type: "application/pdf;charset=utf-8",
        }
      );
     saveAs(file);

    // const uri = await pdfDoc.saveAsBase64({ dataUri: true })

    // document.querySelector('#mypdf').src = uri
};

const submitBtn = document.getElementById('btn')

const name = document.querySelector("#studentInput")
const roll = document.querySelector("#rollInput")
const programme = document.querySelector("#programmeInput")
const branch = document.querySelector("#branchInput")
const roomNo = document.querySelector("#roomNoInput")
const hallNo = document.querySelector("#hallInput")
const joiningYear = document.querySelector("#yearInput")
const permanent = document.querySelector("#perAddInput")
const contact = document.querySelector("#mobileInput")
const parentName = document.querySelector("#parentNameInput")
const contactParent = document.querySelector("#contactParInput")
const purpose = document.querySelector("#purposeInput")

submitBtn.addEventListener('click', (ev) => {

    ev.preventDefault()

    if(name.value.length==0 || roll.value.length==0 || roomNo.value.length==0 || hallNo.value.length==0 || parentName.value.length==0 || contactParent.value.length==0 || joiningYear.value.length==0 || permanent.value.length==0 || contact.value.length==0 || purpose.value.length==0){
        alert("Please fill all the required details before submitting")
        return
    }
    generatePDF(name.value.toUpperCase(), roll.value, programme.value.toUpperCase(), branch.value.toUpperCase(), roomNo.value.toUpperCase(), hallNo.value.toUpperCase(), joiningYear.value, permanent.value.toUpperCase(),  contact.value, parentName.value.toUpperCase(), contactParent.value, purpose.value.toUpperCase())
})







