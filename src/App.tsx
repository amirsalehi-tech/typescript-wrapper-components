import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

export default function App() {
  function handleSave(data: unknown) {
    const extractedData = data as {name: string; age: number};
    console.log(extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input id="name" label="name" type="text" />
        <Input id="age" label="age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
