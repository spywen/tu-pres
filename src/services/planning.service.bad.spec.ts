import moment from "moment";
import PlanningService from "./planning.service";
import TimeService from "./time.service";
import AstroService from "./astro.service";

let planningService: PlanningService;

beforeEach(() => {
    planningService = new PlanningService();

    // Dont find a way to mock entire class (hoisted issue..)
    // Simulating return undefined if entire object is mocked
    jest.spyOn(AstroService, 'isNotEclipse', 'get').mockReturnValue(false);
})

describe("isNight", () => {

    it("should be night when it's 21:00", () => {
        mockCurrentDate(21);

        const isNight = planningService.isNight;

        expect(isNight).toBeTruthy();
    });

});

function mockCurrentDate(hour: any) {
    jest.spyOn(TimeService, 'currentDate', 'get').mockReturnValue(moment(hour, 'HH'));
}
