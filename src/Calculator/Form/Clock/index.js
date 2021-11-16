import { useEffect, useState } from "react";
import "./style.css";

const formateDate = (date) =>
   date.toLocaleString("pl", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
   });

export const Clock = () => {
   const [date, setDate] = useState(new Date());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setDate(new Date());
      }, 1000);

      return () => {
         clearInterval(intervalId);
      };
   }, []);

   return (
      <p className="clock">
         Disiaj jest
         {" "}
         {formateDate(date)}
      </p>
   );
};
