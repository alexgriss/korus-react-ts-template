import { call, all, fork } from 'redux-saga/effects';

import { initProcessWatcher } from '@processes/init';

/**
 * Главная сага - точка входа
 *
 * @returns {void}
 */
export function* rootSaga() {
  // eslint-disable-next-line no-console
  yield call(console.log, 'Root Saga Runner...!');

  yield all([initProcessWatcher].map(fork));
}
