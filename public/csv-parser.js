

const csvOptions = { 
    valueForX: 5,
    valueForY: 15
}

const file = `Year,Glob,NHem,SHem,24N-90N,24S-24N,90S-24S,64N-90N,44N-64N,24N-44N,EQU-24N,24S-EQU,44S-24S,64S-44S,90S-64S
1880,-.16,-.27,-.05,-.36,-.12,-.02,-.79,-.48,-.26,-.13,-.11,-.05,.05,.66
1881,-.08,-.16,.00,-.32,.11,-.08,-.88,-.43,-.18,.11,.10,-.06,-.07,.58
1882,-.10,-.20,-.01,-.29,-.04,.00,-1.38,-.25,-.14,-.03,-.05,.00,.04,.61
1883,-.17,-.27,-.07,-.33,-.16,-.02,-.16,-.53,-.26,-.17,-.15,-.04,.07,.48
1884,-.28,-.42,-.15,-.59,-.14,-.14,-1.28,-.62,-.47,-.12,-.17,-.20,-.02,.63`



async function parseCsv(csvParams, csvFileToParse){

const graphX = [];
const graphY = [];

//we are subtracting one from the values because an array is zero based, so that any number chosen by the user will correspond to a given index.
const xPlane = (csvParams.valueForX)-1;
const yPlane = (csvParams.valueForY)-1;

if(xPlane === -1 || yPlane === -1){
    return;
}


const dataRow = csvFileToParse.split("\n");
const header = dataRow[0].split(",")
const csvArray = dataRow.slice(1);

const newArray = csvArray.map((row)=>{
const eachRow = row.split(",")
const newx = eachRow[xPlane];
const newy = eachRow[yPlane];
    
    graphX.push(newx);
    graphY.push(newy)
   
     
  })
  
  console.log(`graphx length: ${graphX.length}  graphY length: ${graphY.length}`)

  return {graphX, graphY}
}

console.log(parseCsv(csvOptions, file));
