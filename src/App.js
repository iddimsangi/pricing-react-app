import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen rounded shadow-xl bg-white m-6 p-4 md:space-y-0">
      <header className="flex flex-col justify-center items-center space-y-3 mb-6">
        <h1 className="text-grayish-blue font-montserrat font-semibold text-3xl">
          Our pricing
        </h1>
        <div className="flex justify-center items-center space-x-4">
          <h4 className="text-lg text-light-grayish-blue">Annualy</h4>
          <input type="checkbox" />
          <h4 className="text-lg text-light-grayish-blue">Monthly</h4>
        </div>
      </header>
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-center m-4 space-y-3 p-6  rounded-lg shadow-2xl">
          <h3 className="text-grayish-blue text-lg font-bold">Basic</h3>
          <h1 className="text-6xl text-extrabold text-dark-grayish-blue flex items-center">
            <span className="text-2xl font-bold font-montserrat">$</span>199.99
          </h1>
          <ul className="text-sm min-w-full text-center">
            <li className="text-grayish-blue font-bold min-w-full p-3  border-y">
              500GB Storage
            </li>
            <li className="text-grayish-blue font-bold  min-w-full p-3  border-b">
              2 Users Allowed
            </li>
            <li className="text-grayish-blue font-bold  min-w-full p-3  border-b">
              Send Up to 3 GB
            </li>
          </ul>
          <button className="bg-gradient-to-r from-light-blue to-medium-blue-purple  uppercase text-xs text-white py-2 px-6 rounded-lg min-w-full">
            Learn More
          </button>
        </div>
        <div className="flex flex-col items-center justify-center m-4 space-y-3 p-6  rounded-lg shadow-2xl">
          <h3 className="text-grayish-blue text-lg font-bold">Professional</h3>
          <h1 className="text-6xl text-extrabold text-dark-grayish-blue flex items-center">
            <span className="text-2xl font-bold font-montserrat">$</span>249.99
          </h1>
          <ul className="text-sm min-w-full text-center">
            <li className="text-grayish-blue font-bold min-w-full p-3  border-y">
              1TB Storage
            </li>
            <li className="text-grayish-blue font-bold  min-w-full p-3  border-b">
              5 Users Allowed
            </li>
            <li className="text-grayish-blue font-bold  min-w-full p-3  border-b">
              Send Up to 10 GB
            </li>
          </ul>
          <button className="bg-gradient-to-r from-light-blue to-medium-blue-purple  uppercase text-xs text-white py-2 px-6 rounded-lg min-w-full">
            Learn More
          </button>
        </div>
        <div className="flex flex-col items-center justify-center m-4 space-y-3 p-6  rounded-lg shadow-2xl">
          <h3 className="text-grayish-blue text-lg font-bold">Master</h3>
          <h1 className="text-6xl text-extrabold text-dark-grayish-blue flex items-center">
            <span className="text-2xl font-bold font-montserrat">$</span>399.99
          </h1>
          <ul className="text-sm min-w-full text-center">
            <li className="text-grayish-blue font-bold min-w-full p-3  border-y">
              2TB Storage
            </li>
            <li className="text-grayish-blue font-bold  min-w-full p-3  border-b">
              10 Users Allowed
            </li>
            <li className="text-grayish-blue font-bold  min-w-full p-3  border-b">
              Send Up to 20 GB
            </li>
          </ul>
          <button className="bg-gradient-to-r from-light-blue to-medium-blue-purple  uppercase text-xs text-white py-2 px-6 rounded-lg min-w-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
