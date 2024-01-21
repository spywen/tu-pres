import moment from "moment";
import TimeService from "../services/time.service";
import Baby from "./baby";

describe("test", () => {
    it("test", () => {
        var trueValue = true;
        var falseValue = false;
        let baby = new Baby();
        baby.isTired = true;
        jest.spyOn(TimeService, 'currentDate', 'get')
            .mockReturnValue(moment(21, 'HH'));
        expect(baby.needToSleep).toBe(trueValue);
        expect(baby.isTired).toBe(trueValue);
        expect(baby.isDiaperFull).toBe(falseValue);
        expect(baby.isHungry).toBe(falseValue);
    });
});
