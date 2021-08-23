import { SigninCallbackPageModule } from './signin-callback-page.module';

describe('SigninCallbackPageModule', () => {
    it('should create', () => {
        // Act
        const app = new SigninCallbackPageModule();

        // Assert
        expect(app).toBeTruthy();
    });
});