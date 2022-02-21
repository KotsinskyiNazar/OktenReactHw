import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../../store";

const Car = ({car : {id,model,price,year}}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <p>Model : {model} </p>
            <p>Price : {price}</p>
            <p>Year : {year}</p>
            <button onClick={()=> dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};