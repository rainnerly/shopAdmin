<template>
	<!--头部-->
	<div class="header">
		<el-row :gutter="10">
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="home_logo"><i class="icon iconfont icon-shouye"></i></div>
			</el-col>
			<el-col :xs="2" :sm="4" :md="6" :lg="7" :xl="6">
				<div class="tung_logo">
					<i></i>
					<span class="">商家后臺</span>
				</div>
				
			</el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class=""></div>
			</el-col>
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="icon_email"></div>
				<div class="icon_user"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped">
	.header {
		position: fixed;
		box-sizing: border-box;
		width: 100%;
		height: 70px;
		z-index: 2;
		border-bottom: 1px solid #ccc;
		background-color: #27d2e0;
	}
	.home_logo{
		width: 64px;
		height: 70px;
		background: #27d2e0;
	}
	.iconfont{
		font-size: 50px;
		color: #fff;
		font-weight: normal;
	}
</style>