import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FavoritesActions } from '../ducks/favorites';

export function* addFavoriteRequest(action) {

  try {

    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(FavoritesActions.addFavoriteError('Repositorio duplicado'));
    } else {
      yield put(FavoritesActions.addFavoriteSuccess(response.data));
    }

  } catch (error) {
    yield put(FavoritesActions.addFavoriteError('Repositorio nao existe'));
  }
}
