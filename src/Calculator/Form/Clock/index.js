import { useEffect, useState } from "react";
import "./style.css";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);


    return (
        <p className="clock">
            Disiaj jest {date.toLocaleString("pl", { weekday: "long" })},&nbsp;
            {date.toLocaleString("pl", { day: "numeric", month: "long" })},&nbsp;
            {date.toLocaleString("pl", { hour: "numeric", minute: "numeric", second: "numeric" })}
        </p>
    )
}
