import React, {useEffect, useState} from "react";

const Timer = () => {

    const [time, setTime] = useState(0);


    const refreshTime = () => {
        let tmpTime = time

         tmpTime++
        setTime(tmpTime++)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            refreshTime()
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="timer">
            {time} seconds
        </div>
    );
}


export default Timer;