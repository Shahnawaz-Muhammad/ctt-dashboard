import DoughnutChart from "../doughnutChart";

const BillingStatus = () => {
  const billingStatusData = [
    {
      info: "Payment Methods",
      property: <DoughnutChart className="w-56 h-56" />,
    },
    {
      info: "Payment Methods",
      property: <DoughnutChart className="w-56 h-56" />,
    },
    {
      info: "Payment Methods",
      property: <DoughnutChart className="w-56 h-56" />,
    },
  ];
  return (
    <div>
    <h2 className="text-2xl text-[#3e5b77] text-start font-bold pb-6">Billing Status</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {billingStatusData.map((propertyStatus, index) => (
        <div className="grid gap-3 bg-white rounded-md p-3" key={index}>
          <div className="bg-[#f1f5f9] text-[#3e5b77] rounded-md p-2 text-xl w-fit">
            {propertyStatus.info}
          </div>

          {propertyStatus.property}
        </div>
      ))}
      <div className="lg:hidden">
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
    </div></div>
  );
};

export default BillingStatus;
