import React, { useEffect } from "react"
import Container from "./Container"

//Page.js prevents duplicate code in the HomeGuest.js, About.js and Terms.js pages

function Page(props) {
  useEffect(() => {
    //only run this the first time it's rendered.
    document.title = `${props.title}  | ComplexApp`
    window.scrollTo(0, 0)
  }, [props.title])
  return <Container wide={props.wide}>{props.children}</Container>
}

export default Page
