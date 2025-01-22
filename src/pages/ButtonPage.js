import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
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

export default ButtonPage;
