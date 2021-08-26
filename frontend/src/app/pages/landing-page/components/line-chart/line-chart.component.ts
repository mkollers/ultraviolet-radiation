import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Point } from 'highcharts';

@Component({
  selector: 'uv-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent implements OnInit {
  private _seriesMap: string[] = [];
  @Input() label: string | undefined;
  chart: Chart | undefined;

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: 'line',
        backgroundColor: 'var(--clr-neutral-1dp)',
        borderColor: 'var(--clr-neutral-1dp)',
        plotBorderColor: 'var(--clr-neutral-1dp)',
        plotBackgroundColor: 'var(--clr-neutral-1dp)'
      },
      xAxis: {
        title: {
          text: 'Messungen'
        }
      },
      yAxis: {
        lineColor: 'var(--clr-neutral-1dp)',
        gridLineColor: 'var(--clr-neutral-1dp)'
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: false
          },
          marker: {
            enabled: false
          },
          enableMouseTracking: true
        }
      },
      title: {
        text: this.label
      },
      credits: { enabled: false },
      series: []
    });
  }

  addPoint(point: Point | number, label: string) {
    if (!this.chart) return;

    let index = this._seriesMap.indexOf(label);
    if (index == -1) {
      index = this.addSeries(label);
    }
    this.chart.addPoint(point, index);
  }

  addSeries(label: string) {
    if (!this.chart) return -1;

    this._seriesMap.push(label);
    this.chart.addSeries({
      type: 'line',
      name: label,
      marker: {
        symbol: 'cross'
      }
    }, true, true);
    return this._seriesMap.indexOf(label);
  }
}
