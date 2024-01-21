import moment from "moment";
import PlanningService from "./planning.service";
import TimeService from "./time.service";
import AstroService from "./astro.service";

let planningService: PlanningService;

beforeEach(() => {
    planningService = new PlanningService();

    jest.spyOn(AstroService, 'isNotEclipse', 'get').mockReturnValue(true);
})

describe("isNight", () => {

    it("should be night when it's 21:00", () => {
        mockCurrentDate(21);

        const isNight = planningService.isNight;

        expect(isNight).toBeTruthy();
    });

    it("should not be night when it's 19:00", () => {
        mockCurrentDate(19);

        const isNight = planningService.isNight;

        expect(isNight).toBeFalsy();
    });

});

describe("isDaytime", () => {

    it("should not be daytime when it's 21:00", () => {
        mockCurrentDate(21);

        const isDaytime = planningService.isDaytime;

        expect(isDaytime).toBeFalsy();
    });

    it("should be daytime when it's 19:00", () => {
        mockCurrentDate(19);

        const isDaytime = planningService.isDaytime;

        expect(isDaytime).toBeTruthy();
    });

});

function mockCurrentDate(hour: any) {
    jest.spyOn(TimeService, 'currentDate', 'get').mockReturnValue(moment(hour, 'HH'));
}
