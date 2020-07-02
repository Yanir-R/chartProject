import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
	selector: 'app-widget-donutOptions',
	templateUrl: './donutOptions.component.html',
	styleUrls: [ './donutOptions.component.scss' ]
})
export class DonutOptionsComponent implements OnInit {
	chartOptions = {};
	Highcharts = Highcharts;

	constructor() {}

	ngOnInit(): void {
		this.chartOptions = {
			chart: {
				type: 'pie',
				plotShadow: false
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				pie: {
					innerSize: '99%',
					borderWidth: 40,
					borderColor: null,
					slicedOffset: 20,
					dataLabels: {
						connectorWidth: 0
					}
				}
			},
			title: {
				verticalAlign: 'middle',
				floating: true,
				text: '$ 600,000.00'
			},
			legend: {
				enabled: false
			},
			series: [
				{
					type: 'pie',
					data: [
						{ name: 'a', y: 1, color: '#eeeeee' },
						{ name: 'b', y: 2, color: '#393e46' },
						{ name: 'c', y: 3, color: '#00adb5' },
						{ name: 'd', y: 4, color: '#eeeeee' },
						{ name: 'e', y: 5, color: '#506ef9' }
					]
				}
			]
		};
		HC_exporting(this.Highcharts);
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}
}
