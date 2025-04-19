import Container from "./components/Container";

export default function App() {
  return (
    <main>
      <Container
        as="button"
        type="button"
        onClick={() => alert("Hello World!")}
      >
        Click Me
      </Container>
    </main>
  );
}
