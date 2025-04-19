import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <Input type="text" label="name" id="name" />
      <Input type="number" label="age" id="age" />
      <Button href="https://www.google.com">A Link</Button>
      <p>
        <Button>A Button</Button>
      </p>
    </main>
  );
}
