import "./ChartBar.css";

const ChartBar = (props) => {
  // 1. set let
  let barFillHeight = "0%";
  // 2. culc the value CONDITIONALLY
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  // 3. return XM, apply style=''
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
