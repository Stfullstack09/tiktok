import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';
import { BrowserRouter } from 'react-router-dom';

import IntlProviderWrapper from './Hoc/IntlProvider';
import StyleWrapper from './Styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode> {/* </React.StrictMode>, */}
    <>
        <BrowserRouter>
            <StyleWrapper>
                <Provider store={reduxStore}>
                    <IntlProviderWrapper>
                        <App persistor={persistor} />
                    </IntlProviderWrapper>
                </Provider>
            </StyleWrapper>
        </BrowserRouter>
    </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
