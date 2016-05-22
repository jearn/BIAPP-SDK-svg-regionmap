# svg-regionmap/standalone
This example shows a SVG map, in which each region is identified by the respective status in traffic light colors.
This out-of-the-box example runs standalone in an up-to-date Browser.

An HTML file loads a SVG image and manipulate them with D3.js.
The color is set for each region on the map conditional.
In this case: green >= 100%; 100% > yellow > 90%; red <= 90%.
For Example the Data is generated using Math.random, in real case the data will be from a datasource.
The colors are set on load or by clicking Button Test. This simulates a data update.

Since this is only a case study to develop a Design Studio extension (SDK component) to do this there, this example might never get finished.

To do:
- Add Text elements to SVG to show percent values
- The percent, sum and average could be an JavaScipt object.
