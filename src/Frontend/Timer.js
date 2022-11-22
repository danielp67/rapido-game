import React, {useEffect, useState} from "react";

const Timer = (props) => {

    const [time, setTime] = useState(0);
    const {start, stop} = props

    const refreshTime = () => {
        let tmpTime = time

         tmpTime++
        setTime(tmpTime++)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(!stop && start)
            {
                refreshTime()
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className=" text-center">
            <i className="fa fa-clock-o" aria-hidden="true"></i> {time} seconds
        </div>
    );
}


export default Timer;