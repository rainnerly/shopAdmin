<template>
	<el-container>
		<el-header>
			<v-head></v-head>
		</el-header>
		<el-container>
			<el-aside width="65px">
				<v-sidebar></v-sidebar>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import vHead from './Header.vue';
	import vSidebar from './Sidebar.vue';
	export default {
		components: {
			vHead,
			vSidebar
		}
	}
</script>

<style>
	.el-submenu__title{
		height: 90px !important;
	}
	/*.containerRight {
		margin-top: 70px;
		display: block;
        position: absolute;
        right: 0;
        left: 64px;
        top: 70px;
        bottom:0;
        height: auto;
        background-color: #f5f5f5;
	}*/
	.el-header{
		padding: 0;
	}
	.el-main{
		background-color: #f5f5f5;
	}
</style>