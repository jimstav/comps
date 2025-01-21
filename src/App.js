import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div>
      <div>
        <Button secondary outline rounded onClick={handleClick}>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Click me!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Click me!
        </Button>
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
