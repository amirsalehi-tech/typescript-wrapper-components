import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <Input type="text" label="name" id="name" />
      <Input type="number" label="age" id="age" />
      <Button className="button" href="https://www.google.com">
        A Link
      </Button>
      <p>
        <Button className="button">A Button</Button>
      </p>
    </main>
  );
}
