import { UserNamePipe } from './user-name.pipe';
import { User } from '@auth0/auth0-spa-js';
import * as faker from 'faker';

describe('UserNamePipe', () => {
  it('create an instance', () => {
    // Act
    const pipe = new UserNamePipe();

    // Assert
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    let pipe: UserNamePipe;

    beforeEach(() => {
      pipe = new UserNamePipe();
    });

    it('should return empty string because of undefined', () => {
      // Act
      const result = pipe.transform(undefined);

      // Assert
      expect(result).toBe('');
    });

    it('should return email because of missing given name', () => {
      // Arrange
      const user = new User();
      user.email = faker.internet.email();
      user.family_name = faker.name.lastName();

      // Act
      const result = pipe.transform(user);

      // Assert
      expect(result).toBe(user.email);
    });

    it('should return email because of missing family name', () => {
      // Arrange
      const user = new User();
      user.email = faker.internet.email();
      user.given_name = faker.name.firstName();

      // Act
      const result = pipe.transform(user);

      // Assert
      expect(result).toBe(user.email);
    });

    it('should return the full name', () => {
      // Arrange
      const user = new User();
      user.given_name = faker.name.firstName();
      user.family_name = faker.name.lastName();

      // Act
      const result = pipe.transform(user);

      // Assert
      expect(result).toBe(`${user.given_name} ${user.family_name}`);
    });

    it('should return the unknown as a fallback', () => {
      // Arrange
      const user = new User();

      // Act
      const result = pipe.transform(user);

      // Assert
      expect(result).toBe('Unknown');
    });
  });
});