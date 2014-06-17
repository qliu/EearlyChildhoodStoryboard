Highcharts.theme = {
	colors: ['#AADEE8', '#4FA0CD', '#08679B', '#ee8c2f', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	chart: {
		backgroundColor: '#F6F6F6',
		borderWidth: 0,
		plotBackgroundColor: '#F6F6F6',
		plotShadow: false,
		plotBorderWidth: 0
	},
	title: {
		style: {
			color: '#000',
			fontSize: '15px',
			fontWeight: '600',
			fontFamily: 'Arvo, serif'
		},
		align: "left"
	},
	subtitle: {
		style: {
			color: '#4F5151',
			fontSize: '14px',
			fontFamily: 'Arvo, serif'
		},
		align: "left"
	},
	xAxis: {
		lineColor: '#000',
		tickColor: '#000',
		tickmarkPlacement: 'off',
		labels: {
			style: {
				color: '#8C8C8C',
				fontSize: '12px',
				fontFamily: 'Arvo, serif'
			}
		},
		title: {
			align: "middle",
			style: {
				color: '#8C8C8C',
				fontSize: '12px',
				fontFamily: 'Arvo, serif'
			}
		}
	},
	yAxis: {
		tickWidth: 0,
		tickColor: '#000',
		labels: {
			style: {
				color: '#8C8C8C',
				fontSize: '12px',
				font: 'Arvo, serif'
			}
		},
		title: {
			enabled: false,
			style: {
				color: '#4F5151',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Arvo, serif'
			}
		}
	},
	legend: {
		itemDistance: 30,
		itemStyle: {
			color: '#4F5151',
			fontSize: '12px',
			fontFamily: 'Arvo,serif'
		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	},
	plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
                lineWidth: 3,
                shadow: false
            }
    },

	navigation: {
		buttonOptions: {
			theme: {
				stroke: '#CCCCCC'
			}
		}
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);