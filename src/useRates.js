import { useEffect, useState } from "react";

export const useRates = () => {
   const [ratesData, setRatesData] = useState({});

   useEffect(() => {
      const getRates = async () => {
         try {
            const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

            if (!response.ok) {
               throw new Error(response.statusText);
            }

            const { rates, date } = await response.json();
            setRatesData({ rates, date, state: "success" });
         } catch (error) {
            setRatesData({ state: "error" });
         }
      };
      setTimeout(getRates, 1500);
   }, []);

   return ratesData;
};

