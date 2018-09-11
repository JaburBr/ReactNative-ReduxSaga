import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess, addFavoriteError, setFavoriteLoading } from '../actions/favorites';

export function* addFavoriteRequest(action) {

  try {

    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    yield put(addFavoriteSuccess(response.data));

  } catch (error) {
    yield put(addFavoriteError('Repositorio nao existe'));
    yield put(setFavoriteLoading(false));
  }
}
