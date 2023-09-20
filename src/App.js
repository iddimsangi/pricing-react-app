import "./App.css";
import { useState } from "react";
import PriceCardList from "./PriceCardList";

const Monthlypackages = [
  { packageName: "Basic", cost: 19.99, storage: "500 GB", users: 2, upto: 3 },
  {
    packageName: "Professional",
    cost: 24.99,
    storage: "1TB",
    users: 5,
    upto: 10,
  },
  { packageName: "Master", cost: 39.99, storage: "2TB", users: 10, upto: 20 },
];

const Annualypackages = [
  { packageName: "Basic", cost: 199.99, storage: "500 GB", users: 2, upto: 3 },
  {
    packageName: "Professional",
    cost: 249.99,
    storage: "1TB",
    users: 5,
    upto: 10,
  },
  { packageName: "Master", cost: 399.99, storage: "2TB", users: 10, upto: 20 },
];
function App() {
  const [myPackages, setMyPackages] = useState(Annualypackages);
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  const isCheckedHandler = () => {
    setIsChecked(!isChecked);
    setMyPackages(isChecked ? Annualypackages : Monthlypackages);
  };
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen rounded shadow-2xl md:m-6 p-4 bg-[url('./images/bg-top.svg')] bg-no-repeat bg-right-top bg-auto  md:space-y-0 md:h-36 md:mt-2">
      <header className="flex flex-col justify-center items-center space-y-3 mb-6 md:mb-12">
        <h1 className="text-grayish-blue font-montserrat font-semibold text-3xl">
          Our pricing
        </h1>
        <div className="flex justify-center items-center space-x-4">
          <h4 className="text-lg text-light-grayish-blue">Annualy</h4>
          <input
            type="checkbox"
            id="toggle-switch"
            checked={isChecked} // Use "checked" instead of "value"
            onChange={isCheckedHandler} // Toggle the state directly
            className="w-10 h-6 bg-gradient-to-r from-light-blue to-medium-blue-purple appearance-none rounded-xl relative hover:opacity-75 cursor-pointer transition duration-150"
          />
          <h4 className="text-lg text-light-grayish-blue">Monthly</h4>
        </div>
      </header>
      <PriceCardList packages={myPackages} setMyPackages={setMyPackages} />
    </div>
  );
}

export default App;
