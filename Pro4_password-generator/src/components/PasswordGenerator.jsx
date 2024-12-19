import React, { useState } from 'react'

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

    let characters = lowerCase;
    if (includeUppercase) characters += upperCase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Password Generator
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password Length
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="6"
            max="50"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">Include Uppercase</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">Include Numbers</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">Include Symbols</label>
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-6">
            <div className="bg-gray-100 p-3 rounded-md text-center text-gray-800 font-mono mb-3">
              {password}
            </div>
            <button
              onClick={copyToClipboard}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PasswordGenerator
