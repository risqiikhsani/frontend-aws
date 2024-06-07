import moment from 'moment';


export function ConvertTime(timestamp: string) {
    // Parse and format the date
    const readableDate = moment(timestamp).local().format('MMMM D, YYYY, h:mm:ss A z');
    return readableDate;
}
