import "./styles.css";
import Container from "./container";
import Card from "./card";

export default function App() {
  return (
    <div className="App">
      <main className="wrapper">
        <Container>
          <Card />
          <Card />
          <Card />
        </Container>
      </main>
    </div>
  );
}
