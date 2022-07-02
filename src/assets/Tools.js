import Moment from 'jalali-moment';

export function geogorian2jalili(date) {
    if (!date) {
        return ''
    }
    return Moment(date, 'YYYY-MM-DD').locale('fa').format('YYYY/MM/DD');
}

export function getWeekday(date, numeric) {
    if (!date) {
        return ''
    }

    const weekday = Moment(date, 'YYYY-MM-DD').day();
    let weekdayString = '';

    switch (weekday) {
        case 0:
            weekdayString = numeric ? '۱ شنبه' : 'یکشنبه';
            break;
        case 1:
            weekdayString = numeric ? '۲ شنبه' : 'دوشنبه';
            break;
        case 2:
            weekdayString = numeric ? '۳ شنبه' : 'سه شنبه';
            break;
        case 3:
            weekdayString = numeric ? '۴ شنبه' : 'چهارشنبه';
            break;
        case 4:
            weekdayString = numeric ? '۵ شنبه' : 'پنجشنبه';
            break;
        case 5:
            weekdayString = 'جمعه';
            break;
        case 6:
            weekdayString = 'شنبه';
            break;
        default:
    }

    return weekdayString;

}

export function jaliliTojalili_string_month(date, withoutYear) {
    if (!date) {
        return '';
    }
    // const d = moment(date, 'YYYY-MM-DD').locale('fa').format('YYYY/MM/DD');
    const d = date;
    let month = '';

    switch (parseInt(d.split('/')[1])) {
        case 1:
            month = 'فروردین';
            break;
        case 2:
            month = 'اردیبهشت';
            break;
        case 3:
            month = 'خرداد';
            break;
        case 4:
            month = 'تیر';
            break;
        case 5:
            month = 'مرداد';
            break;
        case 6:
            month = 'شهریور';
            break;
        case 7:
            month = 'مهر';
            break;
        case 8:
            month = 'آبان';
            break;
        case 9:
            month = 'آذر';
            break;
        case 10:
            month = 'دی';
            break;
        case 11:
            month = 'بهمن';
            break;
        case 12:
            month = 'اسفند';
            break;
        default:
    }

    if (withoutYear) {
        return `${parseInt(d.split('/')[2])} ${month}`;
    }
    return `${parseInt(d.split('/')[2])} ${month} ${d.split('/')[0]}`;
}

export function handleMultiSelectString(value) {
    let _value = value
    if (typeof value === 'string') {
        _value = [value]
    }

    return _value
}

export function convertNumbers2English(string) {
    return string.replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
    }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
    });
}

export function currency_with_separator(currency) {
    return parseInt(currency).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function timeSecToTime(time) {
    if (!time) {
        return '';
    }
    return time.split(':')[0] + ':' + time.split(':')[1];
}

export function persianNumberFix(text) {
    let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    let arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    if (typeof text === 'string') {
        for (let i = 0; i < 10; i++) {
            text = text.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }
    return text;
}
