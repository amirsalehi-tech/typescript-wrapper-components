import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <Input type="text" label="name" id="name" />
      <Input type="number" label="age" id="age" />
    </main>
  );
}
