import PriceCard from "./PriceCard";
function PriceCardList({ packages, setmyPackages }) {
  return (
    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
      {packages.map((packge, index) => (
        <PriceCard
          packageName={packge.packageName}
          cost={packge.cost}
          storage={packge.storage}
          users={packge.users}
          upto={packge.upto}
          key={index}
          setmyPackages={setmyPackages}
        />
      ))}
    </div>
  );
}

export default PriceCardList;
