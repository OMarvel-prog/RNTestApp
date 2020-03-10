import React, { useState, useEffect } from 'react';
import { Provider } from 'mobx-react';
import bootStore from './store/store';
import MainScreen from './screens/MainScreen/MainScreen';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [store, setStore] = useState(null);
  const [isStorePrepared, setStorePrepared] = useState(false);

  useEffect(() => {
      bootStore.bootStore().then(() => {
          setStore(bootStore);
          setStorePrepared(true);
      });
  }, [store]);

  if (!isStorePrepared || !store) {
      return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
      <Provider store={store}>
        <MainScreen/>
      </Provider>
  );
}
