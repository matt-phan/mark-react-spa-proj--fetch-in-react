import { useState } from "react";

interface Dog {
  message: string;
  status?: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();

  // const handleGetJoke = async () => {
  //   const response = await fetch(
  //     "https://jokestemp.neillbogie.repl.co/jokes/general/random"
  //   );
  //   const jsonBody: Joke[] = await response.json();
  //   setJoke(jsonBody[0]);
  // };

  const handleGetDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: Dog[]) => setDog(jsonBody[0]));
  };

  console.log(dog);

  if (dog) {
    return (
      <div>
        <h1>Dog App</h1>
        <details>
          <img src={dog.message} alt="dog" />
        </details>
        <hr />
        <button onClick={handleGetDog}>Get another joke</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog App</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          joke from an API!
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }
}

export default App;
