window.onload = function() {
    // menampilkan sebelum page load

    // mendeklarasikan load dan main || Riczky Pratama
    var load = document.getElementById("loader");
    var main = document.getElementById("main");

    // menyembunyikan page loader dan manampilkan main content setelah aset terload.
    load.style.display = "none";
    main.style.display = "block";
    console.log('File Js telah terload..');

};


// mendeklarasikan variabel cell, errorCount dan emptyCells
var cell = [null, null]
var errorCount = 0
var emptyCells = new Array[81].fill(null)


// memanggil asset sound/music game
var countMusic = new Audio("assets/mixkit-positive-interface-beep-221.wav")
var winMusic = new Audio("assets/win.wav")

var errorCord = [] // untuk menyimpan kordinat yang errornya
var tmpErrorCord = []


function createInputBoxes(row, blockNumber){

    // fungsi untuk membuat input boxes
    var blockId = "block" + row + boxNumber;

    var block = document.getElementById("blockId");


    for(i = 0; i < 9; i++){
        var inp = document.createElement("input");

        inp.readOnly = true

        inp.setAttribute("type", "text");
        inp.setAttribute("class", "inp");

        block.appendChild(inp);
    }

}