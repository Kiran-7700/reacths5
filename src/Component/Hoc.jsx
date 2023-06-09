import React  from 'react'

function HocRed(props) {
  return (
    <div>
        <h2 style={{backgroundColor:"red"}}><props.cmp/></h2>
    </div>
  )
}
export default HocRed;

