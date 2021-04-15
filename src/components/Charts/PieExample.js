import { Pie } from './BaseCharts'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['Năm nhất', 'Năm hai', 'Năm ba', 'Năm tư', 'Năm 5'],
      datasets: [
        {
          backgroundColor: [
            '#36a2eb',
            '#4bc0c0',
            '#ff6384',
            '#ffcd56'
          ],
          data: [40, 20, 80, 10, 5]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}