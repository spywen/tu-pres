import moment, { Moment } from "moment";

export default class TimeService {

    public static get currentDate() {
        return moment();
    }

    public static getTime(hour: number) : Moment {
        return moment(hour, 'HH');
    }
}