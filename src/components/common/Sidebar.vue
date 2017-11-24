<template>
	<div class="sidebar">
		
		<el-menu default-active="1-1" background-color="#4b4b4b" 
			active-text-color="#9fd356" class="el-menu-vertical-demo"
			:collapse="isCollapse" router>
			<template v-for="(item,$index,$event) in menu">
				<template v-if="item.children.length">
					<div v-on:mouseover="mouseover(item)" v-on:mouseout="mouseover(item)" class="hoverText">
						<el-submenu :index="item.index" >
							<template slot="title">
								<i>
									<img :src="item.icon"/>
								</i>
								<i class="icon_text">
									{{item.name}}	
								</i>
								<span slot="title">{{item.name}}</span>
							</template>
							<el-menu-item-group class="subtest">
								<el-menu-item v-for="subItem in item.children" :index="subItem.index">{{subItem.name}}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</div>
				</template>
				<template v-else>
					<div v-on:mouseover="mouseover(item)" v-on:mouseout="mouseover(item)" class="hoverText">
						<el-menu-item :index="item.index">
							<i class="icon_img">
								<img :src="item.icon" class="imgURL"/>
							</i>
							<i class="icon_text">
								{{item.name}}	
							</i>
							<span slot="title">{{item.name}}</span>
						</el-menu-item>
					</div>
				</template>

			</template>

		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hoverSwitch: false,
				menu: [{
					name: "商品",
					index: "release",
					icon: "./static/img/home_cms-assets/goods_home_cms.png",
					iconHover: "./static/img/home_cms-assets/goods_selected_home_cms.png",
					children: [{
						name: "發布商品",
						index: "release"
					}, {
						name: "出售中的商品",
						index: "onsale"
					}, {
						name: "倉庫中的商品",
						index: "release"
					}, {
						name: "到賬通知",
						index: "onsale"
					}, {
						name: "關聯板塊",
						index: "release"
					}, {
						name: "商品規格",
						index: "release"
					}, {
						name: "圖片空間",
						index: "release"
					}]
				}, {
					name: "訂單",
					index: "order",
					icon: "./static/img/home_cms-assets/order_home_cms.png",
					iconHover: "./static/img/home_cms-assets/order_selected_home_cms.png",
					children: []
				}, {
					name: "促銷",
					index: "3",
					icon: "./static/img/home_cms-assets/account_home_cms.png",
					iconHover: "./static/img/home_cms-assets/account_selected_home_cms.png",
					children: []
				}, {
					name: "店鋪",
					index: "4",
					icon: "./static/img/home_cms-assets/shop_home_cms.png",
					iconHover: "./static/img/home_cms-assets/shop_selected_home_cms.png",
					children: []
				}, {
					name: "售后",
					index: "5",
					icon: "./static/img/home_cms-assets/service_home_cms.png",
					iconHover: "./static/img/home_cms-assets/service_selected_home_cms.png",
					children: []
				}, {
					name: "統計",
					index: "6",
					icon: "./static/img/home_cms-assets/statistics_home_cms.png",
					iconHover: "./static/img/home_cms-assets/statistics_selected_home_cms.png",
					children: []
				}, {
					name: "消息",
					index: "7",
					icon: "./static/img/home_cms-assets/msg_home_cms.png",
					iconHover: "./static/img/home_cms-assets/msg_selected_home_cms.png",
					children: []
				}, {
					name: "賬號",
					index: "8",
					iconHover: "./static/img/home_cms-assets/account_selected_home_cms.png",
					icon: "./static/img/home_cms-assets/account_home_cms.png",
					children: []
				}, {
					name: "分銷",
					index: "9",
					icon: "./static/img/home_cms-assets/distribution_home_cms.png",
					iconHover: "./static/img/home_cms-assets/distribution_selected_home_cms.png",
					children: []
				}],
				isCollapse: true
			};
		},
		methods: {			
			mouseover(item) {
				[item.icon, item.iconHover] = [item.iconHover, item.icon];
			},
		}
	}
</script>

<style scoped="scoped">
	.hoverText:hover .icon_text{
		color:#9fd356;
	}
	.subtest .el-menu-item {
		background-color: #f5f5f5 !important;
	}
	
	.sidebar .subtest .el-menu-item-group__title {
		padding: 0;
	}
	
	.subtest {
		background-color: #f5f5f5 !important;
	}
	
	.subtest .el-menu-item:hover {
		background-color: #e5e5e5 !important;
	}
	
	.el-submenu:hover {
		background-color: rgb(60, 60, 60);
	}
	
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		min-height: 400px;
	}
	
	.sidebar {
		display: block;
		position: fixed;
		width: 64px;
		left: 0;
		top: 70px;
		bottom: 0;
		background: #4b4b4b;
		z-index: 5;
	}
	
	.el-menu .el-submenu,
	.sidebar .el-submenu__title {
		height: 90px;
	}
	
	.el-menu .el-menu-item {
		height: 90px;
	}
	
	.icon_img {
		display: block;
	}
	
	.icon_text {
		display: block;
		margin-top: -20px;
		color: #fff;
		font-style: normal;
	}
	
	.el-menu .el-menu-item:hover,
	.el-menu .el-submenu:hover {
		color: #666;
	}
	
	.el-menu-item-group .el-menu-item {
		height: 50px;
	}
</style>