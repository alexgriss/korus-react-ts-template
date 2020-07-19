import { put, delay, all, takeEvery } from 'redux-saga/effects';

import { getConfig } from '@common/config';
import { actions as loadingActions } from '@features/loading';

import { actions as initProcessActions } from './actions';

/**
 * Процесс инициализации приложения
 *
 * @returns {void}
 */
function* initProcess() {
  yield put(
    loadingActions.setLoading({
      isLoading: true,
      isGlobal: true,
    }),
  );

  yield delay(getConfig('defaultDelay', 2000));

  yield put(
    loadingActions.setLoading({
      isLoading: false,
      isGlobal: false,
    }),
  );
}

/**
 * Вотчер процесса инициализации приложения
 *
 * @returns {void}
 */
export function* initProcessWatcher() {
  yield all([takeEvery(initProcessActions.initApp, initProcess)]);
}
