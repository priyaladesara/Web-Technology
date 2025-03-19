import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  // State for the counter value
  const [count, setCount] = useState(0);
  
  // State for the initial value that can be set by user
  const [initialValue, setInitialValue] = useState(0);
  
  // State for the step size
  const [stepSize, setStepSize] = useState(1);
  
  // State for the multiply factor
  const [multiplyFactor, setMultiplyFactor] = useState(2);

  // Handler for increment button
  const increment = () => {
    setCount(count + Number(stepSize));
  };

  // Handler for decrement button
  const decrement = () => {
    setCount(count - Number(stepSize));
  };

  // Handler for multiply button
  const multiply = () => {
    setCount(count * Number(multiplyFactor));
  };

  // Handler for reset button
  const reset = () => {
    setCount(Number(initialValue));
  };

  // Handler for initial value input
  const handleInitialValueChange = (e) => {
    setInitialValue(e.target.value);
  };

  // Handler for step size input
  const handleStepSizeChange = (e) => {
    setStepSize(e.target.value);
  };

  // Handler for multiply factor input
  const handleMultiplyFactorChange = (e) => {
    setMultiplyFactor(e.target.value);
  };

  // Handler for setting initial value
  const setInitial = () => {
    setCount(Number(initialValue));
  };

  return (
    <div className="counter-container">
      <h2>React Counter</h2>
      
      <div className="counter-display">
        <p>Count: <span className="count-value">{count}</span></p>
      </div>
      
      <div className="counter-controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={reset}>Reset</button>
      </div>
      
      <div className="counter-settings">
        <div className="setting-group">
          <label>
            Initial Value:
            <input 
              type="number" 
              value={initialValue} 
              onChange={handleInitialValueChange}
            />
          </label>
          <button onClick={setInitial}>Set Initial</button>
        </div>
        
        <div className="setting-group">
          <label>
            Step Size:
            <input 
              type="number" 
              value={stepSize} 
              onChange={handleStepSizeChange}
            />
          </label>
        </div>
        
        <div className="setting-group">
          <label>
            Multiply Factor:
            <input 
              type="number" 
              value={multiplyFactor} 
              onChange={handleMultiplyFactorChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Counter;