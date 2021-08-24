import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'uv-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationSelectorComponent {
  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = { disableDefaultUI: true };
  center: google.maps.LatLngLiteral = { lat: 50.0296291, lng: 8.276255 };
  markerOptions: google.maps.MarkerOptions = { draggable: true };
  markerPosition: google.maps.LatLngLiteral = { lat: 50.0296291, lng: 8.276255 };

  @Output('positionChanged') positionChanged = new EventEmitter<[number, number]>();

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyD4xcKIK54iuJQpb4Jj3pwH_-ohsg0pZrs', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  mapDragend($event: google.maps.MapMouseEvent) {
    const lat = $event.latLng.lat();
    const lng = $event.latLng.lng();

    this.positionChanged.emit([lat, lng]);
  }
}
