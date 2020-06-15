Highcharts.chart('container-bars', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Pole', 'No pole'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'COMM',
        data: [1042, 247]
    }, {
        name: 'HH',
        data: [4971, 4829]
    }, {
        name: 'INST',
        data: [8, 2]
    }]
});