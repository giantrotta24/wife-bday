import './main.css';

import { HamburgerService } from './app/hamburger.service';
import { CountdownService } from './app/countdown.service';
import { run } from './app/main.js';

const hamburgerService = new HamburgerService();
const countdownService = new CountdownService();

run(hamburgerService, countdownService);
