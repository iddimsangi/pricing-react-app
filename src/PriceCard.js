function PriceCard({ packageName, cost, storage, users, upto, setmyPackages }) {
  return (
    <div
      className={
        packageName === "Professional" ? "custom-card-css" : "card-css"
      }
    >
      <h3
        className={`${
          packageName === "Professional" ? "text-white" : "text-grayish-blue"
        } text-lg font-bold`}
      >
        {packageName}
      </h3>
      <h1
        className={`${
          packageName === "Professional" ? "text-white" : ""
        } text-6xl text-extrabold text-dark-grayish-blue flex items-center`}
      >
        <span className="text-2xl font-black font-montserrat">$</span>
        {cost}
      </h1>
      <ul className="text-sm min-w-full text-center">
        <li
          className={`${
            packageName === "Professional" ? "text-white" : ""
          } text-grayish-blue font-bold min-w-full p-3  border-y`}
        >
          {storage} Storage
        </li>
        <li
          className={`${
            packageName === "Professional" ? "text-white" : ""
          } text-grayish-blue font-bold min-w-full p-3  border-y`}
        >
          {users} Users Allowed
        </li>
        <li
          className={`${
            packageName === "Professional" ? "text-white" : ""
          } text-grayish-blue font-bold min-w-full p-3  border-y`}
        >
          Send Up to {upto} GB
        </li>
      </ul>
      <button
        className={`${
          packageName === "Professional"
            ? "bg-white text-grayish-blue hover:bg-"
            : "bg-gradient-to-r from-light-blue to-medium-blue-purple text-white "
        }   uppercase text-xs  py-3 px-6 rounded-lg min-w-full  transition duration-200 hover:-translate-y-1 hover:scale-105  hover:border-white hover:ring-2 hover:ring-medium-blue-purple hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-medium-blue-purple hover:ring-inset`}
      >
        Learn More
      </button>
    </div>
  );
}

export default PriceCard;
