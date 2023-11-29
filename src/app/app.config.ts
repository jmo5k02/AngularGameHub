import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HangmanService } from './hangman/entities/hangman.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    HangmanService
  ]
};
