import ReactDOM from 'react-dom';
import App from './App';
import { RoutingRerenderProvider } from './context/route-render'

ReactDOM.render(
    <RoutingRerenderProvider> <App /> </RoutingRerenderProvider>,
    document.getElementById('root')
);
