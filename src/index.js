import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes/Routes.jsx";
import "assets/scss/material-kit-react.scss?v=1.4.0";
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers/index'
const store = createStore(reducers,{},applyMiddleware(reduxThunk))

ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));
