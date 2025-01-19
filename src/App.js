import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>
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
        <Button secondary outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          Click me!
        </Button>
      </div>
    </div>
  );
}

export default App;
