<template>
	<el-row :gutter="6">
		<el-col :span="12">
			<div class="bgF">
				<div class="charts">
					<div class="pull-left">
						<h4>销售统计</h4>
					</div>
					<div class="pull-right">
						<span class="week same">周</span>
						<span class="month same">月</span>
						<span class="year same">年</span>
					</div>
				</div>
			</div>

			<div class="c-charts">
				<IEcharts :option="chart(firstEchart)"></IEcharts>
			</div>
		</el-col>
		<el-col :span="12">
			<div class="bgF">
				<div class="charts">
					<div class="pull-left">
						<h4>订单统计</h4>
					</div>
					<div class="pull-right">
						<span class="week same">周</span>
						<span class="month same">月</span>
						<span class="year same">年</span>
					</div>
				</div>
			</div>

			<div class="c-charts">
				<IEcharts :option="chart(secondEchart)"></IEcharts>
			</div>
		</el-col>
	</el-row>

</template>

<script>
	import IEcharts from 'vue-echarts-v3';
	export default {
		components: {
			IEcharts
		},
		data: () => ({
			firstEchart: {
				subtext: "万元",
				xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
				yData: ["1500", "2000", "2200", "2000", "1000", "4000", "3300"]
			},
			secondEchart: {
				subtext: "万个",
				xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				yData: ["100", "200", "150", "300", "200", "200", "500", "440", "222", "333", "100", "400"]
			}
		}),
		methods: {
			chart: function(opt) {
				opt = {
					subtext: opt.subtext,
					xData: opt.xData,
					yData: opt.yData,
				}
				var line = {
					title: {
						subtext: ""
					},
					tooltip: {
						trigger: 'axis'
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: opt.xData,
						axisLine: {
							lineStyle: {
								color: '#999'
							}
						}
					}],
					yAxis: [{
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#999'
							}
						},
						name: opt.subtext,
						splitLine: {
							show: false
						}
					}],
					series: [{
						itemStyle: {
							normal: {
								color: '#96d6e8'
							}
						},
						name: '邮件营销',
						type: 'line',
						smooth: true,
						stack: '总量',
						areaStyle: {
							normal: {}
						},
						data: opt.yData
					}]
				}
				return line;
			}

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
		background-color: #fff;
	}
	
	.charts {
		background-color: #fff;
		height: 50px;
		margin: 0 10px;
		border-bottom: 1px solid #ccc;
		color: #666;
	}
	
	h4 {
		padding: 15px;
	}
	
	.pull-left {
		float: left;
	}
	
	.pull-right {
		float: right;
		margin-top: 10px;
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 20px;
	}
	
	.bgF {
		background-color: #fff;
	}
	.same{
		line-height: 30px;
		display: inline-block;
		height: 30px;
		width: 40px;
		text-align: center;		
	}
	.month{
		border-left:1px solid #ccc;
		border-right:1px solid #ccc;
	}	
</style>