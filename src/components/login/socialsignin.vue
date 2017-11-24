<template>
  <div class="social-signup-container">
    <div class="sign-btn" @click="wechatHandleClick('wechat')">
      <span class="wx-svg-container"><icon-svg icon-class="wechat" class="icon"></icon-svg></span> 微信
    </div>
    <div class="sign-btn" @click="tencentHandleClick('tencent')">
      <span class="qq-svg-container"><icon-svg icon-class="qq" class="icon"></icon-svg></span> QQ
    </div>
</div>

<script>
	import openWindow from "@Login/openWindow"
	
	export default{
	}
</script>

<style>
</style>