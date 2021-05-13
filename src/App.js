import "./App.css";
import Navbar from "./Navbar";
import Joblist from "./Joblist";
import Search from "./Search";
import { useGlobalContext } from "./Context";
function App() {
  const { searchArray } = useGlobalContext();
  return (
    <div className="App">
      <Navbar />
      {searchArray&& <Search /> }
      <Joblist />
    </div>
  );
}

export default App;
