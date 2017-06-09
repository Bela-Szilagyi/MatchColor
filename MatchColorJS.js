
function main() {
    $('.cell').on('click', function() {
        handleClickedCell(this.id);
    });
}

function drawTable(size) {
    size = $('#' + size).val();
    table = '<table border="solid">';
    shuffledItems = randomize((Math.pow(2, size)/2));
    // alert('shuffledItems: ' + shuffledItems);
    var index = 0;
    for (var row = 0; row < size; row++ ) {
        table += '<tr>';
            for (var column = 0; column < size; column++) {
                table += '<td class="cell" id="' + index + '">' + shuffledItems[index] + '</td>';
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

function randomize(sizeOfArray) {
    listToRandomize = getOrderedLIst(sizeOfArray);

    /* Return a random number between 1 and 10:
       Math.floor((Math.random() * 10) + 1); */
    
    var randomizedList = [];
    // alert('listToRandomize: ' + listToRandomize);
    numberOfIterations = listToRandomize.length;
    for(i=0; i < numberOfIterations; i++) {
        // alert('iteration: ' + i);
        randomNumber = Math.floor((Math.random() * (listToRandomize.length)));
        // alert('randomNumber: ' + randomNumber);
        randomizedList.push(listToRandomize[randomNumber]);
        // alert('randomizedList: ' + randomizedList);
        listToRandomize.splice(randomNumber, 1);
        // alert('listToRandomize: ' + listToRandomize); 
}
    return randomizedList;
}

function getOrderedLIst(listSize) {
    result = [];
    for (i = 0; i < listSize; i++) {
        result.push(i);
    }
    for (i = 0; i < listSize; i++) {
        result.push(i);
    }
    return result;
}