import { Pressable, Text } from 'react-native';
import { colors, globalStyles } from '../../config/theme/app-theme';

export interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  isLarge?: boolean;
}

export const CalculatorButton = ({
  label,
  backgroundColor = colors.darkGray,
  color = colors.textPrimary,
  isLarge = false,
}: ButtonProps) => {
  return (
    <Pressable
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
