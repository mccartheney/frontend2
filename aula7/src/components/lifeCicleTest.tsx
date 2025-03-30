import { useEffect } from "react"

const LiFeCicle = () =>{
    useEffect (() => {
        console.log("mounted")
        return () => {console.log("unmounted")}
    })

    return (
        <h1>
            NICE!
        </h1>
    )
}

export default LiFeCicle