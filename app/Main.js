import React, { useState, useReducer } from "react"
import ReactDM from "react-dom"
import { useImmerReducer } from "use-immer"
// Brad sent an email on 03-29-2022 saying to replace the next line with the one that follows it
// import ReactDOM from "react-dom"
import {CSSTransition} from "react-transition-group"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:8080"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import NotFound from "./components/NotFound"
import Search from './components/Search'

// My Components
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import CreatePost from "./components/CreatePost"
import ViewSinglePost from "./components/ViewSinglePost"
import FlashMessages from "./components/FlashMessages"
import { useEffect } from "react"
import Profile from "./components/Profile"
import EditPost from "./components/EditPost"

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("complexappToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("complexappToken"),
      username: localStorage.getItem("complexappUsername"),
      avatar: localStorage.getItem("complexappAvatar")
    },
    isSearchOpen: false
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "logout":
        draft.loggedIn = false
        return
      case "flashMessage":
        draft.flashMessages.push(action.value)
        return
      case "openSearch":
        draft.isSearchOpen = true
        return
      case "closeSearch":
        draft.isSearchOpen = false
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("complexappToken", state.user.token)
      localStorage.setItem("complexappUsername", state.user.username)
      localStorage.setItem("complexappAvatar", state.user.avatar)
    } else {
      localStorage.removeItem("complexappToken")
      localStorage.removeItem("complexappUsername")
      localStorage.removeItem("complexappAvatar")
    }
  }, [state.loggedIn])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Routes>
            <Route path="/profile/:username/*" element={<Profile />} />
            <Route path="/" element={state.loggedIn ? <Home /> : <HomeGuest />} />
            <Route path="/post/:id" element={<ViewSinglePost />}></Route>
            <Route path="/post/:id/edit" element={<EditPost />} />
            <Route path="/create-post" element={<CreatePost />}></Route>
            <Route path="/about-us" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CSSTransition timeout={330} in={state.isSearchOpen} classNames="search-overlay" unmountOnExit>
            <Search />
          </CSSTransition>
          
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

// Brad sent an email on 03-29-2022 saying to replace the next line with the two lines that follow it.
//ReactDOM.render(<Main />, document.querySelector("#app"))
const root = createRoot(document.querySelector("#app"))
//in lesson 16 I couldn't get the right output without  changing <Main /> to <ExampleComponent /> Later in lesson 16 Brad had us change it to <Main />
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
