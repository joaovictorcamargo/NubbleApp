import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {EyeOffIcon} from './src/assets/icons/eyeOffIcon';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/Theme';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <Button disabled title="Primary" />
        <EyeOffIcon />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
