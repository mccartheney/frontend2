import { Middleware } from "@reduxjs/toolkit";


const loggerMiddleware : Middleware = (store) => (next) => (action) =>{
    console.log("action", action)
    console.log("estado antes", store.getState())

    const result = next(action)

    console.log("estado dps", store.getState)
    return result
}

export default loggerMiddleware