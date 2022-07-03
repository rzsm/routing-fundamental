import React from "react"
import { routeRenderContext } from '../context/route-render'

const Link = ({ to, children }) => {
  const forceUpdate = React.useContext(routeRenderContext)

  const linkClickHandler = (e) => {
    e.preventDefault()
    window.history.pushState({}, '', to)
    forceUpdate()    
  }

  return (
    <a onClick={linkClickHandler}>
      {children}
    </a>
  )
}

export default Link