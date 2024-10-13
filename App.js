import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Titulo from './components/Titulo';
import TelaInicial from './components/TelaInicial';

export default function App() {
  return (
    <View>
      <Titulo />
      <TelaInicial />
      <StatusBar style="auto" />
    </View>
  );
}
