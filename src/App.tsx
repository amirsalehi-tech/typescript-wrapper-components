import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";
import {useRef} from "react";
import {type FormHandle} from "./components/Form";
export default function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as {name: string; age: number};
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="name" type="text" />
        <Input id="age" label="age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
