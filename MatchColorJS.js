
function main() {
}

function drawTable(size) {
    size = $('#' + size).val();
    table = '<table>';
    for (var row = 0; row < size; row++ ) {
        table += '<tr>';
            for (var column = 0; column < size; column++) {
                table += '<td>' + '0' + '</td>';
            } 
        table += '</tr>';
    }
    table += '</table>'
    var newTable = $('#table')[0];
    alert(newTable + table);
    newTable.innerHTML = '' ;
    newTable.innerHTML += table;
}

$(document).ready(main);
