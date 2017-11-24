<template>
	<div class="c-charts">
		<IEcharts :option="bar"></IEcharts>
	</div>

</template>

<script>
	import IEcharts from 'vue-echarts-v3';
	export default {
		components: {
			IEcharts
		},
		data: () => ({
			bar: {
				color: ['#3398DB'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisTick: {
						alignWithLabel: true
					}
				}],
				yAxis: [{
					type: 'value',
					name:"万次"
				}],
				series: [{
					name: '直接访问',
					type: 'bar',
					barWidth: '60%',
					data: [10, 52, 200, 334, 390, 330, 220]
				}]
			}
		}),
		methods: {

		}
	}
</script>

<style scoped>
	.el-col {
		margin-bottom: 16px;
	}
	
	.material-icons {
		font-size: 80px;
		color: #ddd;
	}
	
	.cart-string {
		height: 100px;
		padding-top: 10px;
		font-size: 1.1rem;
	}
	
	.c-charts {
		height: 250px;
		width: 100%;
	}
	
</style>