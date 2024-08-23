import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const initialNumber = '0';

  const [number, setNumber] = useState<string>(initialNumber);

  const [prevNumber, setPrevNumber] = useState<string>(initialNumber);

  const [formula, setFormula] = useState<string>('');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();

    setPrevNumber(`${subResult}`);
  }, [formula]);

  const cleanNumber = () => {
    setNumber(initialNumber);
    setPrevNumber(initialNumber);
    lastOperation.current = undefined;
    setFormula(initialNumber);
  };

  const deleteButton = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1); //Remueve el operador '-'
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber(initialNumber);
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    return setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (!numberString) return;

    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') return setNumber(number + numberString);

      if (numberString === '0' && number.includes('.'))
        return setNumber(number + numberString);

      if (numberString === '0' && !number.includes('.')) return;

      if (
        numberString !== '0' &&
        !number.includes('.') &&
        number.includes('-')
      ) {
        return setNumber('-' + numberString);
      }

      if (numberString !== '0' && !number.includes('.'))
        return setNumber(numberString);
    }

    return setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber(initialNumber);
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const result = calculateSubResult();

    setFormula(`${result}`);

    lastOperation.current = undefined;

    setPrevNumber(initialNumber);
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return `${num1 + num2}`;

      case Operator.subtract:
        return `${num1 - num2}`;

      case Operator.multiply:
        return `${num1 * num2}`;

      case Operator.divide:
        return `${num1 / num2}`;

      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    //Properties
    number,
    prevNumber,
    formula,

    //Methods
    buildNumber,
    cleanNumber,
    toggleSign,
    deleteButton,

    //Operations
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};
