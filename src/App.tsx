import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

export default function App() {
  return (
    <main>
      <Form>
        <Input id="name" label="name" type="text" />
        <Input id="age" label="age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
