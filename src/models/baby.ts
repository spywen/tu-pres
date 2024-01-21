import Person from "./person";

export default class Baby extends Person {

    public isDiaperFull: boolean = false;

    get needToSleep(): boolean {
        return super.needToSleep && !this.isDiaperFull;
    }

}