import moment from "moment";
import TimeService from "../services/time.service";
import Parent from "./parent";

describe("test", () => {

    it("test", () => {
        const parent = new Parent();
        parent.isTired = true;

        jest.spyOn(TimeService, 'currentDate', 'get')
            .mockReturnValue(moment(21, 'HH'));

        expect(parent.needToSleep).toBeTruthy();
    });

});
