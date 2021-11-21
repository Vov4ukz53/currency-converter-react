import { useCurrentDate, formateDate } from "./useCurrentDate";
import "./style.css";

export const Clock = () => {
   const date = useCurrentDate();

   return (
      <p className="clock">
         Disiaj jest
         {" "}
         {formateDate(date)}
      </p>
   );
};
