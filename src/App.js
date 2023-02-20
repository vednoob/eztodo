import Todo from "./components/Todo/Todo";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Todo />
      </Container>
    </div>
  );
}

export default App;
