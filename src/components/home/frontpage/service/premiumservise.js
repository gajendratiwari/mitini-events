import React from "react";
import Block from "./block/block";
import ServiceList from "./premiumservicelist/premiumservicelist";
import data from "../../../../assets/database";

const PremiumService = () => (
  <div>
    <Block title={"OUR PREMIUM SERVICES OFFERED"} />
    <div>
      {data.map((info) => {
        return (
          <div key={info.id}>
            <ServiceList services={info.serviceList} />
          </div>
        );
      })}
    </div>
  </div>
);

export default PremiumService;
