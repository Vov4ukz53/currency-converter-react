import { useCurrentDate, formateDate } from "./useCurrentDate";
import {Date} from "./styled.js";

export const Clock = () => {
   const date = useCurrentDate();

   return (
      <Date>
         Disiaj jest
         {" "}
         {formateDate(date)}
      </Date>
   );
};
