import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button warning>Click me!</Button>
      </div>
      <div>
        <Button secondary>Click me!</Button>
      </div>
      <div>
        <Button secondary rounded>
          Click me!
        </Button>
      </div>
    </div>
  );
}

export default App;
