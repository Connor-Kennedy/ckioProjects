import { Component } from '@angular/core';

@Component({
  selector: 'app-chartjschart',
  template: `
  <div class="container">
    <canvas id="myChart"></canvas>
  </div>
  <script>
    let myChart = document.getElementById("myChart").getContext("2d");

    let exampleChart = new Chart(myChart, {
      type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Greater London', 'West Midlands', 'Greater Manchester', 'West Yorkshire', 'Merseyside', 'South Yorkshire', 'Tyne & Wear'],
        datasets:[{
          label:'Population'
          data:[
            8,173,941,  
            2,736,460,
            2,682,528,
            2,226,058,
            1,381,189,
            1,343,601,
            1,104,825
          ]
        }],
      },
      options:{}

    });
  </script>
  `,
  styles: [
  ]
})
export class ChartjschartComponent {

  
  

}
