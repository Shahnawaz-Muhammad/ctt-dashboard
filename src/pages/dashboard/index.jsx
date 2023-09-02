import BarChart from "../../components/charts/barchart";
import PropTypes from "prop-types";
const Dashboard = ({chartData}) => {
  return (
    <div>
    
      <h1 className="text-2xl text-gray-700">Dashboard</h1>
      <div className="grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4">
        <div className="flex flex-col gap-3 col-span-3  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark  py-1 rounded-lg w-fit">
                <h1 className="text-md px-3">Category</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
              <h1 className="text-4xl font-semibold">Owner</h1>

              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark  py-1 rounded-lg w-fit">
                <h1 className="text-md px-2">Status</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
              <h1 className="text-4xl font-semibold text-green-600">Active</h1>
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark  py-1 rounded-lg w-fit">
                <h1 className="text-md px-2">Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-10">
                <h1 className="text-4xl font-semibold">Owner</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 col-span-3  ">
          <h1 className="text-2xl text-gray-700">Dashboard</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark  py-1 rounded-lg w-fit">
                <h1 className="text-md px-2">Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-5">
              <BarChart data={chartData} />

              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark  py-1 rounded-lg w-fit">
                <h1 className="text-md px-2">Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-5">
              <BarChart data={chartData} />

              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <div className="bg-greyDark  py-1 rounded-lg w-fit">
                <h1 className="text-md px-2">Title</h1>
              </div>
              <div className="w-full flex justify-center items-center py-5">
              <BarChart data={chartData} />

              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 lg:row-span-2 h-full w-full lg:flex">
          <div className="p-2 bg-white rounded-lg shadow-lg w-full">
            <div className="bg-greyDark py-1 rounded-lg w-fit">
              <h1 className="text-md px-2">Title</h1>
            </div>
            <div className="w-full flex justify-center items-center py-5">
            <BarChart data={chartData} />

              </div>
          </div>
        </div>
    </div>
    </div>
  );
};
Dashboard.propTypes = {
  chartData: PropTypes.object.isRequired, // Adjust the type according to your specific router library
};
export default Dashboard;
