import Calculator from "./components/Pages/Calculator";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="h-[100%] w-screen sm:rounded-3xl sm:shadow-md flex flex-col">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
