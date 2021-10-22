import Container from "./container";
import Card from "./card";
import * as data from "./data.json";

import "./styles.css";

export default function App() {
    const { items } = data;
  return (
    <div className="App">
      <main className="wrapper">
        <Container>
            {items?.map((item, index) => <Card item={item} key={index}/>)}
        </Container>
      </main>
    </div>
  );
}
