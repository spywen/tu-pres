import PlanningService from "../services/planning.service";
import Baby from "./baby";

let baby: Baby;

beforeEach(() => {
    baby = new Baby();
    baby.isTired = false;
    baby.isHungry = false;
    baby.isDiaperFull = false;
})

describe("needToSleep - daytime period", () => {

    beforeEach(() => {
        jest.spyOn(PlanningService.prototype, 'isNight', 'get')
            .mockImplementation(() => false);
    });

    it("should not need to sleep when it's day time", () => {
        const result = baby.needToSleep;

        expect(result).toBeFalsy();
    });

    it("should not need to sleep even when is tired during daytime", () => {
        baby.isTired = true;

        const result = baby.needToSleep;

        expect(result).toBeFalsy();
    });

});

describe("needToSleep - night period", () => {

    beforeEach(() => {
        jest.spyOn(PlanningService.prototype, 'isNight', 'get')
            .mockImplementation(() => true);
    });

    it("should not need to sleep when is not tired", () => {
        expect(baby.needToSleep).toBeFalsy();
    });

    it("should need to sleep when is tired", () => {
        baby.isTired = true;

        expect(baby.needToSleep).toBeTruthy();
    });

    it("should not need to sleep when is tired but is hungry", () => {
        baby.isTired = true;
        baby.isHungry = true;

        expect(baby.needToSleep).toBeFalsy();
    });

    it("should not need to sleep when is tired but diaper is full", () => {
        baby.isTired = true;
        baby.isDiaperFull = true;

        expect(baby.needToSleep).toBeFalsy();
    });

});

