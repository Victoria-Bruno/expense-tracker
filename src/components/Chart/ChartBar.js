import './ChartBar.css'

//Receiving the chart data from Chart 
const ChartBar = (props) => {
    let barFillHeight = '0%';

    //Why the condition? If we filter per year, we might not have entries for a year
    if (props.maxValue > 0) {
        //the percentage the bar should be filled
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; 
    }

return (
    <div className='chart-bar'>
    <div className='chart-bar__inner'>
    <div 
        className='chart-bar__fill' 
        style={{height: barFillHeight}}></div>
</div>
<div className="chart-bar__label">{props.label}</div>
</div>)
}

export default ChartBar;