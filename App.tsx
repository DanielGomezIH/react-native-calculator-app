import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { CalculatorScreen } from './src/presentation/screens';

export const App = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor='black' />

      <CalculatorScreen />
    </View>
  );
};

const styles = StyleSheet.create({});
