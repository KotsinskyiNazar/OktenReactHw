import React, {useReducer} from 'react';

const reducer = (state, action) => {
    if (action.btn === '1') {
        if (action.type === 'inc') {
            return {...state, count1: state.count1 + 1}

        } else if (action.type === 'dec') {
            return {...state, count1: state.count1 - 1}
        } else if (action.type === 'res') {
            return {...state, count1: 0}
        } else return state
    } else if (action.btn === '2') {
        if (action.type === 'inc') {
            return {...state, count2: state.count2 + 1}
        } else if (action.type === 'dec') {
            return {...state, count2: state.count2 - 1}
        } else if (action.type === 'res') {
            return {...state, count2: 0}
        } else {
            return state
        }
    } else if (action.btn === '3') {
        if (action.type === 'inc') {
            return {...state, count3: state.count3 + 1}
        } else if (action.type === 'dec') {
            return {...state, count3: state.count3 - 1}
        } else if (action.type === 'res') {
            return {...state, count3: 0}
        }
    } else {
        return state
    }
}


const HwReducer = () => {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0})
    return (<div>
        <div>
            <p>{state.count1}</p>
            <button onClick={() => dispatch({btn: '1', type: 'inc'})}>Inc</button>
            <button onClick={() => dispatch({btn: '1', type: 'dec'})}>Dec</button>
            <button onClick={() => dispatch({btn: '1', type: 'res'})}>Res</button>
        </div>
        <div>
            <p>{state.count2}</p>
            <button onClick={() => dispatch({btn: '2', type: 'inc'})}>Inc</button>
            <button onClick={() => dispatch({btn: '2', type: 'dec'})}>Dec</button>
            <button onClick={() => dispatch({btn: '2', type: 'res'})}>Res</button>
        </div>
        <div>
            <p>{state.count3}</p>
            <button onClick={() => dispatch({btn: '3', type: 'inc'})}>Inc</button>
            <button onClick={() => dispatch({btn: '3', type: 'dec'})}>Dec</button>
            <button onClick={() => dispatch({btn: '3', type: 'res'})}>Res</button>
        </div>


    </div>);
};

export default HwReducer;