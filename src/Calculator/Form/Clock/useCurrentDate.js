import { useState, useEffect } from "react";

export const formateDate = (date) =>
   date.toLocaleString("pl", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
   });

export const useCurrentDate = () => {
   const [date, setDate] = useState(new Date());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setDate(new Date());
      }, 1000);

      return () => {
         clearInterval(intervalId);
      };
   }, []);

   return date;
};