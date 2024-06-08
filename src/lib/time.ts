// import moment from 'moment';


// export function ConvertTime(timestamp: string) {
//     // Parse and format the date
//     const readableDate = moment(timestamp).local().format('MMMM D, YYYY, h:mm:ss A z');
//     return readableDate;
// }


import moment from 'moment-timezone';

export function ConvertTime(timestamp: string) {
    // Parse the timestamp as UTC
    const readableDate = moment.utc(timestamp).tz(moment.tz.guess()).fromNow(true);
    return readableDate;
}