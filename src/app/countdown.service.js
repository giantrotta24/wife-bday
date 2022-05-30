import { isItHere, isItPast } from './utils/dates';

export class CountdownService {
  constructor() {
    this.countdown = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.birthdayCountdown = document.querySelector('.birthday-countdown');
    this.birthdayMessage = document.querySelector('.birthday-message');
  }

  celebrate() {
    this.birthdayMessage.innerHTML = 'HAPPY BIRTHDAY!';
  }

  runCountdown() {
    const countdown = this.getCountdown();
    const days = countdown.days;
    const hours = countdown.hours;
    const minutes = countdown.minutes;
    const seconds = countdown.seconds;

    this.birthdayCountdown.innerHTML =
      days +
      ' days ' +
      hours +
      ' hours ' +
      minutes +
      ' minutes ' +
      seconds +
      ' seconds';
  }

  getCountdown() {
    const currentYear = new Date().getFullYear();
    const yearToPass = isItPast(currentYear) ? currentYear + 1 : currentYear;

    if (isItHere(currentYear)) {
      this.countdown.days = 0;
      this.countdown.hours = 0;
      this.countdown.minutes = 0;
      this.countdown.seconds = 0;
    } else {
      const date = new Date(yearToPass, 11, 15);
      const difference = date.getTime() - new Date().getTime();
      this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      this.countdown.minutes = Math.floor((difference / 1000 / 60) % 60);
      this.countdown.seconds = Math.floor((difference / 1000) % 60);
    }
    return this.countdown;
  }
}
