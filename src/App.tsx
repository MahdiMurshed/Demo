import "./App.css";
import CheckboxesTags from "./components/features/add_questions";
import Layout from "./components/layout/Drawer";

function App() {
  return (
    <div className="App">
      <Layout>
        <CheckboxesTags />
      </Layout>
    </div>
  );
}

export default App;
