<template>
	<div class="release">
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="cart-box bg1">
					<div class="cart-string">
						<span class="icon_text">今天銷售總額</span>
						<span name="number"><h2>$58,500</h2></span>
					</div>
				</div>

			</el-col>
			<el-col :span="6">
				<div class="cart-box bg2">
					<div class="cart-string">
						<span>今天銷售總量</span>
						<span name="number"><h2>330</h2></span>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="cart-box bg3">
					<div class="cart-string">
						<span>今天評論總數</span>
						<span name="number"><h2>160</h2></span>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="cart-box bg4">
					<div class="cart-string">
						<span>發布商品數量</span>
						<span name="number"><h2>1500</h2></span>
					</div>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="5" class="message">
			<el-row>
				<h4>訂單信息</h4>
			</el-row>
			<el-col :span="4" v-for="item in order">
				<div class="order">
					<div class="order-message">
						<span>{{item.name}}</span>
						<span><h2>{{item.num}}</h2></span>
					</div>
				</div>
			</el-col>

		</el-row>

		<el-row>
			<div style="height: 200px;">
				<lineEchart></lineEchart>
			</div>
		</el-row>

		<el-row style="height: 200px;" :gutter="5"> 
			<el-col :span='12'>
				<div style="background-color: #fff;">
					<div class="bgF">
						<div class="charts">
							<div class="pull-left">
								<h4>店铺浏览统计</h4>
							</div>
							<div class="pull-right yearMW">
								<span class="week same">周</span>
								<span class="month same">月</span>
								<span class="year same">年</span>
							</div>
						</div>
					</div>
					<Barchart></Barchart>
					</div>
				
			</el-col>
			<el-col :span='12' >
				<div class="bgF" style="background-color: #fff;height: 300px;">
					<div class="charts">
						<div class="pull-left">
							<h4>系统公告</h4>
						</div>						
					</div>
					<div class="newList" >
						<ul v-for="item in news">
							<li class="newItem">
								<div class="pull-left paddingleft10">
									<img src="" alt="" />
									<a>{{item.value}}</a>
								</div>								
								<span class="pull-right paddingright10">{{item.dateTime}}</span>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import lineEchart from "../../chart/lineEchart";
	import Barchart from "../../chart/Barchart";
	export default {
		components: {
			lineEchart,
			Barchart
		},
		data() {
			return {
				order: [{
					name: "未確認訂單",
					num: 0
				}, {
					name: "待支付訂單",
					num: 2
				}, {
					name: "待發貨訂單",
					num: 2
				}, {
					name: "已成交訂單",
					num: 12
				}, {
					name: "缺貨登記",
					num: 2
				}, {
					name: "退款申請",
					num: 2
				}],

				line: {
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
					},

					grid: {
						left: '1%',
						right: '3%',
						bottom: '3%',
						containLabel: true,
						show: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
						axisLine: {
							lineStyle: {
								color: '#999'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#ddd'
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
						splitLine: {
							lineStyle: {
								color: '#ddd'
							}
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
							stack: '总量',
							areaStyle: {
								normal: {}
							},
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							itemStyle: {
								normal: {
									color: '#e6d385'
								}
							},
							name: '联盟广告',
							type: 'line',
							stack: '总量',
							areaStyle: {
								normal: {}
							},
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							itemStyle: {
								normal: {
									color: '#f4abab'
								}
							},
							name: '视频广告',
							type: 'line',
							stack: '总量',
							areaStyle: {
								normal: {}
							},
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							itemStyle: {
								normal: {
									color: '#a6c733'
								}
							},
							name: '直接访问',
							type: 'line',
							stack: '总量',
							areaStyle: {
								normal: {}
							},
							data: [320, 332, 301, 334, 390, 330, 320]
						},
						{
							itemStyle: {
								normal: {
									color: '#4cb1a7'
								}
							},
							name: '搜索引擎',
							type: 'line',
							stack: '总量',
							label: {
								normal: {
									show: true,
									position: 'top'
								}
							},
							areaStyle: {
								normal: {}
							},
							data: [820, 932, 901, 934, 1290, 1330, 1320]
						}
					]
				},
				news:[{
					icon:"",
					value:"系统升级，帮助你更快捷的管理您的店铺...",
					dateTime:"2017-11-15"
				},{
					icon:"",
					value:"系统升级，帮助你更快捷的管理您的店铺...",
					dateTime:"2017-11-15"
				},{
					icon:"",
					value:"系统升级，帮助你更快捷的管理您的店铺...",
					dateTime:"2017-11-15"
				},{
					icon:"",
					value:"系统升级，帮助你更快捷的管理您的店铺...",
					dateTime:"2017-11-15"
				},{
					icon:"",
					value:"系统升级，帮助你更快捷的管理您的店铺...",
					dateTime:"2017-11-15"
				},{
					icon:"",
					value:"系统升级，帮助你更快捷的管理您的店铺...",
					dateTime:"2017-11-15"
				}]
			}
		}
	}
</script>

<style scoped>
	.newItem{
		height: 40px;
		line-height: 40px;
	}
	li{
		list-style-type: none;
	}
	a{
		text-decoration: none;
	}
	.paddingleft10{
		padding-left:10px ;
	}
	.paddingright10{
		padding-right: 10px;
	}
	.release {
		margin: 0 100px;
		background-color: #f5f5f5;
	}
	
	.cart-box {
		height: 120px;
		text-align: center;
		border-radius: 10px;
	}
	
	.cart-string {
		padding-top: 30px;
		color: #fff;
	}
	
	h2 {
		padding-top: 10px;
	}
	
	.bg1 {
		background: -webkit-linear-gradient(#d4eba8, #b0df9c, #83d08c);
	}
	
	.bg2 {
		background: -webkit-linear-gradient(#afebc6, #99d7ce, #7abcd8);
	}
	
	.bg3 {
		background: -webkit-linear-gradient(#b2daef, #9ac5ec, #75a3e8);
	}
	
	.bg4 {
		background: -webkit-linear-gradient(#f8cadc, #dfa8e2, #c485e8);
	}
	
	.el-row {
		margin: 30px 0;
	}
	
	.message {
		height: 200px;
		background-color: #fff;
		color: #666666;
	}
	
	.message h4 {
		float: left;
		padding: 15px 0;
	}
	
	.message .el-row {
		margin: auto 20px 30px;
		border-bottom: 1px solid #ccc;
	}
	/*柱状图*/
	.charts {
		/*background-color: #fff;*/
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
	}
	.yearMW{
		
		margin-top: 10px;
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 20px;
	}
	
	.bgF {
		/*background-color: #fff;*/
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