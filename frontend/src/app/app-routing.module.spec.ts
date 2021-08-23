import { NgZone, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LoadChildrenCallback, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from '@auth0/auth0-angular';
import { LandingPageComponent } from '@pages/landing-page/landing-page.component';
import { LandingPageModule } from '@pages/landing-page/landing-page.module';
import { SigninCallbackPageComponent } from '@pages/signin-callback-page/signin-callback-page.component';
import { SigninCallbackPageModule } from '@pages/signin-callback-page/signin-callback-page.module';

import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
    it('should create', () => {
        // Act
        const app = new AppRoutingModule();

        // Assert
        expect(app).toBeTruthy();
    });

    describe('routes', () => {
        let routes: Routes;
        let ngZone: NgZone;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    AppRoutingModule
                ]
            });

            const router = TestBed.inject(Router);
            ngZone = TestBed.inject(NgZone);
            routes = router.config;

            // Required to avoid console warning 'Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?'
            ngZone.run(() => {
                router.initialNavigation();
            });
        });

        const cases: { path: string, module: Type<any>, component: Type<any>, canLoad?: Type<any>[], canActivate?: Type<any>[] }[] = [
            { path: 'signin-callback', module: SigninCallbackPageModule, component: SigninCallbackPageComponent },
            { path: '', module: LandingPageModule, component: LandingPageComponent, canActivate: [AuthGuard] },
        ];
        for (const c of cases) {
            it(`should load ${c.module.name}`, async () => {
                // Arrange
                const route = routes.find(r => r.path === c.path);

                // Act
                const childs = await (route?.loadChildren as LoadChildrenCallback)();

                // Assert
                expect(childs).toBe(c.module);
                expect(route?.canLoad).toEqual(c.canLoad);
            });
        }
    });
});