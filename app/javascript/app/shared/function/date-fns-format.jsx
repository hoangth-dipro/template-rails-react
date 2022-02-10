import { format } from 'date-fns';
import { getDay } from 'date-fns';

const jaDay = ['日', '月', '火', '水', '木', '金', '土'];
const jaDateTimeFormat = 'MM/dd ($) HH時mm分';
const jaDateOnlyFormat = 'yyyy年MM月dd日($)';
const jaTimeOnlyFormat = 'HH時mm分';
const jaDateTimeNoticeFormat = 'MM月dd日 ($) HH時mm分';

function dateTimeFormat(date) {
  return formatDate(date, jaDateTimeFormat);
}

function dateOnlyFormat(date) {
  return formatDate(date, jaDateOnlyFormat);
}

function timeOnlyFormat(date) {
  return formatDate(date, jaTimeOnlyFormat);
}

function dateTimeNoticeFormat(date) {
  return formatDate(date, jaDateTimeNoticeFormat);
}

function formatDate(date, dateFormat) {
  date = new Date(date);
  const dayName = jaDay[getDay(date)];
  let dateFormatted = format(date, dateFormat);
  dateFormatted = dateFormatted.replace('$', dayName);
  return dateFormatted;
}

export {
  dateTimeFormat,
  dateOnlyFormat,
  timeOnlyFormat,
  dateTimeNoticeFormat
}
