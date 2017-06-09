
function main() {
}

function drawTable(size) {
    // size=getTableSize();
    table = '';
    for (var row = 0; row < size; row++ ) {
        table += '<tr>';
            for (var column = 0; column < size; column++) {
                table += '<td>' + '0' + '</td>';
            } 
        table += '</tr>';
    }
    document.write('<table>' + table + '</table>');
}

function getTableSize() {
        var tableSize = $('#tableSize').val();
        alert(tableSize);
        drawTable(tableSize);
}

$(document).ready(main);
