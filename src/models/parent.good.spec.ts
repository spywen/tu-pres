import PlanningService from "../services/planning.service";
import Parent from "./parent";
let parent: Parent;

beforeEach(() => {
    parent = new Parent();
    parent.isTired = false;
    parent.isHungry = false;
})

describe("needToSleep - daytime period", () => {

    beforeEach(() => {
        jest.spyOn(PlanningService.prototype, 'isNight', 'get')
            .mockImplementation(() => false);
    });

    it("should not need to sleep when it's daytime", () => {
        expect(parent.needToSleep).toBeFalsy();
    });

    it("should not need to sleep even when is tired during daytime", () => {
        parent.isTired = true;

        expect(parent.needToSleep).toBeFalsy();
    });

});

describe("needToSleep - night period", () => {

    beforeEach(() => {
        jest.spyOn(PlanningService.prototype, 'isNight', 'get')
            .mockImplementation(() => true);
    });

    it("should not need to sleep when is not tired", () => {
        parent.isTired = false;

        const result = parent.needToSleep;

        expect(result).toBeFalsy();
    });

    it("should need to sleep when is tired", () => {
        parent.isTired = true;

        const result = parent.needToSleep;

        expect(result).toBeTruthy();
    });

    it("should not need to sleep when is tired but is hungry", () => {
        parent.isTired = true;
        parent.isHungry = true;

        const result = parent.needToSleep;

        expect(result).toBeFalsy();
    });

});

