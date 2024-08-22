import { StatusBar, View } from 'react-native';
import { globalStyles } from './src/config/theme/app-theme';
import { CalculatorScreen } from './src/presentation/screens';

export const App = () => {
  return (
    <View style={globalStyles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor='black' />

      <CalculatorScreen />
    </View>
  );
};
