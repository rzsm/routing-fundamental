import React from 'react'
import { routeRenderValueContext } from '../context/route-render'

const Route = ({path, children}) => {
  const renderCount = React.useContext(routeRenderValueContext)
  const pathname = window.location.pathname
  if (path !== pathname) return null
  return children
}

export default Route;