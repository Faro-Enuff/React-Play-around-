import Layout from "./Components/Layout";
import Home from "./Viewer/Home";
function App() {
  return (
    <div className="App">
      <div className="content">
        <Layout>
          <Home />
        </Layout>
      </div>
    </div>
  );
}

export default App;
