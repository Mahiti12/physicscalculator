var firstRow = false;

document.getElementById("button").addEventListener("click", function() {

  var jouls = calculateJoules(0);
  document.getElementById("usedJoules").value = jouls;

});

document.getElementById("button1").addEventListener("click", function() {

    if(firstRow === true) {
      insertData();
    }
    else {
      createTable();
      insertData();
    }

});

function createTable() {

  var arrHead = ["","Cyclist weight", "Bike Weight", "Begining Speed", "Final Speed", "Used joules"];

  var empTable = document.createElement('table');
  empTable.setAttribute('id', 'empTable');

  var tr = empTable.insertRow(-1);

  for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
       }

  var div = document.getElementById('container1');
  div.appendChild(empTable);

  firstRow = true;

}

function insertData() {

  var data = calculateJoules(1);

  var empTable = document.getElementById("empTable");
  var rowCount = empTable.rows.length;
  var tr = empTable.insertRow(rowCount);
  tr = empTable.insertRow(rowCount);

  for(var i = 0; i < data.length; i++) {
     var td = document.createElement("td");
     td = tr.insertCell(i);
     td.innerHTML = data[i];

     if(i == 0) {
       var button = document.createElement('input');
       button.setAttribute('type', 'button');
       button.setAttribute('value', 'Remove');
       button.setAttribute('onclick', 'removeRow(this)');
       button.setAttribute('class', 'btn-table')
       td.appendChild(button);
     }
  }
}

function calculateJoules(parameter) {

  var finalSpeedInKph = Number(document.getElementById("finalSpeed").value);
  var beginingSpeedInKph = Number(document.getElementById("beginingSpeed").value);

  var yourWeight = Number(document.getElementById("yourWeight").value);
  var bikeWeight = Number(document.getElementById("bikeWeight").value);

  var finalSpeedInMph = finalSpeedInKph*1000/3600;
  var beginingSpeedInMph = beginingSpeedInKph*1000/3600;

  var finalWeight = bikeWeight + yourWeight;

  var jouls = Math.round(finalWeight/2*(Math.pow(finalSpeedInMph,2)-Math.pow(beginingSpeedInMph,2)));

  var data = ["",yourWeight + " kg",bikeWeight + " kg",beginingSpeedInKph + " km/h",finalSpeedInKph + " km/h",jouls + " j"];

  if(parameter === 0) {
    return jouls;
  }
  else {
    return data;
  }


}

function removeRow(oButton) {
      var empTab = document.getElementById('empTable');
      empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
   }
