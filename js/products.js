
function toggleCategory(category) {
    var paperHeader = document.getElementById('linkPaper');
    var officeHeader = document.getElementById('linkOffice');
    var otherHeader = document.getElementById('linkOther');

    //Clear
    paperHeader.classList.remove('menu-item-active');
    paperHeader.classList.remove('menu-item');

    officeHeader.classList.remove('menu-item-active');
    officeHeader.classList.remove('menu-item');

    otherHeader.classList.remove('menu-item-active');
    otherHeader.classList.remove('menu-item');

    var paperContent = document.getElementById('paperDiv');
    var officeContent = document.getElementById('officeDiv');
    var otherContent = document.getElementById('otherDiv');

    //Clear
    paperContent.style.display = 'none';
    officeContent.style.display = 'none';
    otherContent.style.display = 'none';


    if (category === 'paper') {
        paperHeader.classList.add('menu-item-active');
        officeHeader.classList.add('menu-item');
        otherHeader.classList.add('menu-item');
        paperContent.style.display = 'flex';
    }

    else if (category === 'office') {
        officeHeader.classList.add('menu-item-active');
        paperHeader.classList.add('menu-item');
        otherHeader.classList.add('menu-item');
        officeContent.style.display = 'flex';
    }

    else if (category === 'other') {
        otherHeader.classList.add('menu-item-active');
        paperHeader.classList.add('menu-item');
        officeHeader.classList.add('menu-item');
        otherContent.style.display = 'flex';
    }
}

function changePage(pageNumber) {
    let divHal1 = document.getElementById("paperPageOne");
    let divHal2 = document.getElementById("paperPageTwo");

    let navHal1 = document.getElementById("nav-page-1");
    let navHal2 = document.getElementById("nav-page-2");
    
    if (pageNumber === 1) {
        divHal1.style.display = "block";
        divHal2.style.display = "none";
        
        navHal2.classList.remove("active");
        navHal1.classList.add("active");
    }

    else if (pageNumber === 2) {
        divHal2.style.display = "block";
        divHal1.style.display = "none";
        
        navHal1.classList.remove("active");
        navHal2.classList.add("active");
    }
}