import React, { useEffect } from "react"

function Container(props) {
  // if props.wide is true, we don't want a third class. If it's false, we want the className container-narrow class.
  return <div className={"container py-md-5 " + (props.wide ? "" : "container--narrow")}>{props.children}</div>
}

export default Container
