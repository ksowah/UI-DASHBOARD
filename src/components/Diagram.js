import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import { Chart, registerables, ArcElement } from "chart.js";


Chart.register(...registerables);
Chart.register(ArcElement);

const chartData = {
    
    datasets : [{
        label : 'Storage',
        data : [300, 50, 100, 72],
        backgroundColor: [
            'rgb(90, 53, 53)',
            'rgb(172, 114, 199)',
            'rgb(85, 158, 118)',
            'rgba(235, 162, 114, 0.781',
          ],
    }],
}


function Diagram() {
    return (
        <div>
             <Doughnut 
                    data={chartData}
                    options={{
                        responsive: true
                    }}
                />
        </div>
    )
}

export default Diagram
