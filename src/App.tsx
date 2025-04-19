import {useRef} from "react";
import Input from "./components/Input";

export default function App() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="test" label="Test" ref={ref} />
    </main>
  );
}
