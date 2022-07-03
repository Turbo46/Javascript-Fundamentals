import {addDays} from "date-fns";
const today = new Date;
const tomorrow = addDays(today,1);
const dayAfterTomorrow = addDays(today,2);
console.log(today, tomorrow, dayAfterTomorrow);