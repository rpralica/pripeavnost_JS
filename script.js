var rIndex,
  table = document.querySelector('.table');
function checkEmptyInput() {
  var isEmppty = false;
  korisnik = document.querySelector('.korisnik').value;
  problem = document.querySelector('.problem').value;
  radnja = document.querySelector('.radnja').value;
  kolega = document.querySelector('.kolega').value;
  komentar = document.querySelector('.komentar').value;
  broj = document.querySelector('.broj').value;
  datum = document.querySelector('.datum').value;
  radnik = document.querySelector('.radnik').value;

  if (korisnik === '') {
    Swal.fire('Greška', 'Upišite korisnika');
    isEmppty = true;
  } else if (problem === '') {
    Swal.fire('Greška', 'Upišite Problem');
    isEmppty = true;
  } else if (radnja === '') {
    Swal.fire('Greška', 'Opišite Radnju');
    isEmppty = true;
  } else if (radnik === '') {
    Swal.fire('Greška', 'Selektujte Radnika');
    isEmppty = true;
  }
  return isEmppty;
}

//Add Record
function addHtmlTableRow() {
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);

    (korisnik = document.querySelector('.korisnik').value),
      (problem = document.querySelector('.problem').value),
      (radnja = document.querySelector('.radnja').value),
      (kolega = document.querySelector('.kolega').value),
      (komentar = document.querySelector('.komentar').value),
      (broj = document.querySelector('.broj').value),
      (datum = document.querySelector('.datum').value),
      (radnik = document.querySelector('.radnik').value);
    cell1.innerHTML = getIndex();
    cell2.innerHTML = korisnik;
    cell3.innerHTML = problem;
    cell4.innerHTML = radnja;
    cell5.innerHTML = kolega;
    cell6.innerHTML = komentar;
    cell7.innerHTML = broj;
    cell8.innerHTML = datum;
    cell9.innerHTML = radnik;

    selectedRowToInput();
    init();
    document.querySelector('.korisnik').focus();
  }
}
// display selected row data into input text

function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      let index = document.querySelector('#index').value;
      document.querySelector('.korisnik').value = this.cells[1].innerHTML;
      document.querySelector('.problem').value = this.cells[2].innerHTML;
      document.querySelector('.radnja').value = this.cells[3].innerHTML;
      document.querySelector('.kolega').value = this.cells[4].innerHTML;
      document.querySelector('.komentar').value = this.cells[5].innerHTML;
      document.querySelector('.broj').value = this.cells[6].innerHTML;
      document.querySelector('.datum').value = this.cells[7].innerHTML;
      document.querySelector('.radnik').value = this.cells[8].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTableSelectedRow() {
  var korisnik = document.querySelector('.korisnik').value;
  var problem = document.querySelector('.problem').value;
  var radnja = document.querySelector('.radnja').value;
  var kolega = document.querySelector('.kolega').value;
  var komentar = document.querySelector('.komentar').value;
  var broj = document.querySelector('.broj').value;
  var datum = document.querySelector('.datum').value;
  var radnik = document.querySelector('.radnik').value;

  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[1].innerHTML = korisnik;
    table.rows[rIndex].cells[2].innerHTML = problem;
    table.rows[rIndex].cells[3].innerHTML = radnja;
    table.rows[rIndex].cells[4].innerHTML = kolega;
    table.rows[rIndex].cells[5].innerHTML = komentar;
    table.rows[rIndex].cells[6].innerHTML = broj;
    table.rows[rIndex].cells[7].innerHTML = datum;
    table.rows[rIndex].cells[8].innerHTML = radnik;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  Clear();
}

function Clear() {
  document.querySelector('.korisnik').value = '';
  document.querySelector('.problem').value = '';
  document.querySelector('.radnja').value = '';
  document.querySelector('.kolega').value = '';
  document.querySelector('.komentar').value = '';
  document.querySelector('.broj').value = '';
  document.querySelector('.datum').value = '';
  document.querySelector('.radnik').value = '';
}

function deleteTable() {
  $('tbody').children().remove();
}

function exportToExcel(tableID, filename = '') {
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHtml = tableSelect.outerHTML.replace(/ /g, '%20');

  //Specify file name

  filename = filename ? filename + '.xls' : 'excel_data.xls';

  ///Create download link

  downloadLink = document.createElement('a');
  document.body.appendChild(downloadLink);
  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(['\ufeff', tableHtml], {
      type: dataType,
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    downloadLink.href = 'data:' + dataType + ', ' + tableHtml;

    //Setting filename
    downloadLink.download = filename;
    //Trigering function
    downloadLink.click();
  }
}

function getIndex() {
  for (let i = 1; (i = table.rows.length - 2); i++) {
    return i;
  }
}
getIndex();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
let trenutno = dd + '.' + mm + '.' + yyyy;
function init() {
  document.querySelector('.korisnik').value = '';
  document.querySelector('.problem').value = '';
  document.querySelector('.radnja').value = '';
  document.querySelector('.kolega').value = '';
  document.querySelector('.komentar').value = '';
  document.querySelector('.datum').value = trenutno;
}
