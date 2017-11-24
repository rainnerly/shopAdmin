<template>
	<div class="c-charts">
		<IEcharts :option="line"></IEcharts >
	</div>
</template>
<script type="text/javascript">
	import IEcharts from 'vue-echarts-v3';
	export default {
		components: {
			IEcharts
		},
		data: () => ({}),
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
		height: 400px;
		width: 100%;
	}
</style>

	/*var go_home='www.<?php echo config('main_domain');?>';*/