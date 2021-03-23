import { fork } from 'redux-saga/effects';
import { stockSaga } from '../redux/stock/stock.saga';
import { graphSaga } from '../redux/graph/graph-saga';

export default function* rootSaga() {
	yield fork(stockSaga);
	yield fork(graphSaga);
}
