import "./App.scss";
import Component from "./components/Component/Component";
import Header from "./components/Component/Header";

const App = () => {
  return (
    <div className="App">
      <div data-testid="brain-flix-page">
        <Header />
        <Component />
      </div>
    </div>
  );
};

export default App;
