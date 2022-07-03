import React from 'react';
import Route from './router/Route';
import Link from './router/Link';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import { routeRenderContext } from './context/route-render';
import './style.css'

function App() {
  const forceUpdate = React.useContext(routeRenderContext)

  React.useEffect (()=>{
    window.addEventListener('popstate', forceUpdate)
  }, []) 

  return (
    <> 
      <nav className='nav-bar'>
        <ul>
        <li>
            <Link to='/' > Home Page </Link>
          </li>
          <li>
            <Link to='/about-us' > About us </Link>
          </li>
          <li>
          <Link to='/products' > products </Link>
          </li>
        </ul> 
      </nav>  
      <Route path='/'>    
        <h3>Home Page</h3>         
      </Route> 
      <Route path='/about-us'> 
        <AboutUs />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
    </>  
  );
}

export default App;
