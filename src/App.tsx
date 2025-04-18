import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <Input type="text" label="name" id="name" />
      <Input type="number" label="age" id="age" />
      <p>
        <Button className="button" el="button">
          A Button
        </Button>
      </p>
      <Button className="button" el="anchor" href="https://www.google.com">
        A Link
      </Button>
    </main>
  );
}
