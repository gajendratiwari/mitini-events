import React, { Component } from "react";
import data from "../../../../assets/database";
import Authors from "./author/author";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {data.map((info) => {
          return (
            <div key={info.id}>
              <Authors
                employee={info.authors}
                authorsIntro={info.authorsTitle}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Profile;
