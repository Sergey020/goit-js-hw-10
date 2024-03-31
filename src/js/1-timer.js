import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnEl.disabled = true;
let userSelectedDate;
let intervalId = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24; // Remaining days

  const days = Math.floor(ms / day); // Remaining hours
  const hours = Math.floor((ms % day) / hour); // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      iziToast.show({
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#ffffff',
      });
      btnEl.disabled = true;
    } else {
      btnEl.disabled = false;
      userSelectedDate = selectedDates[0];
      console.log(userSelectedDate);
    }
  },
};

flatpickr(inputEl, options);

function resalt() {
  const deltaTime = userSelectedDate.getTime() - Date.now();
  console.log(deltaTime);
  if (deltaTime > 0) {
    daysEl.textContent = addLeadingZero(convertMs(deltaTime).days);
    hoursEl.textContent = addLeadingZero(convertMs(deltaTime).hours);
    minutesEl.textContent = addLeadingZero(convertMs(deltaTime).minutes);
    secondsEl.textContent = addLeadingZero(convertMs(deltaTime).seconds);
  } else {
    clearInterval(intervalId);
  }
}
function handleClick() {
  btnEl.disabled = true;
  inputEl.disabled = true;
  resalt();
  intervalId = setInterval(() => resalt(), 1000);
}
btnEl.addEventListener('click', handleClick);
