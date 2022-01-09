console.log("Hello from script.js!");
//Main Functions
let colnum = 3;
let defcolor = "white";
let mouseDown= false;
document.body.onmousedown = function(){
    mouseDown=true;
}
document.body.onmouseup = function(){
    mouseDown=false;
}
//Create Rows
function createrow(){
    const row = document.createElement("div");
    row.classList.add("row");
    for (let steps=0;steps<colnum;steps++){
        const col = document.createElement("div");
        col.classList.add("col-sm","border","border-dark","box");
        col.addEventListener("click",$(".col-sm").click(function(){
            $(this).css("background-color",defcolor);
        }));
        row.append(col);
    }
    $(".mt-5").append(row);
    row.addEventListener("click",$(".col-sm").click(function(){
        $(this).css("background-color",defcolor);
    }));
}
//Delete Rows
function deleterow(){
    var rowcont = document.querySelector(".mt-5");
    rowcont.removeChild(rowcont.lastChild);
}
//Create Columns
function createcolumn(){
    colnum++;
    const newrow = document.createElement("div");
    newrow.classList.add("col-sm","border","border-dark","box");
    newrow.addEventListener("click",$(".col-sm").click(function(){
        $(this).css("background-color",defcolor);
    }));
    $('.row').append(newrow);
    newrow.addEventListener("click",$(".col-sm").click(function(){
        $(this).css("background-color",defcolor);
    }));
}
//Delete Columns
function deletecol(){
   let mycol = document.getElementsByClassName("row");
   for (let steps=0;steps<mycol.length;steps++){
       mycol[steps].removeChild(mycol[steps].lastElementChild);
   }
   colnum--;
}
//Change click color
function changeClickColor(){
    const check = document.querySelector("#colselect");
    defcolor=check.value;
}
//Change all white
function fillwhite(){
    let tilelist = document.getElementsByClassName("col-sm border border-dark box");
    for (let steps=0;steps<tilelist.length;steps++){
        if (tilelist[steps].style.backgroundColor=="" || tilelist[steps].style.backgroundColor=="white"){
            tilelist[steps].style.backgroundColor=defcolor;
        }
    }
}
function colordrag(elem){
    if(mouseDown){
        elem.classList.add("dragging");
        $(".dragging").css("background-color",defcolor);
        elem.classList.remove("dragging");
    }
}

//Main JQuery
//create rows
$('.add-row').click(function (){
    createrow();
})
//create columns
$('.add-col').click(function(){
    createcolumn();
});
//delete rows
$('.del-row').click(function(){
    deleterow();
})
//delete columns
$('.del-col').click(function(){
    deletecol();
})
//choose defaul color
$('.option').click(function(){
    changeClickColor();
    addListeners();
})
//click on to change color
$(".col-sm").click(function(){
    $(this).css("background-color",defcolor);
})
//fill all white boxes
$(".change-all-white").click(function(){
   fillwhite();
})
//fill ALL boxes
$(".fill-all-boxes").click(function(){
    $(".col-sm").css("background-color",defcolor);
})
//Drag over boxes to change color
$(".col-sm").mouseover(function(){
    colordrag(this);
})
