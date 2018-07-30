import App, { Container } from 'next/app'
import React from 'react'
// import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import withRedux from "next-redux-wrapper"
import { initializeStore } from '../store'
import { fromJS } from 'immutable'

class MyApp extends App {
  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initializeStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state),
})(MyApp)
