import React, { Component } from "react";
import Aux from "../../hoc/aux/aux";
import Banner from "../home/frontpage/topbanner/banner";
import data from "../../assets/database";
import Information from "./frontpage/info/info";
import Block from "./frontpage/block/block";
import PremiumService from "./frontpage/service/premiumservise";
import Profile from "./frontpage/profile/profile";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Aux>
        <div>
          {data.map((bannertitle) => (
            <div key={bannertitle.id}>
              <Banner bannertitle={bannertitle.title} />
            </div>
          ))}
        </div>
        <div>
          {data.map((info) => (
            <div key={info.id}>
              <Information
                info={info.about}
                heading={"CORPORATE EVENT MANAGEMENT BY MEतिनी Events"}
                missionheading={"Mission Statement:"}
                ourmission={info.mission}
              />
            </div>
          ))}
        </div>
        <div>
          {data.map((info) => {
            return (
              <div key={info.id}>
                <Block blockvalue={info.title}></Block>
              </div>
            );
          })}
        </div>
        <div>
          <PremiumService />
        </div>
        <div>
          <Profile />
        </div>
      </Aux>
    );
  }
}

export default About;
