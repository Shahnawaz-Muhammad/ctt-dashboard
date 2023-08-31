const PropertyStatus = () => {
  const propertyStatusData = [
    {
      info: "Category",
      property: "Owner",
    },
    {
      info: "Status",
      property: "Active",
    },
    {
      info: "Status",
      property: "Active",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
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
  );
};

export default PropertyStatus;
