import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './CalculatorApp.css';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperatorClick = (op) => {
    if (input !== '') {
      setOperator(op);
      setResult(input);
      setInput('');
    }
  };

  const handleCalculate = () => {
    if (input !== '' && operator !== null && result !== '') {
      const num1 = parseFloat(result);
      const num2 = parseFloat(input);
      let calculatedResult;

      switch (operator) {
        case '+':
          calculatedResult = num1 + num2;
          break;
        case '-':
          calculatedResult = num1 - num2;
          break;
        case '*':
          calculatedResult = num1 * num2;
          break;
        case '/':
          calculatedResult = num1 / num2;
          break;
        default:
          return;
      }

      setResult(calculatedResult);
      setInput('');
      setOperator(null);
    }
  };

  return (
    <div className="calculator">
      <Display value={input !== '' ? input : result} />
      <div className="buttons">
        <Button onClick={() => handleNumberClick('1')}>1</Button>
        <Button onClick={() => handleNumberClick('2')}>2</Button>
        <Button onClick={() => handleNumberClick('3')}>3</Button>
        <Button onClick={() => handleOperatorClick('+')}>+</Button>
        <Button onClick={() => handleOperatorClick('-')}>-</Button>
        <Button onClick={() => handleOperatorClick('*')}>*</Button>
        <Button onClick={() => handleOperatorClick('/')}>/</Button>
        <Button onClick={handleCalculate}>=</Button>
      </div>
    </div>
  );
};

export default CalculatorApp;
