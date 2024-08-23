import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../config/theme/app-theme';
import { buttons, IButton, Type } from '../../constants';
import { CalculatorButton } from '../components';
import { useCalculator } from '../hooks';

export const CalculatorScreen = () => {
  const {
    prevNumber,
    formula,

    buildNumber,
    cleanNumber,
    toggleSign,
    deleteButton,

    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  const handlePressButton = (button: IButton) => {
    if (!button) return;

    switch (button.type) {
      // Methods
      case Type.number:
        buildNumber(button.label);
        break;
      case Type.point:
        buildNumber(button.label);
        break;
      case Type.clear:
        cleanNumber();
        break;
      case Type.delete:
        deleteButton();
        break;
      case Type.toggleSign:
        toggleSign();
        break;

      // Operations
      case Type.add:
        addOperation();
        break;
      case Type.subtract:
        subtractOperation();
        break;
      case Type.multiply:
        multiplyOperation();
        break;
      case Type.divide:
        divideOperation();
        break;

      case Type.equal:
        calculateResult();
        break;

      default:
        throw new Error('A valid type is required');
    }
  };

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={styles.resultsContainer}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}
        >
          {formula}
        </Text>

        {formula === prevNumber ? (
          <Text style={globalStyles.subResult}> </Text>
        ) : (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyles.subResult}
          >
            {prevNumber}
          </Text>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((button) => (
          <CalculatorButton
            key={button.label}
            label={button.label}
            backgroundColor={button.backgroundColor}
            color={button.color}
            isLarge={button.isLarge}
            onPress={() => handlePressButton(button)}
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
