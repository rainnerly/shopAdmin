<template>
	<!--头部-->
	<div class="header">
		<el-row >
			<el-col :md="1">
				<div class="home_logo">					
					<img src="../../../static/img/home_cms-assets/home_selected__home.png"/>
				</div>
			</el-col>
			<el-col :md="12" >				
				<div class="pull-left">
					<i class="pull-left">
						<img class="img" src="../../../static/img/home_cms-assets/logo_home_cms.png"/>
					</i>
					
					<!--<span class="line"></span>-->				
					<span class="shop_text">商家后臺</span>
				</div>
				
			</el-col>
			
			<el-col :md="10">			
				<div class="user pull-right">
					<el-badge :value="12" class="item">
					  <img  src="../../../static/img/home_cms-assets/mgs3_home.png"/>
					</el-badge>
					
					<i><img  src="../../../static/img/home_cms-assets/admin_home.png"/></i>
					<el-dropdown>
					    <span class="el-dropdown-link">
					        admin<i class="el-icon-arrow-down el-icon--right"></i>
					    </span>
					    <el-dropdown-menu slot="dropdown">
					        <el-dropdown-item>黄金糕</el-dropdown-item>
					        <el-dropdown-item>狮子头</el-dropdown-item>
					        <el-dropdown-item>螺蛳粉</el-dropdown-item>
					        <el-dropdown-item>双皮奶</el-dropdown-item>
					        <el-dropdown-item>蚵仔煎</el-dropdown-item>
					    </el-dropdown-menu>
					</el-dropdown>
				</div>
				
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
		border-bottom: 1px solid #e5e5e5;
		background-color: #fff;
	}
	.home_logo{
		width: 64px;
		height: 70px;
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		background: -webkit-linear-gradient(#20dcdd, #35bae6 , #5d7cf9);
	}
	.home_logo img{
		display: block;
		margin: auto;
	}
	.iconfont{
		font-size: 50px;
		color: #fff;
		font-weight: normal;
	}
	.pull-right{
		float: right;
	}
	.pull-left{
		float: left;
	}
	.pull-left .logo{
		display: inline-block;
    	margin-top: 8px;
    }
	.shop_text{
		line-height:55px;
		height: 50px;
	    width: 100px;
	    display: inline-block;
	    border-left: 1px solid #ccc;
	    margin: 10px 0;
	    color: #666666;
	    font-weight: 700;
	}
	.img{
		display: inline-block;
		margin-top: 8px;
		margin-right: 10px;
	}
	.user{
		margin-top: 10px;
	}
	.item{
		margin-right: 30px;
	}
</style>