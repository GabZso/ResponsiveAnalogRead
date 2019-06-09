// @flow

export default class SimulationTick {
    input: number;
    raw: number;
    output: number;
    hasChanged: boolean;
    isSettled: boolean;
    tension: number;
    log: number;

    constructor(props: *) {
        this.input = props.input;
        this.raw = props.raw;
        this.output = props.output;
        this.hasChanged = props.hasChanged;
        this.isSettled = props.isSettled;
        this.tension = props.tension;
        this.log = props.log;
    }

    toJS(): * {
        return {
            input: this.input,
            raw: this.raw,
            output: this.output,
            hasChanged: this.hasChanged,
            isSettled: this.isSettled,
            tension: this.tension,
            log: this.log
        };
    }
}
