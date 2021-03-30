import { fork } from 'redux-saga/effects';
import { stockSaga } from '../redux/stock/stock.saga';
import { graphSaga } from '../redux/graph/graph-saga';
import { ratesSaga } from '../redux/rates/rates.saga';

export default function* rootSaga() {
	yield fork(stockSaga);
	yield fork(graphSaga);
	yield fork(ratesSaga);
}
