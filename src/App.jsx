import Calculator from "./components/Pages/Calculator"

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="relative h-screen w-screen sm:h-[580px] sm:w-[320px] sm:rounded-3xl sm:shadow-md flex flex-col overflow-hidden">
        <Calculator />
      </div>
    </div>
  )
}

export default App
