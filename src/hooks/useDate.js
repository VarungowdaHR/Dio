import { useState } from "react";

const useDate = (date) => {
        const olddate=new Date(date); 
        let curYear=olddate.getFullYear().toString();
        let curMonth=(olddate.getMonth()+1).toString().padStart(2, '0');
        let curDay=olddate.getDay().toString().padStart(2, '0');

        return {curYear, curMonth, curDay};
}

export default useDate