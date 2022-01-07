console.log("Hello from script.js!");
function createrow(){
    const row = document.createElement("div");
    row.classList.add("row");
    const col1 = document.createElement("div");
    const col2 = document.createElement("div");
    const col3 = document.createElement("div");
    col1.classList.add("col-sm");
    col1.classList.add("border");
    col1.classList.add("border-dark");
    col1.classList.add("box");
    col1.classList.add("white");
    col2.classList.add("col-sm");
    col2.classList.add("border");
    col2.classList.add("border-dark");
    col2.classList.add("box");
    col2.classList.add("white");
    col3.classList.add("col-sm");
    col3.classList.add("border");
    col3.classList.add("border-dark");
    col3.classList.add("box");
    col3.classList.add("white");

    row.append(col1);
    row.append(col2);
    row.append(col3);
    $(".mt-5").append(row);
}
$('.add-row').click(function (){
    createrow();
})