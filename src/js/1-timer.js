
import flatpickr from "flatpickr"; 
import "flatpickr/dist/flatpickr.min.css";

console.log("timer");
const inputEl = document.querySelector("#datetime-picker");
 //let userSelectedDate
const options = { 
    enableTime: true, // вкл выбор времени
    time_24hr: true, // Отображает выбор времени в 24-часовом режиме без выбора AM/PM, если этот параметр включен.
    defaultDate: new Date(), //Устанавливает начальную выбранную дату(ы).
    minuteIncrement: 1, //Начальное значение минутного элемента.
    onClose(selectedDates) { 
      console.log(selectedDates[0]); 
    }, 
  };

flatpickr(inputEl, options);
