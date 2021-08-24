import { UvResponseMock } from '@shared/data-access/responses/uv-response.mock';
import { UvService } from '@shared/data-access/services/uv.service';
import { of } from 'rxjs';
import { Mock } from 'src/test';
import { anyNumber, when } from 'ts-mockito';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let uvService: Mock<UvService>;

  beforeEach(() => {
    uvService = new Mock<UvService>();

    when(uvService.mock.getUvData(anyNumber(), anyNumber())).thenReturn(of(new UvResponseMock()));
  });

  it('should create the app', () => {
    // Act
    const component = new LandingPageComponent(uvService.instance);

    // Assert
    expect(component).toBeTruthy();
  });

  it('should set alive to alse on destroy', () => {
    // Arrange
    const component = new LandingPageComponent(uvService.instance);

    // Act
    component.ngOnDestroy();

    // Assert
    expect(component.alive).toBeFalse();
  });
});
