import { InitialsPipe } from './initials.pipe';
import { User } from '@auth0/auth0-spa-js';

describe('InitialsPipe', () => {
  let pipe: InitialsPipe;

  beforeEach(() => {
    pipe = new InitialsPipe();
  });

  it('create an instance', () => {
    // Assert
    expect(pipe).toBeTruthy();
  });

  const cases = [
    { person: undefined, expected: '' },
    { person: { } as User, expected: 'U' },
    { person: { given_name: 'Markus', family_name: 'Kollers' } as User, expected: 'MK' },
    { person: { given_name: 'Sonja Ruth Jacqueline Christiane', family_name: 'Bauer' } as User, expected: 'SB' },
    { person: { given_name: 'Markus', family_name: '  ' } as User, expected: 'M' }
  ];
  for (const c of cases) {
    it(`should return ${c.expected}`, () => {
      // Act
      const result = pipe.transform(c.person);

      // Assert
      expect(result).toBe(c.expected);
    });
  }
});