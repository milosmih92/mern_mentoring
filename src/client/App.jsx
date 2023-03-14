import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import axios from 'axios'

import Home from '_client/pages/Home'

const App = () => {
    const { pathname } = useLocation()
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          const { data } = await axios.get("api/products");
          setProducts(data)
        };
        fetchProducts();
      }, []);

    return (
        <div className='app-container'>
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path="/" component={Home} products={products} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    )
}

export default App