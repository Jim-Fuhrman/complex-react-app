import React, { useEffect } from "react"
import Page from "./Page"

function About() {
  return (
    <Page title="About Us">
      <h2>About Us</h2>
      <p className="lead text-muted">Now, we are not going to create new separate HTML pages aside from our indexed HTML, since we are using React, we don't need to rely on server side routing. We can use client side or front end routing, which means React can simply show the appropriate content here, depending on the current U.S. URL in the address bar.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At qui enim rem totam voluptatum. Aut saepe temporibus, facilis ex a iste expedita minima dolorum dicta doloribus libero aliquid, quae maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit beatae eum, est soluta ducimus ratione et impedit sapiente, nihil, atque dignissimos adipisci? Totam atque officia quis voluptates sed veniam?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quisquam possimus tenetur, dicta enim rerum quis, quaerat id nobis provident quo dolorum sapiente temporibus facere non repellendus consequatur cupiditate!</p>
    </Page>
  )
}

export default About
