"use client";

import { InlineWidget } from "react-calendly";


const Calendly =  () => {

    return ( 
    <div className="w-full ">
      <InlineWidget
      styles={{ height: "1000px" }}
      url="https://calendly.com/adm-rapidify/know-thy-self-with-rapidify" />
    </div> );
}
 
export default Calendly;