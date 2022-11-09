const csvOptions = { 
    valueForX: 1,
    valueForY: 15
}
   
    async function chartData(){
        const data = await parseCsv(csvOptions, "ZonAnn.Ts+dSST (1).csv");
        const {graphX, graphY} = data;
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: graphX,
                datasets: [{
                    label: 'Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies',
                    data: graphY,
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




async function parseCsv(csvParams, csvFileToParse){

const graphX = [];
const graphY = [];

//we are subtracting one from the values because an array is zero indexed, so that any number chosen by the user will correspond to the given index.
const xPlane = (csvParams.valueForX)-1;
const yPlane = (csvParams.valueForY)-1;

if(xPlane === -1 || yPlane === -1){
    return;
}

const response = await fetch(csvFileToParse);
const data = await response.text(); 
const dataRow = data.split("\n");
const header = dataRow[0].split(",")
const csvArray = dataRow.slice(1);

const newArray = csvArray.map((row)=>{
const eachRow = row.split(",")
const newx = eachRow[xPlane];
const newy = eachRow[yPlane];
    
    graphX.push(newx);
    graphY.push(newy)
   
     
  })
  

  return {graphX, graphY}
}
