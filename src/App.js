import { Header } from "./components/Header";
import { Characters } from "./components/Characters";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeContext.Provider value='red'>
        <Header />
        <Characters />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
