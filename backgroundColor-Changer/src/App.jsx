// App.jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('bg-white');
  const [inputError, setInputError] = useState(false);

  const predefinedColors = [
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Blue', class: 'bg-blue-500' },
    { name: 'Yellow', class: 'bg-yellow-500' },
    { name: 'Gray', class: 'bg-gray-500' },
  ];

  const handleCustomColorChange = (event) => {
    const color = event.target.value.trim(); // Remove extra spaces
    const isValidClass = /^bg-[a-z]+(-\d{1,3})?$/.test(color); // Validate Tailwind class
    if (isValidClass) {
      setBgColor(color);
      setInputError(false); // Clear error
    } else {
      setInputError(true); // Set error state
    }
  };

  return (
    <div className={`h-screen ${bgColor} flex flex-col items-center justify-center`}>
      <h1 className="text-2xl font-bold mb-4">Background Color Changer</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {predefinedColors.map((color) => (
          <button
            key={color.name}
            className={`p-4 rounded ${color.class} text-white font-semibold`}
            onClick={() => setBgColor(color.class)}
          >
            {color.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="customColor" className="mb-2 font-medium">Custom Color:</label>
        <input
          id="customColor"
          type="text"
          placeholder="Enter Tailwind color class (e.g., bg-purple-500)"
          className={`border-2 p-2 rounded w-64 text-center ${inputError ? 'border-red-500' : 'border-gray-300'}`}
          onChange={handleCustomColorChange}
        />
        {inputError && (
          <p className="text-sm mt-2 text-red-500">
            Invalid class! Example: <code>bg-red-500</code>, <code>bg-blue-400</code>
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
