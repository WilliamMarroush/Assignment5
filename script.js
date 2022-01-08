console.log("Hello from script.js!");
//Main Functions
let colnum = 3;
let defcolor = "white";
//Create Rows
function createrow(){
    const row = document.createElement("div");
    row.classList.add("row");
    for (let steps=0;steps<colnum;steps++){
        const col = document.createElement("div");
        col.classList.add("col-sm","border","border-dark","box");
        row.append(col);
    }
    $(".mt-5").append(row);
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
    newrow.classList.add("col-sm","border","border-dark","box",colnum);
    $('.row').append(newrow);
}
//Delete Columns
function deletecol(){
    for(let steps=0;steps<colnum;steps++){
        $("."+colnum).last().remove();
    }
    colnum--;
}
//Change click color
function changeClickColor(){
    const check = document.querySelector("#colselect");
    defcolor=check.value;
}




//Main JQuery
$('.add-row').click(function (){
    createrow();
})
$('.add-col').click(function(){
    createcolumn();
});
$('.del-row').click(function(){
    deleterow();
})
$('.del-col').click(function(){
    deletecol();
})
$('.option').click(function(){
    changeClickColor();
})
$(".col-sm").click(function(){
    $(this).css("background-color",defcolor);
})