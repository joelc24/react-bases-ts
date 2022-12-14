import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case 'reset':

            return {
                counter: 0,
                previous: 0,
                changes: 0
            }

        case 'increaseBy':
            const { counter, previous, changes } = state

            return {
                previous: counter,
                counter: counter + action.payload.value,
                changes: changes + 1
            }

        default:
            return state;
    }

}