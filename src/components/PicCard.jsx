import React from 'react'

export default function PicCard(props) {
  return (
    <span style={{border:"1px solid black", padding:"10px" }}>
      <img src="{props.showimg}" alt="" />
      </span>
  )
}
