Highcharts.chart('container', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: ''
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Number of connections: <b>{point.y}</b><br/>'
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'Type Of Customer',
        data: [{
            name: 'COMM',
            y: 1289,
            z: 92.9,
        }, {
            name: 'HH',
            y: 9800,
            z: 118.7
        }, {
            name: 'INST',
            y: 10,
            z: 124.6
        }]
    }]
});
