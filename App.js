import Home from './src/Home';

import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

const theme = {
  bg: '#191a24',
  primary: '#ff26A0',
  accent: '#ff26A0',
  text: '#fff',
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent={true} animated={true} backgroundColor={theme.bg} />
      <Home />
    </ThemeProvider>
  );
}
