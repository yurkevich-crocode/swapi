import Header from "./components/Header/Header";
import List from "./components/List/List";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <List />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
