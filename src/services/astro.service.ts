import TimeService from "./time.service";
import moment from "moment";

export default class AstroService {

    public static get isNotEclipse(): boolean {
        return !TimeService.currentDate.isSame(
            moment('2025-01-01'));
    }

}