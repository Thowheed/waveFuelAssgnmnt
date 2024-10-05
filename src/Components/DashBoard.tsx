import "./DashBoard.scss";
import DropDown from "./dropdown";

const DashBoardComponent = (props: any) => {
    const {setCurrentState} = props;
  return (
    <div className="weather-container">
      <div className="weather-dashboard-text"> Weather Dashboard</div>
      <DropDown setCurrentState={setCurrentState}/>
    </div>
  );
};

export default DashBoardComponent;
