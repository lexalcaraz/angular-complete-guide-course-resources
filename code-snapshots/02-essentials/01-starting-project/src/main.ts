import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

/**
 * Best practice:
 * bootstrapApplication is used to start the application. It takes the root component as an argument.
 * Looking at a component tree this is the only time you call on the root component because you want to start the application.
 * So you want other components to stem from the app component instead of using bootsrtapApplication on other components.
 */