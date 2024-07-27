import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Component from "./components/Component/Component";
import Header from "./components/Component/Header";

const App = () => {
  return (
    <div className="App">
      <div data-testid="brain-flix-page">
        <Header />
        <Routes>
          <Route path="/" element={<Component />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
