import { all, takeLatest } from 'redux-saga/effects';
import { addFavoriteRequest } from './favorites';
import { Types as FavoritesTypes } from '../ducks/favorites';

export default function* rootSaga(){
  return yield all([
    takeLatest(FavoritesTypes.ADD_REQUEST, addFavoriteRequest),
  ]);
};
