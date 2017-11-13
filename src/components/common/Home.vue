<template>
	<div class="wrapper">
		<v-head></v-head>
		<v-sidebar></v-sidebar>

		<div class="content">
			<transition name="move" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
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
	.content{
		display: block;
        position: absolute;
        /*width: 64px;*/
        left: 64px;
        top: 70px;
        bottom:0;
        /*background: #4b4b4b;*/
	}
</style>