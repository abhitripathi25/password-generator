// import React, { useState, useEffect } from 'react';

import './App.css'

// function App() {
//   const [password, setPassword] = useState('');
//   const [length, setLength] = useState(1);
//   const [includeNumber, setIncludeNumber] = useState(false); // Checkbox state for number inclusion
//   const [includeCharacter, setIncludeCharacter] = useState(false);

//   const handleSliderChange = (e) => {
//     const newLength = parseInt(e.target.value);
//     setLength(newLength);
//   };

//   const handleNumberCheckboxChange = () => {
//     setIncludeNumber(!includeNumber);
//   };

//   const handleCharacterCheckboxChange = () => {
//     setIncludeCharacter(!includeCharacter);
//   };

//   // useEffect(() => {
//   //   generatePassword();
//   // }, [length, includeNumber, includeCharacter]);

//   const generatePassword = () => {
//     const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numberSet = '0123456789';
//     const specialCharSet = '!@#$%^&*()_+{}[]|:;"<>,.?/~';

//     let availableCharset = charset;
//     if (includeNumber) {
//       availableCharset += numberSet;
//     }
//     if (includeCharacter) {
//       availableCharset += specialCharSet;
//     }

//     let newPassword = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * availableCharset.length);
//       newPassword += availableCharset[randomIndex];
//     }

//     setPassword(newPassword);
//   };

//   return (
   
//  <div className="bg-gray-400 rounded-xl p-4">
//   <h1 className='text-4xl text-center text-white'>Password Generator</h1>
//   <div className="flex items-center mt-4">
//     <input
//       type="text"
//       placeholder="Enter something"
//       className="flex-grow px-4 py-2 rounded-md mr-2"
//     />
//     <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Copy</button>
//   </div>
//   <div className="mt-4">
//     <label htmlFor="length">Length:(<span className="ml-0.5 mr-0.5">{length}</span>)</label>
//     <input
//           type="range"
//           id="length"
//           name="length"
//           min="1"
//           max="20"
//           value={length}
//           className="w-full"
//           onChange={handleSliderChange}
//         />
//   </div>
//   <div className="mt-4 flex justify-center">
//     <label className="mr-4">
//       <input type="checkbox" checked={includeNumber} 
//       onChange={handleNumberCheckboxChange}/>
//       Include Number
//     </label>
//     <label>
//       <input type="checkbox" checked={includeCharacter} 
//       onChange={handleCharacterCheckboxChange} />
//       Include Character
//     </label>
//   </div>
//   <div className="mt-4">
//         <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={generatePassword}>Generate</button>
//       </div>
// </div>



      
   
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8); // Default password length
  const [includeNumber, setIncludeNumber] = useState(false); // Checkbox state for number inclusion
  const [includeCharacter, setIncludeCharacter] = useState(false); // Checkbox state for character inclusion

  const handleSliderChange = (e) => {
    const newLength = parseInt(e.target.value);
    setLength(newLength);
  };

  const handleNumberCheckboxChange = () => {
    setIncludeNumber(!includeNumber);
  };

  const handleCharacterCheckboxChange = () => {
    setIncludeCharacter(!includeCharacter);
  };

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberSet = '0123456789';
    const specialCharSet = '!@#$%^&*()_+{}[]|:;"<>,.?/~';

    let availableCharset = charset;
    if (includeNumber) {
      availableCharset += numberSet;
    }
    if (includeCharacter) {
      availableCharset += specialCharSet;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableCharset.length);
      newPassword += availableCharset[randomIndex];
    }

    setPassword(newPassword);
  };

  const handleCopy = () => {
    // Copy to clipboard functionality
    // ...
  };

  return (
    <div className="bg-gray-400 rounded-xl p-4">
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Generated Password"
          value={password}
          className="flex-grow px-4 py-2 rounded-md mr-2"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleCopy}>Copy</button>
      </div>
      <div className="mt-4">
        <label htmlFor="length">Length: <span className="ml-0.5 mr-0.5">{length}</span></label>
        <input
          type="range"
          id="length"
          name="length"
          min="1"
          max="20"
          value={length}
          className="w-full"
          onChange={handleSliderChange}
        />
      </div>
      <div className="mt-4 flex">
        <label className="mr-4">
          <input type="checkbox" checked={includeNumber} onChange={handleNumberCheckboxChange} />
          Include Number
        </label>
        <label>
          <input type="checkbox" checked={includeCharacter} onChange={handleCharacterCheckboxChange} />
          Include Character
        </label>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={generatePassword}>Generate</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
