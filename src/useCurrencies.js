import { useEffect, useState } from "react";
import axios from "axios";

export const useCurrencies = () => {
   const [currenciesData, setCurrenciesData] = useState({ state: "loading" });

   useEffect(() => {
      const getCurrencies = async () => {
         try {
            const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
            const { rates, date } = await response.data;
            setCurrenciesData({ rates, date, state: "success" });
         } catch (error) {
            setCurrenciesData({ state: "error" });
            console.error(error);
         }
      };
      setTimeout(getCurrencies, 1500);
   }, []);

   return currenciesData;
};

