import { configureStore as confStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import { getConfig } from '@common/config';
import rootReducer from './root-reducer';
import { rootSaga } from './root-saga';

/* eslint-disable */
const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

const configureStore = (preloadedState: any = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, logger];

  const store = confStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    middleware,
  });

  // Включаем redux-saga middleware
  sagaMiddleware.run(rootSaga);

  if (getConfig('environment', 'production') !== 'production' && module.hot) {
    module.hot.accept('./root-reducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
export { history } from './root-reducer';

/* eslint-enable */
