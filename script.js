//Main Functions
let colnum = 3;
let defcolor = "white";
let mouseDown= false;
let repcolor = "white";
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
//Delete Rows
function deleterow(){
    var rowcont = document.querySelector(".mt-5");
    rowcont.removeChild(rowcont.lastChild);
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
//Change all ___ tiles
function setRepColor(){
    const check = document.querySelector("#repselect");
    repcolor= check.value;
    $(".fill-x-boxes").css("background-color",repcolor);
}
//change all replacement color
function fillColored(){
    let tilelist = document.getElementsByClassName("col-sm border border-dark box");
    for (let steps=0;steps<tilelist.length;steps++){
        if (tilelist[steps].style.backgroundColor==repcolor){
            tilelist[steps].style.backgroundColor=defcolor;
        }
    }
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

//Main JQuery
//create rows
$('.add-row').click(function (){
    createrow();
    $(".draggable").mouseover(function(){
        colordrag(this);
    })
})
//create columns
$('.add-col').click(function(){
    createcolumn();
    $(".draggable").mouseover(function(){
        colordrag(this);
    })
});
//delete rows
$('.del-row').click(function(){
    deleterow();
    $(".draggable").mouseover(function(){
        colordrag(this);
    })
})
//delete columns
$('.del-col').click(function(){
    deletecol();
    $(".draggable").mouseover(function(){
        colordrag(this);
    })
})
//choose default color
$('.option').click(function(){
    changeClickColor();
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
$(".draggable").mouseover(function(){
    colordrag(this);
})
//FillColored boxes to default color
$(".fill-x-boxes").click(function(){
    fillColored();
})