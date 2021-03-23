import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as stock from '../redux/stock/stock.actions';
import * as graph from '../redux/graph/graph-actions';

export const actions = { stock, graph };

export type RootAction = ActionType<typeof actions>;
export type Dispatch = ReduxDispatch<RootAction>;
