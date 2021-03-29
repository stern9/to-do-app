import "./Context.css";
import FormInput from "./components2/FormInput";
import List from "./components2/List";
import Footer from "./components2/Footer";
import { DataProvider } from "./components2/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
};

export default App;
