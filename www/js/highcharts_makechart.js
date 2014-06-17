function percentageChangeBarChart(title,headers,chartData,chartContainer){
	$(chartContainer).highcharts({
		legend: {
                layout: 'horizontal',
                align: 'top',
                verticalAlign: 'top',
                borderWidth: 0,
				x: 0,
				y : 50,
				reversed: 'true'
            },
            colors: ['#4FA0CD', '#08679B', '#ee8c2f', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
                type: 'bar'
            },
            subtitle: {
                text: title,
            },
            title: {
                text: ''
            },
            yAxis: {
            	gridLineWidth: '1',
				gridLineColor: '#cccccc',
				tickLength: 0,
            	lineWidth: 0,
            	title:{
            		text:''	
            	},
				labels: {
					enabled:true
				}
			},
            xAxis: {
            	tickLength: 0,
            	lineWidth: 0,
                categories: headers
            },
            credits:{
			text: "The Piton Foundation's 2010 Census Project",
			href: "http://www.piton.org/census2010/"				
			},
            tooltip: {
                valueSuffix: '%'
            },
            series: chartData
	});		
}