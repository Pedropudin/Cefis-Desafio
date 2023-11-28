// ExampleComponent.js
import { useState, useEffect } from 'react';

function ExampleComponent() {
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Your component logic that uses useState
  }, []); // Empty dependency array ensures this effect runs once, similar to componentDidMount

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}

export default ExampleComponent;
