import PlanningService from "../services/planning.service";

export default abstract class Person {

    protected planningService: PlanningService;

    public isTired: boolean = false;
    public isHungry: boolean = false;

    constructor() {
        this.planningService = new PlanningService();
    }

    get needToSleep(): boolean {
        return this.planningService.isNight 
            && this.isTired 
            && !this.isHungry;
    }
}