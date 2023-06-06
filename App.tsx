import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text bold preset={'headingLarge'}>
        oi
      </Text>
      <Button />
    </SafeAreaView>
  );
}

export default App;
