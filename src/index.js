import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


//Redux inital DB
const initialState = {test:"test"}

//Redux API
const reducer = (state = initialState, action) =>{
    if (action.type==='UPLOAD') {console.log("success")}
    return { ...state, file: action.data}
}
//Redux Init functions
const store=createStore(reducer);



ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));


