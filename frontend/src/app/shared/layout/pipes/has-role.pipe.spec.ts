import { AuthService } from '@auth0/auth0-angular';
import { Mock } from 'src/test';
import { HasRolePipe } from './has-role.pipe';

describe('HasRolePipe', () => {
  let authService: Mock<AuthService>;

  beforeEach(() => {
    authService = new Mock<AuthService>();
  })

  it('create an instance', () => {
    // Act
    const pipe = new HasRolePipe(authService.instance);

    // Assert
    expect(pipe).toBeTruthy();
  });
});
