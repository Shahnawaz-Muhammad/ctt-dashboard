import BillingStatus from "../billingStatus";
import PropertyStatus from "../propertyStatus";

const Home = () => {
  const propertyStatusData = [
    {
      info: "Category",
      property: "Owner",
    },
  ];
  return (
    <div className="grid grid-flow-col ">
      <div className="row-span-1">
        {" "}
        <div className="grid gap-y-5 p-10">
          <h2 className="text-2xl text-start font-bold">Billing Status</h2>
          <PropertyStatus />
        </div>
      </div>
      <div className="row-span-1">
        {" "}
        <div className="grid gap-y-5 p-10">
          <h2 className="text-2xl text-start font-bold">Property Status</h2>
          <BillingStatus />
        </div>
      </div>
      <div className="row-span-2 bg-white p-10">
        {" "}
        {propertyStatusData.map((propertyStatus, index) => (
          <div className="grid gap-3 bg-white rounded-md p-3" key={index}>
            <div className="bg-[#f1f5f9] rounded-md p-2 text-xl w-fit">
              {propertyStatus.info}
            </div>
            <h3
              className={`text-xl font-semibold ${
                propertyStatus.property === "Active"
                  ? "text-[#48bd3d]"
                  : "text-black"
              }`}
            >
              {propertyStatus.property}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
