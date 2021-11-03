import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();
  const [dogArray, setDogArray] = useState<Dog[]>([]);

  // const handleGetJoke = async () => {
  //   const response = await fetch(
  //     "https://jokestemp.neillbogie.repl.co/jokes/general/random"
  //   );
  //   const jsonBody: Joke[] = await response.json();
  //   setJoke(jsonBody[0]);
  // };

  const appendDog = (dog: Dog) => {
    const currentDogArray = [...dogArray];
    currentDogArray.push(dog);
    setDogArray(currentDogArray);
  }

  const handleGetDog = () => {
    if (dog) {
      appendDog(dog);
    }
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: Dog) => setDog(jsonBody));
  };

  if (dog) {
    return (
      <div>
        <h1>Dog App</h1>
        <img src={dog.message} alt="dog" width={400} />
        <details>
          <summary>Your most recent dogs:</summary>
          {dogArray.slice(-10).map((dog) => (<img key={dog.message} src={dog.message} alt="dog" width={150} height={120} />))}
        </details>
        <hr />
        <button onClick={handleGetDog}>Get another dog</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog App</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random dog photo
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }
}

export default App;
