# ChartData

This program chart your data in graphical format using the cartesian co-ordinates ( x , y )


## Installing the project
Clone the repository to your local machine by running the command, `git clone https://github.com/malachi43/chart-your-data.git` in your CLI (terminal). For this command to work you must have git installed. To download click [here](https://git-scm.com/downloads).

## How it works
```js
1. Prepare the csv file to be evaluted.
2. Create an object that has the following properties(the order of the object properties matter):
-The property valueForX: This specifies the column to be used on the x-axis.
-The property valueForY: This specifies the column to be used on the y-axis.
```

## Customization

If you cd into the public directory and open the `index.js` file, look for the `charData()` function within the scope of the function you would find the object, `const myChart = new Chart` look for the `type` property that has the value of `line`. Alternating the value from `line` to `bar` changes the graphical representation of the data to either a `line graph` or a `bar chart`. The choice of which to use lies on the parameters to be analyzed.

chart📈 that data.
