console.log("Hello from script.js!");
let colnum = 3;
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
function createcolumn(){
    colnum++;
    const newrow = document.createElement("div");
    newrow.classList.add("col-sm","border","border-dark","box");
    $('.row').append(newrow);
}
$('.add-row').click(function (){
    createrow();
})
$('.add-col').click(function(){
    createcolumn();
});