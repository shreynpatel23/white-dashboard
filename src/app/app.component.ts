  import {
      Component,
      OnInit,
      ViewChild,
      ElementRef
  } from '@angular/core';
  import * as Chart from 'chart.js';

  @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {
      sideBarActive: boolean = false;
      ngOnInit() {
          this.getChart1();
          this.getChart2();
          this.getChart3();
          this.getChart4();
      }
      @ViewChild('myCanvas1') canvasRef1: ElementRef;
      @ViewChild('myCanvas2') canvasRef2: ElementRef;
      @ViewChild('myCanvas3') canvasRef3: ElementRef;
      @ViewChild('myCanvas4') canvasRef4: ElementRef;
      getChart1() {
          let ctx = this.canvasRef1.nativeElement.getContext('2d');
          var barChartHome = new Chart(ctx, {
              type: 'bar',
              options: {
                  scales: {
                      xAxes: [{
                          display: false,
                          barPercentage: 1.19
                      }],
                      yAxes: [{
                          display: false
                      }],
                  },
                  legend: {
                      display: false
                  }
              },
              data: {
                  labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
                  datasets: [{
                      label: "Data Set 1",
                      backgroundColor: [
                          '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe',
                          '#55d8fe',
                          '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe',
                      ],
                      borderColor: [
                          '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe',
                          '#55d8fe', '#55d8fe',
                          '#55d8fe', '#55d8fe', '#55d8fe', '#55d8fe',
                      ],
                      borderWidth: 0.2,
                      data: [95, 75, 10, 90, 60, 30, 18, 35, 80, 70, 35, 15, 20]
                  }]
              }
          });
      }
      getChart2() {
          let ctx = this.canvasRef2.nativeElement.getContext('2d');
          var barChartHome = new Chart(ctx, {
              type: 'bar',
              options: {
                  scales: {
                      xAxes: [{
                          display: false,
                          barPercentage: 1.19
                      }],
                      yAxes: [{
                          display: false
                      }],
                  },
                  legend: {
                      display: false
                  }
              },
              data: {
                  labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
                  datasets: [{
                      label: "Data Set 1",
                      backgroundColor: [
                          '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb',
                          '#a3a0fb',
                          '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb',
                      ],
                      borderColor: [
                          '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb',
                          '#a3a0fb',
                          '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb', '#a3a0fb',
                      ],
                      borderWidth: 0.2,
                      data: [65, 75, 50, 90, 10, 30, 18, 25, 20, 71, 35, 85, 20]
                  }]
              }
          });
      }
      getChart3() {
          let ctx = this.canvasRef3.nativeElement.getContext('2d');
          var barChartHome = new Chart(ctx, {
              type: 'bar',
              options: {
                  scales: {
                      xAxes: [{
                          display: false,
                          barPercentage: 1.19
                      }],
                      yAxes: [{
                          display: false
                      }],
                  },
                  legend: {
                      display: false
                  }
              },
              data: {
                  labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
                  datasets: [{
                      label: "Data Set 1",
                      backgroundColor: [
                          '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0',
                          '#5ee2a0',
                          '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0',

                      ],
                      borderColor: [
                          '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0',
                          '#5ee2a0', '#5ee2a0',
                          '#5ee2a0', '#5ee2a0', '#5ee2a0', '#5ee2a0',

                      ],
                      borderWidth: 0.2,
                      data: [95, 75, 10, 90, 60, 30, 18, 35, 80, 70, 35, 15, 20]
                  }]
              }
          });
      }
      getChart4() {
          let ctx = this.canvasRef4.nativeElement.getContext('2d');
          let myChart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: ["jan", "feb", "mar", "apr", "may", "jun"],
                  datasets: [{
                      data: [2, 5, 3, 4, 3, 5],
                      pointHoverBackgroundColor: [
                          'green'
                      ],
                      backgroundColor: [
                          'rgba(163,161,251,0.5)'
                      ],
                      borderColor: [
                          '#a3a1fb'
                      ],
                      borderWidth: 2
                  }, {

                      data: [3, 5, 3, 2, 5, 1],
                      backgroundColor: [
                          'rgba(84,216,255,0.5)'
                      ],
                      borderColor: [
                          '#54d8ff'
                      ],
                      borderWidth: 3
                  }]
              },
              options: {
                  spanGaps: false,
                  legend: {
                      display: false,
                  }
              }
          });
          let draw = Chart.controllers.line.prototype.draw;
          Chart.controllers.line.prototype.draw = function () {
              draw.apply(this, arguments);
              let _stroke = ctx.stroke;
              ctx.stroke = function () {
                  ctx.save();
                  ctx.shadowColor = '#a3a1fb';
                  ctx.shadowBlur = 100;
                  ctx.shadowOffsetX = 0;
                  ctx.shadowOffsetY = 2;
                  ctx.lineJoin = 'miter';
                  _stroke.apply(this, arguments);
                  ctx.restore();
              }
          };
      }
      onshowCollapse() {
          this.sideBarActive = !this.sideBarActive;
      }
  }