import { HttpClient } from '@angular/common/http';
import * as faker from 'faker';
import { firstValueFrom, of, TimeoutError } from 'rxjs';
import { marbles } from 'rxjs-marbles/marbles';
import { Mock } from 'src/test';
import { anyString, verify, when } from 'ts-mockito';

import { UvResponseMock } from '../responses/uv-response.mock';
import { UvService } from './uv.service';

describe('UvService', () => {
  let httpClient: Mock<HttpClient>;
  let service: UvService;

  beforeEach(() => {
    httpClient = new Mock<HttpClient>();

    service = new UvService(httpClient.instance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUvData', () => {
    it('should call url', () => {
      // Arrange
      const lat = faker.datatype.float();
      const lng = faker.datatype.float();
      const url = `https://uv.markuskollers.de/.netlify/functions/openuv-gateway?lat=${lat}&lng=${lng}`;
      when(httpClient.mock.get(url)).thenReturn(of());

      // Act
      service.getUvData(lat, lng);

      // Assert
      verify(httpClient.mock.get(url)).once();
      expect().nothing(); // ts-mockito will only throw in case of errors -> this is required to avoid expection warnings
    });

    it('should return result', async () => {
      const lat = faker.datatype.float();
      const lng = faker.datatype.float();
      const data = new UvResponseMock();
      when(httpClient.mock.get(anyString())).thenReturn(of(data));

      // Act
      const result = await firstValueFrom(service.getUvData(lat, lng));

      // Assert
      expect(result).toBe(data);
    });

    it('should timeout after 5000ms and retry two times', marbles(m => {
      const lat = faker.datatype.float();
      const lng = faker.datatype.float();
      const data = new UvResponseMock();
      const data$ = m.cold('6000ms a|', { a: data });
      when(httpClient.mock.get(anyString())).thenReturn(data$);
      // We expect 15000ms, because 5000ms timeouts three time (2 retries)
      const expected$ = m.cold('15000ms #', {}, new TimeoutError());

      // Act
      const result$ = service.getUvData(lat, lng);

      // Assert
      m.expect(result$).toBeObservable(expected$);
      expect().nothing(); // ts-mockito will only throw in case of errors -> this is required to avoid expection warnings
    }));
  });
});
