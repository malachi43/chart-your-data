
async function getData(dataToAnalyse){
    let x_axis = [];
    let y_axis = [];

    //parsing the csv file to extract the year and temperature for data analysis
     const response = await fetch(dataToAnalyse);
     const data = await response.text();  
    const dataRow = data.split("\n").slice(1);
    
  dataRow.forEach((row)=>{
        const column = row.split(",");
        const year = column[0];
        const temp = column[1];
        x_axis.push(year);
        y_axis.push(temp);
    });

    
  return {x_axis, y_axis}
   
  
}

   
   
    async function chartData(){
        const data = await getData("ZonAnn.Ts+dSST (1).csv");
        const {x_axis, y_axis} = data;
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: x_axis,
                datasets: [{
                    label: 'Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies',
                    data: y_axis,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        
                    borderColor: 'rgba(255, 159, 64, 1)',
                        
                    borderWidth: 1
                }]
            },
            options: {
                fill : true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
chartData();
