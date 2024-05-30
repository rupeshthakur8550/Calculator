import Calculator from "./components/Pages/Calculator";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="sm:rounded-3xl sm:shadow-md flex flex-col">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
