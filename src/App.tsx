import MouseTracker from "./components/MouseTracker";
import ReactLogo from "./components/ReactLogo";

function App() {
  return (
    <MouseTracker
      render={(mousePosition) => (
        <ReactLogo position={mousePosition} width={64} />
      )}
    />
  );
}

export default App;
