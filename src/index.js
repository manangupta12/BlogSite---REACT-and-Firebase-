import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore ,getFirestore } from 'redux-firestore';
import FirebaseConfig from './config/FirebaseConfig'
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(FirebaseConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(FirebaseConfig) // redux bindings for firestore
  )
);
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
});
serviceWorker.unregister();
