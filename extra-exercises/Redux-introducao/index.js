const redux = require('redux');

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;  // medoto para combinar reducers, pois agora temos dois reducers para trabalhar.

const { increment, incrementTwo, decrement } = require('./actions/CounterActions');
const { addItemAction } = require('./actions/ListActions');


const counterReducer = require('./reducers/CounterReducer');
const listReducer = require('./reducers/ListReducer');


const allReducers = combineReducer({
    counter: counterReducer,
    list: listReducer
}) // usei o combineReducers para salvar os reducers dentro de chaves nessa const allReducers

const store = createStore(allReducers)  // agora ao invés de passar como parâmetro o reducer counterReducer, iremos passar o allReducer, que contem todos os meus reducers criados.

store.dispatch(increment)
store.dispatch(addItemAction('learn redux'))
console.log(store.getState())
store.subscribe(() => {console.log(store.getState()) })
