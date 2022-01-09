//Global Variables
let colnum = 3;
let defcolor = "white";
let mouseDown= false;
let repcolor = "white";

//==================================ALL JAVASCRIPT FUNCTIONS===============================\\
//Check if mouse is being held down or not
document.body.onmousedown = function(){
    mouseDown=true;
}
document.body.onmouseup = function(){
    mouseDown=false;
}
//######################Create Rows and Columns
//Create Rows
function createrow(){
    const row = document.createElement("div");
    row.classList.add("row");
    for (let steps=0;steps<colnum;steps++){
        const col = document.createElement("div");
        col.classList.add("col-sm","border","border-dark","box","draggable");
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
//Create Columns
function createcolumn(){
    colnum++;
    const newrow = document.createElement("div");
    newrow.classList.add("col-sm","border","border-dark","box","draggable");
    newrow.classList.remove("dragging");
    newrow.addEventListener("click",$(".col-sm").click(function(){
        $(this).css("background-color",defcolor);
    }));
    $('.row').append(newrow);
    newrow.addEventListener("click",$(".col-sm").click(function(){
        $(this).css("background-color",defcolor);
    }));
}
//########################Delete Rows and Columns
//Delete Rows
function deleterow(){
    var rowcont = document.querySelector(".mt-5");
    rowcont.removeChild(rowcont.lastChild);
}
//Delete Columns
function deletecol(){
   let mycol = document.getElementsByClassName("row");
   for (let steps=0;steps<mycol.length;steps++){
       mycol[steps].removeChild(mycol[steps].lastElementChild);
   }
   colnum--;
}

//########################Color Selector Interactibles
//Change Default Paint Color
function changeClickColor(){
    const check = document.querySelector("#colselect");
    defcolor=check.value;
}
//Change Replacement Tile Color
function setRepColor(){
    const check = document.querySelector("#repselect");
    repcolor= check.value;
    $(".fill-x-boxes").css("background-color",repcolor);
}
//Change All Replacement Tile background color to default paint color
function fillColored(){
    let tilelist = document.getElementsByClassName("col-sm border border-dark box");
    for (let steps=0;steps<tilelist.length;steps++){
        if (tilelist[steps].style.backgroundColor==repcolor){
            tilelist[steps].style.backgroundColor=defcolor;
        }
    }
}
//Change all white tile background color to default paint color
function fillwhite(){
    let tilelist = document.getElementsByClassName("col-sm border border-dark box");
    for (let steps=0;steps<tilelist.length;steps++){
        if (tilelist[steps].style.backgroundColor=="" || tilelist[steps].style.backgroundColor=="white"){
            tilelist[steps].style.backgroundColor=defcolor;
        }
    }
}
//Drag color across grid
function colordrag(elem){
    if (elem.classList.contains("draggable")){
        if(mouseDown){
            elem.classList.add("dragging");
            $(".dragging").css("background-color",defcolor);
            elem.classList.remove("dragging");
        }
    }
}

//=====================================ALL JQUERY========================================\\
//###############Adding to Grid
//Add Rows Button
$('.add-row').click(function (){
    createrow();
    $(".draggable").mouseover(function(){
        colordrag(this);
    })
})
//Add Columns Button
$('.add-col').click(function(){
    createcolumn();
    $(".draggable").mouseover(function(){
        colordrag(this);
    })
});
//###################Deleting from grid
//Delete Rows Button
$('.del-row').click(function(){
    deleterow();
    $(".draggable").mouseover(function(){
        colordrag(this);
    })
})
//Delete Columns Button
$('.del-col').click(function(){
    deletecol();
    $(".draggable").mouseover(function(){
        colordrag(this);
    })
})

//########################Color Selecting
//Selecting Main Paint color
$('.option').click(function(){
    changeClickColor();
})
//Fill all White Boxes Button
$(".change-all-white").click(function(){
   fillwhite();
})
//Fill ALL Boxes Button
$(".fill-all-boxes").click(function(){
    $(".col-sm").css("background-color",defcolor);
})
//Fill all ____ Boxes Button
$(".fill-x-boxes").click(function(){
    fillColored();
})
//Drag Mouse Over Tiles to Change Color
$(".draggable").mouseover(function(){
    colordrag(this);
})
