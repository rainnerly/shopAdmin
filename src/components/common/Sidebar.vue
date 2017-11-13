<template>
	<div class="sidebar">
		<!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			<el-radio-button :label="true">展开</el-radio-button>
			<el-radio-button :label="false">收起</el-radio-button>
		</el-radio-group>-->
		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">		
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">商品</span>
				</template>
				<el-menu-item index="1-1">發布商品</el-menu-item>
				<el-menu-item index="1-2">出手中的商品</el-menu-item>
			</el-submenu>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">訂單</span>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="el-icon-setting"></i>
				<span slot="title">促銷</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
//				menu:[{
//					name:"商品",
//					index:"1",
//					icon:"el-icon-location",
//					children:[{
//						name:"發布商品",
//						index:"1-1"
//					},{
//						name:"出售商品",
//						index:"1-2"
//					}]
//				},{
//					name:"訂單",
//					index:"2",
//					icon:"el-icon-menu",
//					children:[]
//				},{
//					name:"促銷",
//					index:"3",
//					icon:"el-icon-setting",
//					children:[]
//				}],					
				
				isCollapse: true
			};
		},
		methods: {
			
		}
	}
</script>

<style>
	.el-menu-vertical-demo{
		background: #4b4b4b;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		/*width: 200px;*/
		min-height: 400px;
		
	}
	.sidebar{
		display: block;
        position: absolute;
        width: 64px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #4b4b4b;
	}
</style>