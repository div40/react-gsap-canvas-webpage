import Canvas from "./Canvas";
import "./index.css";
function App() {
  return (
    <div className="bg-black w-screen min-h-screen text-white overflow-x-hidden flex">
      <Canvas startIndex={0} />
      <Canvas startIndex={150} />
      <Canvas startIndex={300} />
    </div>
  );
}

export default App;
