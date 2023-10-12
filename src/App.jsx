/* import "./App.css"; */
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout
        content={
          <div className="border-2 p-10">
            <img
              src="https://i.imgflip.com/829sk4.jpg"
              title="made at imgflip.com"
              alt="Is this content meme image"
            />
            <p>Is this content?</p>
          </div>
        }
      ></Layout>
    </>
  );
}

export default App;
