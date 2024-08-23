import { colors } from '../config/theme/app-theme';

export enum Type {
  add,
  clear,
  delete,
  divide,
  equal,
  multiply,
  number,
  point,
  subtract,
  toggleSign,
}

export interface IButton {
  label: string;
  type: Type;
  backgroundColor: string;
  color: string;
  isLarge?: boolean;
}

export const buttons: IButton[] = [
  {
    label: 'C',
    type: Type.clear,
    backgroundColor: colors.lightGray,
    color: colors.background,
  },
  {
    label: '+/-',
    type: Type.toggleSign,
    backgroundColor: colors.lightGray,
    color: colors.background,
  },
  {
    label: 'Del',
    type: Type.delete,
    backgroundColor: colors.lightGray,
    color: colors.background,
  },
  {
    label: '÷',
    type: Type.divide,
    backgroundColor: colors.orange,
    color: colors.textPrimary,
  },

  {
    label: '7',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '8',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '9',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: 'x',
    type: Type.multiply,
    backgroundColor: colors.orange,
    color: colors.textPrimary,
  },

  {
    label: '4',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '5',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '6',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '-',
    type: Type.subtract,
    backgroundColor: colors.orange,
    color: colors.textPrimary,
  },

  {
    label: '1',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '2',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '3',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '+',
    type: Type.add,
    backgroundColor: colors.orange,
    color: colors.textPrimary,
  },

  {
    label: '0',
    type: Type.number,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
    isLarge: true,
  },
  {
    label: '.',
    type: Type.point,
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  {
    label: '=',
    type: Type.equal,
    backgroundColor: colors.orange,
    color: colors.textPrimary,
  },
];
