// pages/index.js
import { useState } from 'react';

function HomePage() {
  const [userInput, setUserInput] = useState(0);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my Next.js app.</p>
      
      <div>
        <label htmlFor="userInput">Enter Text:</label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={handleInputChange}
        />
      </div>

      <p>You entered: {userInput}</p>

      {/* No Link component for simplicity */}
      <a href="/about">
        <button>Go to About Page</button>
      </a>
    </div>
  );
}

export default HomePage;
