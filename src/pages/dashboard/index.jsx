const Dashboard = () => {
  return (
    <div className="w-full py-5 px-10 overflow-auto">
      <h1 className="text-2xl text-gray-700">Dashboard</h1>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="flex flex-col gap-3 col-span-3  ">
          <div className="grid grid-cols-3 gap-5">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark px-3 py-1 rounded-lg">
                <h1>Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
                Owner
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark px-3 py-1 rounded-lg">
                <h1>Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
                Owner
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark px-3 py-1 rounded-lg">
                <h1>Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
                Owner
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 col-span-3  ">
          <h1 className="text-2xl text-gray-700">Dashboard</h1>

          <div className="grid grid-cols-3 gap-5">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark px-3 py-1 rounded-lg">
                <h1>Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
                Owner
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark px-3 py-1 rounded-lg">
                <h1>Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
                Owner
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark px-3 py-1 rounded-lg">
                <h1>Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
                Owner
              </div>
            </div>
          </div>
        </div>
        <div className=" row-span-3 h-full inline-flex">
          <div className="p-2 bg-white rounded-lg shadow-lg w-full">
            <div className="bg-greyDark px-3 py-1 rounded-lg">
              <h1>Title</h1>
            </div>
            Right
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
