import { fork } from 'redux-saga/effects';
import { stockSaga } from '../redux/stock/stock.saga';

export default function* rootSaga() {
	yield fork(stockSaga);
}
