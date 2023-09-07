import BarChart from "../../components/charts/barchart";
import PropTypes from "prop-types";
import PieChart from "../../components/charts/piechart";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
const Dashboard = () => {
  const {enabled} = useContext(ThemeContext)
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full ">
          <div className="flex flex-col gap-3 col-span-3 mt-3 ">
            <div className="w-full flex flex-col lg:flex-row gap-5 ">
              <div className={`${enabled ? "bg-slate-300" :"bg-white"} p-2 rounded-lg shadow-lg w-full lg:w-1/2`}>
                {/* <div className="w-full flex justify-center items-center h-full"> */}
                  <BarChart />
                {/* </div> */}
              </div>
              <div className={`${enabled ? "bg-slate-300" :"bg-white"} p-2 rounded-lg shadow-lg w-full lg:w-1/2`}>
                {/* <div className="w-full flex justify-center items-center h-full"> */}
                  <PieChart  />
                {/* </div> */}
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
Dashboard.propTypes = {
  chartData: PropTypes.object.isRequired, // Adjust the type according to your specific router library
  pieChartData: PropTypes.object.isRequired,
};
export default Dashboard;
