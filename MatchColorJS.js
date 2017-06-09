
function main() {
    $('.cell').on('click', function() {
        handleClickedCell(this.id);
    });
}

function drawTable(size) {
    size = $('#' + size).val();
    table = '<table border="solid">';
    var index = 0;
    for (var row = 0; row < size; row++ ) {
        table += '<tr>';
            for (var column = 0; column < size; column++) {
                table += '<td class="cell" id="' + index + '">' + index + '</td>';
                index++;
            } 
        table += '</tr>';
    }
    table += '</table>'
    var newTable = $('#table')[0];
    newTable.innerHTML = '' ;
    newTable.innerHTML += table;
    main();
}

function handleClickedCell(cellId) {
            alert(cellId);    
}
