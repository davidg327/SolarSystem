/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './navigation';
import {ToastProviderComponent} from './components/molecules/toast';

function App(): React.JSX.Element {
  return (
      <ToastProviderComponent>
        <Navigation />
      </ToastProviderComponent>
  );
}

export default App;
