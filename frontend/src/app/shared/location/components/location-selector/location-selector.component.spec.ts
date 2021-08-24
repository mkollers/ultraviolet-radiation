import { HttpClient } from '@angular/common/http';
import { fakeAsync, tick } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { Mock } from 'src/test';
import { when } from 'ts-mockito';

import { LocationSelectorComponent } from './location-selector.component';

describe('LocationSelectorComponent', () => {
  let httpClient: Mock<HttpClient>;

  beforeEach(() => {
    httpClient = new Mock<HttpClient>();

    when(httpClient.mock.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyD4xcKIK54iuJQpb4Jj3pwH_-ohsg0pZrs', 'callback')).thenReturn(of({}));
  });

  it('should create the app', () => {
    // Act
    const component = new LocationSelectorComponent(httpClient.instance);

    // Assert
    expect(component).toBeTruthy();
  });

  it('should map apiLoaded to true', fakeAsync(async () => {
    // Act
    const component = new LocationSelectorComponent(httpClient.instance);
    tick();

    // Assert
    expect(await firstValueFrom(component.apiLoaded)).toBeTrue();
  }));

  it('should handle load error', fakeAsync(async () => {
    // Arrange
    const err = 'Hard disk read and write heads are dyslexic';
    when(httpClient.mock.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyD4xcKIK54iuJQpb4Jj3pwH_-ohsg0pZrs', 'callback')).thenReturn(throwError(() => err));

    // Act
    const component = new LocationSelectorComponent(httpClient.instance);
    tick();

    // Assert
    expect(await firstValueFrom(component.apiLoaded)).toBeFalse();
  }));

  it('should propagade lat and lng', () => {
    // Arrange
    const component = new LocationSelectorComponent(httpClient.instance);
    const latLng: google.maps.LatLng = { lat: () => 50, lng: () => 8 } as unknown as google.maps.LatLng;
    spyOn(component.positionChanged, 'emit');

    // Act
    component.mapDragend({ latLng } as google.maps.MapMouseEvent)

    // Assert
    expect(component.positionChanged.emit).toHaveBeenCalledWith([50, 8]);
  });
});
