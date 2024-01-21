import TimeService from "./time.service";
import AstroService from "./astro.service";

export default class PlanningService {

    get isNight(): boolean {
        return !AstroService.isNotEclipse || TimeService.currentDate.isBetween(
            TimeService.getTime(20), 
            TimeService.getTime(6).add(1, 'day'));
    }

    get isDaytime(): boolean {
        return !this.isNight;
    }

}