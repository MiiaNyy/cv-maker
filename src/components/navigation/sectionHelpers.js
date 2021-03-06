const root = document.documentElement;
import html2pdf from "html2pdf.js";

function changeTheme(clr) {
    let obj = {};

    if ( clr === 'yellow' ) {
        obj.mainClr = "#FFC914";
        obj.accentClr = "#e84c20";
        obj.titleClr = "#ea4900";
        obj.fontClr = "#44423f";
        obj.iconHeader = '#4b4b4b';
    }
    if ( clr === 'blue' ) {
        obj.mainClr = "#2c699a";
        obj.accentClr = "#457b9d";
        obj.titleClr = "#007f9c";
        obj.fontClr = "#e5e5e5";
        obj.iconHeader = '#e5e5e5';

    }
    if ( clr === 'green' ) {
        obj.mainClr = "#61c9a8";
        obj.accentClr = "#0F7173";
        obj.titleClr = "#51907b";
        obj.fontClr = "#4b4b4b";
        obj.iconHeader = '#474747';
    }

    root.style.setProperty('--icon-header-clr', obj.iconHeader);

    root.style.setProperty('--main-accent-clr', obj.mainClr);
    root.style.setProperty('--dark-accent-clr', obj.accentClr);
    root.style.setProperty('--title-clr', obj.titleClr);
    root.style.setProperty('--header-font-clr', obj.fontClr);

}


function changeViewMode(form, formSetter, modeSetter, globalEditingMode) {

    const headerIcons = document.querySelectorAll('.header__icon');
    let obj = {};

    if ( form ) {
        obj.fontSize = 0.8 + 'rem';
        obj.maxWidth = 700 + 'px';
        obj.pointerBorder = 'none';
        obj.headerBorder = 'none';
        obj.pointerHover = 'none';
        obj.btnDisplay = 'none';
        obj.headerBtn = 'none !important';
        formSetter(false);
        modeSetter('Preview mode');
        globalEditingMode(false);

        headerIcons.forEach((icon)=>{
            icon.classList.add('hidden');
        })
    } else {
        obj.fontSize = 1 + 'rem';
        obj.maxWidth = 900 + 'px';
        obj.pointerBorder = 2 + "px solid white";
        obj.headerBorder = 2 + "px solid var(--main-accent-clr)";
        obj.pointerHover = 2 + "px solid #ffe877";
        obj.btnDisplay = 'block';
        obj.headerBtn = 'inline-block';
        formSetter(true);
        modeSetter('Editing mode');
        globalEditingMode(true);
        headerIcons.forEach((icon)=>{
            icon.classList.remove('hidden');
        })
    }

    root.style.setProperty('--content-font-size', obj.fontSize);
    root.style.setProperty('--content-width', obj.maxWidth);
    root.style.setProperty('--pointer-border', obj.pointerBorder);
    root.style.setProperty('--header-pointer-border', obj.headerBorder);
    root.style.setProperty('--pointer-hover', obj.pointerHover);
    root.style.setProperty('--btn-display', obj.btnDisplay);

}

function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById("cv-content");
    // Choose the element and save the PDF for our user.
    const opt = {
        margin: [-0.2, 0, 0, 0],
        filename: 'mycv.pdf',
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 4},
        jsPDF: {unit: 'in', format: 'A4', orientation: 'portrait'}
    };
    html2pdf()
        .set(opt)
        .from(element)
        .save();
}


export { changeTheme, changeViewMode, generatePDF };