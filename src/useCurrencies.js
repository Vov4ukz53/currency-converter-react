import { useEffect, useState } from "react";
import axios from "axios";

export const useCurrencies = () => {
   const [currenciesData, setCurrenciesData] = useState({ state: "loading" });
   const APIKEY = 'cur_live_XfkIdast3exSX4eiltDYfPZxRp2KGlaH4d3bxPhg';

   useEffect(() => {
      const getCurrencies = async () => {
         try {
            const response = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=${APIKEY}&currencies`);
            const { data, meta } = await response.data;
            setCurrenciesData({ meta, data, state: "success" });
         } catch (error) {
            setCurrenciesData({ state: "error" });
            console.error(error);
         }
      };
      setTimeout(getCurrencies, 1500);
   }, []);

   return currenciesData;
};

