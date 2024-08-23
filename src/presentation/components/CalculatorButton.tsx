import { Pressable, Text } from 'react-native';
import { colors, globalStyles } from '../../config/theme/app-theme';

interface CalculatorButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  isLarge?: boolean;
  onPress?: () => void;
}

export const CalculatorButton = ({
  label,
  backgroundColor = colors.darkGray,
  color = colors.textPrimary,
  isLarge = false,
  onPress,
}: CalculatorButtonProps) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor,
        opacity: pressed ? 0.8 : 1,
        width: isLarge ? 180 : 80,
      })}
    >
      <Text style={{ ...globalStyles.buttonText, color }}>{label}</Text>
    </Pressable>
  );
};
