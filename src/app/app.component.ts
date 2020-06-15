import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('main', {static: true}) protected chartContainer: ElementRef;
  title = 'echarts-e2e-example';

  ngAfterViewInit(): void {
    setTimeout(_ => {
      const option = {
        title: {
          text: 'ECharts entry example'
        },
        tooltip: {},
        legend: {
          data: ['Sales']
        },
        xAxis: {
          data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
        },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };

      const myChart = echarts.init(this.chartContainer.nativeElement, '', {renderer: 'svg'});
      myChart.setOption(option);
    });
  }


}
