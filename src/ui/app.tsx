import "./styles.css";

function App() {
  return (
    <div className="homepage">
      <h1>Figma + Vite + React</h1>

      <select id="componentDropdown">
        <option value="">(Loading...)</option>
      </select>

      <div className="card">
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>


    </div>
  );
}

export default App;
