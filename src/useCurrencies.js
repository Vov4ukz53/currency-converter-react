import { useEffect, useState } from "react";

export const useCurrencies = () => {
   const [currenciesData, setCurrenciesData] = useState({});

   useEffect(() => {
      const getCurrencies = async () => {
         try {
            const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

            if (!response.ok) {
               throw new Error(response.statusText);
            }

            const { rates, date } = await response.json();
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

