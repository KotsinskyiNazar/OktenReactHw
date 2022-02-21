import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {carServices} from "../services/car.services";



export const getAllCars = createAsyncThunk(
    "carSlice/getAllCars",
    async () =>{
        try {
            const cars = await carServices.getAllCars()
            return cars
        }catch (e){

        }
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState: {
        cars: [],
    },
    reducers: {
        addCar: (state, action) => {
            let check = action.payload.data
            if (parseInt(check.year) <= 2000) {
                alert("Ви не ввели рік або рік є до 2000 ми не продаємо машини до 2000 року")
            }else if(check.model == ""){
                alert("Пусте поле моделі")
            }else if(check.price == ""){
                alert("Пусте поле ціни")
            }else {
                state.cars.push({
                    id: new Date().getTime(),
                    ...action.payload.data
                })
                console.log(action.payload.data)
            }

        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
    },
    extraReducers:{
        [getAllCars.fulfilled]:(state ,action) =>{
            state.cars = action.payload
        }
    }


})

const carReducer = carSlice.reducer
const {addCar, deleteCar, proveYear} = carSlice.actions

export default carReducer

export const carActions = {
    addCar, deleteCar, proveYear
}