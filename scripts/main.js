Highcharts.chart('chart1-container', {
    chart: { type: 'column' },
    title: { text: 'Total Cost of Attendance at The University of Florida (on campus)' },
    xAxis: { categories: ['2020-2021', '2021-2022', '2022-2023', '2023-2024'] },
    yAxis: { title: { text: 'Cost of Attendance ($)' } },
    series: [{ name: 'Internet Access', data: [21431, 21431, 21811, 22601] }]
  });
  
  Highcharts.chart('chart2-container', {
    chart: { type: 'pie' },
    title: { text: 'Breakdown of Costs for 2023-2024 School Year (on campus)' },
    series: [{
      name: 'Access',
      colorByPoint: true,
      data: [
        { name: 'Tuition (in-state)', y: 6381 },
        { name: 'Food and Housing', y: 11500 },
        { name: 'Other Expenses', y: 3670 }
      ]
    }]
  });
  