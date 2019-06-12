google.charts.setOnLoadCallback(drawBackgroundColor);
google.charts.setOnLoadCallback(drawStacked);
google.charts.setOnLoadCallback(drawLineChart);

function drawBackgroundColor() {
  if (document.getElementById('chart_div')) {
    var data = new google.visualization.arrayToDataTable([
          ['Month', 'Minutes Saved'],
          ['February',  35],
          ['March',  40],
          ['April',  46],
          ['May',  75],
          ['June',  99],
        ]);

        var options = {
          hAxis: {
            title: '',
            baselineColor: 'none',
            ticks: [],
          },
           curveType: 'function',
           pointSize: 10,
           animation:{
             startup: true,
             duration: 3000,
             easing: 'in'
           },

          vAxis: {
            title: '',
          },
          legend: {position: 'none'},
          backgroundColor: '#ffffff'
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
  }
};

function drawStacked() {

  if (document.getElementById('chart2_div')) {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Mood'],
        ['February', 3.2],
        ['March', 3.9],
        ['April', 4.2],
        ['May', 4.7],
        ['June', 4.8]
  ]);


      var options = {
        title: '',
        chartArea: {width: '100%'},
        isStacked: true,
        hAxis: {
          title: '',
          baselineColor: 'none',
          ticks: [],
        },
         curveType: 'function',
         pointSize: 10,
         animation:{
           startup: true,
           duration: 2000,
           easing: 'in'
        },
        vAxis: {
          title: ''
        },
        backgroundColor: '#ffffff'
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));
      chart.draw(data, options);

  }
};



function drawLineChart() {
  if (document.getElementById('chart3_div')) {
    var data = new google.visualization.arrayToDataTable([
      ['Month', 'Average Daily Steps'],
      ['February',  7465],
      ['March',  9899],
      ['April',  10020],
      ['May',  12500],
      ['June',  13000],
    ]);

    var options = {
      hAxis: {
        title: '',
        baselineColor: 'none',
        ticks: [],
      },
      curveType: 'function',
      pointSize: 10,
      animation:{
         startup: true,
         duration: 3000,
         easing: 'in'
      },
      vAxis: {
        title: '',
      },
      legend: {position: 'none'},
      backgroundColor: '#ffffff'
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart3_div'));
    chart.draw(data, options);
  }
};

function drawLineChart2() {
  if (document.getElementById('chart4_div')) {
    var data = new google.visualization.arrayToDataTable([
      ['Month', 'Daily Caloried Burned'],
      ['February',  150],
      ['March',  300],
      ['April',  323],
      ['May',  398],
      ['June',  453],
    ]);

    var options = {
      hAxis: {
        title: '',
        baselineColor: 'none',
        ticks: [],
      },
      curveType: 'function',
      pointSize: 10,
      animation:{
         startup: true,
         duration: 3000,
         easing: 'in'
      },
      vAxis: {
        title: '',
      },
      legend: {position: 'none'},
      backgroundColor: '#ffffff'
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart4_div'));
    chart.draw(data, options);
  }
};
export { drawBackgroundColor, drawStacked, drawLineChart, drawLineChart2 };
