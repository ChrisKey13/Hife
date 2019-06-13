import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css"

flatpickr(".datepicker", {minDate: 'today', enableTime: true, minuteIncrement: 5, hourIncrement: 1, enableTime: true, time_24hr: true})
