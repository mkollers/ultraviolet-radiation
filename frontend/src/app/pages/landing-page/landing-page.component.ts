import { ChangeDetectionStrategy, Component, OnDestroy, ViewChild } from '@angular/core';
import { LineChartComponent } from '@shared/charts/components/uv-chart/line-chart.component';
import { UvService } from '@shared/data-access/services/uv.service';
import { BehaviorSubject, catchError, of, switchMap, switchMapTo, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'uv-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnDestroy {
  alive = true;
  interval$ = new BehaviorSubject<number>(15);

  COORDINATES: { [key: string]: [number, number] } = {
    Frankfurt: [50.1211277, 8.4964823],
    Moskow: [55.5807482, 36.8251469],
    Peking: [39.9385466, 116.1172796],
    Sidney: [48.6515212, -123.4211911],
    Honolulu: [21.3280193, -157.869113],
    SanFrancisco: [37.7576948, -122.4726194]
  };

  /* eslint-disable no-unused-vars */
  constructor(private _uvservice: UvService) {
    for (let city in this.COORDINATES) {
      this._subscribe(this.COORDINATES[city], city);
    }
  }

  ngOnDestroy = () => this.alive = false;

  @ViewChild('UVChart') uvChart: LineChartComponent | undefined;
  @ViewChild('OzoneChart') ozoneChart: LineChartComponent | undefined;
  @ViewChild('SunHeightChart') sunHeightChart: LineChartComponent | undefined;

  private _subscribe([lat, lng]: [number, number], label: string) {
    this.interval$.pipe(
      switchMap(interval => timer(0, interval * 1000)),
      takeWhile(() => this.alive),
      switchMapTo(this._uvservice.getUvData(lat, lng)),
      tap(d => this.addPoints(label, d.result.uv, d.result.ozone, d.result.sun_info.sun_position.altitude)),
      catchError(() => of(true))
    ).subscribe();
  }

  private addPoints(label: string, uv: number, ozone: number, altitude: number) {
    if (this.uvChart) {
      this.uvChart.addPoint(uv, label)
    }
    if (this.ozoneChart) {
      this.ozoneChart.addPoint(ozone, label)
    }
    if (this.sunHeightChart) {
      this.sunHeightChart.addPoint(altitude, label)
    }
  }
}
