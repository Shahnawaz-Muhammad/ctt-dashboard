import DoughnutChart from "../doughnutChart";

const BillingStatus = () => {
  const billingStatusData = [
    {
      info: "Payment Methods",
      property: <DoughnutChart />,
    },
    {
      info: "Payment Methods",
      property: <DoughnutChart />,
    },
    {
      info: "Payment Methods",
      property: <DoughnutChart />,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {billingStatusData.map((propertyStatus, index) => (
        <div className="grid gap-3 bg-white rounded-md p-3" key={index}>
          <div className="bg-[#f1f5f9] rounded-md p-2 text-xl w-fit">
            {propertyStatus.info}
          </div>

          {propertyStatus.property}
        </div>
      ))}
    </div>
  );
};

export default BillingStatus;
