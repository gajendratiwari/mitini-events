import "./App.css";
import Layout from "../src/hoc/layout/layout";
import Navigation from "../src/components/navigation/navigation";
import Footer from "../src/components/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Layout />
        <Footer />
      </header>
    </div>
  );
}

export default App;
