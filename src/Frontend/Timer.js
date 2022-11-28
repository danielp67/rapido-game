import React, {useEffect, useState} from "react";

const Timer = (props) => {

    const [time, setTime] = useState(0);
    const {start, stop, timerOn} = props

    const refreshTime = () => {
        let tmpTime = time

         tmpTime++
        setTime(tmpTime++)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(!stop && start && timerOn)
            {
                refreshTime()
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    if(timerOn){
    return (
        <div className="text-center">
            <i className="fa fa-clock-o" aria-hidden="true"/> {time} seconds
        </div>
    )
    }
    else{
        return(
        <div className="text-center">
                No timer
         </div>
        )
    }

}


export default Timer;