import { isItHere, isItPast } from './utils/dates';

export const run = (hamburgerService, countdownService) => {
  hamburgerService.toggle();

  const timer = setInterval(() => {
    const currentYear = new Date().getFullYear();
    const yearToPass = isItPast(currentYear) ? currentYear + 1 : currentYear;

    countdownService.runCountdown();

    if (isItHere(yearToPass)) {
      countdownService.celebrate();
      clearInterval(timer);
    }
  }, 1000);
};
