import BillingStatus from "../billingStatus";
import DoughnutChart from "../doughnutChart";
import PropertyStatus from "../propertyStatus";

const Home = () => {
  const billingStatusData = [
    {
      info: "Payment Methods",
      property: <DoughnutChart className="w-56 h-56" />,
    },
  ];
  return (
    <div className="max-h-[80vh] overflow-y-auto bg-[#f1f5f9] rounded-xl w-full p-4 lg:p-16">
      <div className="grid ">
        <h2 className="text-2xl text-[#3e5b77] text-start font-bold pb-6">
          Property Status
        </h2>
        <div className="grid grid-flow-row lg:grid-flow-col gap-4">
          <div className="row-span-1 col-span-2 text-white">
            <div className="grid gap-y-5">
              <PropertyStatus />
            </div>
          </div>
          <div className="row-span-1 col-span-2 text-white">
            <BillingStatus />
          </div>
          <div className="hidden lg:block row-span-2 bg-white text-white">
            {billingStatusData.map((propertyStatus, index) => (
              <div
                className="grid gap-y-3 bg-white rounded-md p-3"
                key={index}
              >
                <div className="bg-[#f1f5f9] text-[#3e5b77] rounded-md p-2 text-xl w-fit">
                  {propertyStatus.info}
                </div>

                {propertyStatus.property}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
