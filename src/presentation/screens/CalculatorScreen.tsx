import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components';
import { buttons } from '../../constants';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={styles.resultsContainer}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((button) => (
          <CalculatorButton
            key={button.label}
            label={button.label}
            backgroundColor={button.backgroundColor}
            color={button.color}
            isLarge={button.isLarge}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 15,
  },
});
