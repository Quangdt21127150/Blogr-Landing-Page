import "./App.scss";
import Designed from "./components/Designed/Designed";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Infrastructure from "./components/Infrastructure/Infrastructure";

function App() {
  return (
    <>
      <Header />
      <main>
        <Designed />
        <Infrastructure />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
