//libraries used 
/*
Axios - for api
styled-components
router-dom - for between pages surfing
react -redux
*/

import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(
// Strictmode for more checks and warnings                                                             
<React.StrictMode>
<Provider store={store}>
<App />
</Provider>
</React.StrictMode>
);