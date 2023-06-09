 import React from "react";

function HocGreen(props) {
    return (
      <div>
          <h2 style={{backgroundColor:"Green"}}><props.cmp/></h2>
      </div>
    )
  }
export default HocGreen;