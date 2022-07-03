// Goal of this context:
// to force Routes Components re-render whenever a Link component is clicked

import React from "react";

export const routeRenderContext = React.createContext()
export const routeRenderValueContext = React.createContext()

export const RoutingRerenderProvider = ({ children }) => {
  const [renderCount, setToRender ] = React.useState(0)

  const forceUpdate = () => {
    setToRender(prev => prev + 1)
  }

  return (
    <routeRenderValueContext.Provider value={renderCount}>
      <routeRenderContext.Provider value={forceUpdate}>
        {children}
      </routeRenderContext.Provider>
    </routeRenderValueContext.Provider>
  )
}

