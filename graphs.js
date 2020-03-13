var deltaS = 0;
var firstRow = false;
var h = 1;

document.getElementById('button').addEventListener("click", function() {

  var s = Number((document.getElementById('distance').value));
  var t = (document.getElementById('time').value);

  deltaS += s;

  chart.data.labels.push(t)
  chart.data.datasets.forEach((dataset) => {
        dataset.data.push(deltaS)
    });
  chart.update();

  var dataArr = ["", s, t, deltaS];

  if(firstRow === false) {
    createTable();
    insertData(dataArr);
  }
  else {
    insertData(dataArr);
  }
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'S-t graph',
            backgroundColor: '#646cd3',
            borderColor: '#646cd3',
            data: [],
            lineTension: 0,
            fill:false
        }]
    },

    // Configuration options go here
    options: {
      scales: {
  					xAxes: [{
  					display: true,
  					scaleLabel: {
  					display: true,
  					labelString: 'Time (t)'
  						}
  					}],
  					yAxes: [{
  					display: true,
  					scaleLabel: {
  					display: true,
  					labelString: 'Distance (km)'
  				}
				}]
      }
    }
});

function createTable() {

  var arrHead = ["","Delta S (km)", "Delta T (t)", "Distance (km)"];

  var empTable = document.createElement('table');
  empTable.setAttribute('id', 'emptTable');

  var tr = empTable.insertRow(-1);

  for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
       }

  var div = document.getElementById('canvas-container');
  div.appendChild(empTable);

  firstRow = true;

}

function insertData(data) {

  var empTable = document.getElementById("emptTable");
  var rowCount = empTable.rows.length;
  var tr = empTable.insertRow(rowCount);
  tr = empTable.insertRow(rowCount);

  for(var i = 0; i < data.length; i++) {
     var td = document.createElement("td");
     td = tr.insertCell(i);
     td.innerHTML = data[i];

     if(i == 0) {
       td.innerHTML = h + ".";
       h++;
     }
  }
}
