// import BarChart from "../../components/charts/barchart";
// import PropTypes from "prop-types";

import BarChart from "../../components/charts/barchart";

// import PieChart from "../../components/charts/piechart";
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl text-gray-700 py-2">Dashboard</h1>
      <div className="grid grid-cols-2">
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;


