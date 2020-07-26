import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../../store/store';


class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <PersistGate persistor={store.__PERSISTOR} loading={null}>

                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        );
    }
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);