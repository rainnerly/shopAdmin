<template>
	<div class="onSale">
		<el-row style="height:80px;">
			<el-col :span="2">
				<div class="release">
					<div><span>可发布</span></div>
					<div><span class="orange fontsize20">180</span></div>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="lineHeight">总厨窗：<span class="orange">300</span>个</div>
				<div class="lineHeight">已发布：<span class="orange">80</span>个</div>
			</el-col>
			<el-col :span="18">
				<div style="line-height: 80px;">
					老版本发布于2017年3月31日开始逐个类目下线，下先后当前类目不再支持切回老版本发布 <a class="blue"> 查看详情>></a>
				</div>
			</el-col>
		</el-row>
		<el-row class="borderGreen">
			<el-col :span="2" :md="3">
				您选择的类目：
			</el-col>
			<el-col :span="3" :md="4">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item>泵车</el-breadcrumb-item>
					<el-breadcrumb-item>泵车配件</el-breadcrumb-item>
					<el-breadcrumb-item>液压器</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
			<el-col :span="1">
				<a class="blue">修改</a>
			</el-col>

		</el-row>
		<el-row>
			<el-col :span="2"  class="borderGreen" :md="3">
				<h4>商品基本信息</h4></el-col>
			<el-col>
				<goodsMessage></goodsMessage>
			</el-col>

		</el-row>
		<el-row>
			<el-col :span="2" class="borderGreen" :md="3">
				<h4>商品基本详情</h4></el-col>
			<el-col>
				<el-col :span="2">
					商品属性：
				</el-col>
				<el-col :span="19">
					<goodsDetail ></goodsDetail>
				</el-col>
			</el-col>
			<el-col :span="2">
				商品描述：
			</el-col>
			<el-col :span="20">
				<el-col :span="2">
					<i></i>
					<span>电脑版</span>
				</el-col>
				<el-col :span="2">
					<i></i>
					<span>手机版</span>
				</el-col>
				<el-col>
					<el-col :span="16">
						<editor></editor>
					</el-col>

				</el-col>
			</el-col>
			<el-col>
				<el-col :span="2">关联板块：</el-col>
				<el-col :span="16">
					<el-form ref="form" :inline="true" label-width="90px" :model="form">
						<el-col :span="7">
							<el-form-item label="顶部板式：">
								<el-select v-model="form.topStyle">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="7">
							<el-form-item label="顶部板式：">
								<el-select v-model="form.bottomStyle">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

					</el-form>
				</el-col>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="2" class="borderGreen" :md="3">
				<h4>商品物流信息</h4></el-col>
			<el-col>
				<el-form ref="form" label-width="100px" :model="form">
					<el-form-item label="所在地：">
						<el-col :span="8">
							<el-select v-model="form.province">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
							<el-select v-model="form.city">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-col>
					</el-form-item>
					<el-form-item label="商品类型：">
						<el-col :span="5">
							<el-radio-group v-model="form.goodType">
								<el-radio label="固定运费"></el-radio>
								<el-radio label="选择区域模版"></el-radio>
							</el-radio-group>
						</el-col>
						<el-col>
							<el-col :span="3" :push="1">
								<el-input v-model="form.productPrice"></el-input>
							</el-col>
							<el-col :span="3">元</el-col>
						</el-col>
						<el-col :pull="9">
							运费设置为0元，前台商品将显示为免运费。
						</el-col>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="2" :md="3" class="borderGreen">
				<h4>发票信息</h4>
			</el-col>
			<el-col>
				<el-form ref="form" label-width="100px" :model="form">
					<el-form-item label="是否开发票：">
						<el-col :span="2">
							<el-radio-group v-model="form.goodType">
								<el-radio label="是"></el-radio>
								<el-radio label="否"></el-radio>
							</el-radio-group>
						</el-col>
						<el-col>
							<el-col :span="2">
								<el-checkbox-group v-model="form.invoive">
									<el-checkbox label="增值税发票" name="invoive"></el-checkbox>
								</el-checkbox-group>
							</el-col>
						</el-col>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="2" :md="3" class="borderGreen">
				<h4>其他信息</h4>
			</el-col>
			<el-col>
				<el-form ref="form" label-width="100px" :model="form">
					<el-form-item label="本店分类：">
						<el-col :span="4" >
							<el-button type="info"  class="pull-left">+新增分类</el-button>
						</el-col>						
					</el-form-item>
					<el-form-item label="商品发布：">
						<el-col>
							<el-col :span="3">
								<el-radio-group v-model="form.release">
									<el-radio label="立即发布"></el-radio>
									<el-radio label="定时发布"></el-radio>
								</el-radio-group>
							</el-col>
							<el-col>
								<el-col :span="3">
									<el-select v-model="form.releaseTime">
										<el-option label="2017-11-11" value="shanghai"></el-option>
										<el-option label="2017-11-12" value="beijing"></el-option>
									</el-select>
									<el-select v-model="form.hours">
										<el-option label="8.30" value="shanghai"></el-option>
										<el-option label="9.30" value="beijing"></el-option>
									</el-select>
								</el-col>
							</el-col>
						</el-col>
					</el-form-item>
					<el-form-item label="商品推广：">
						<el-col>
							<el-col :span="2" :md="2">
								<el-radio-group v-model="form.qus">
									<el-radio label="是"></el-radio>
									<el-radio label="否"></el-radio>
								</el-radio-group>
							</el-col>
							<el-col :span="4" >
								（被推广的产品會显示在店铺首页）
							</el-col>	
						</el-col>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
		<div>
			<el-button type="info">保存草稿</el-button>
			<el-button type="primary">确认</el-button>
		</div>
	</div>
</template>

<script>
	import goodsMessage from "../../forms/Form"
	import goodsDetail from "../../forms/GoodsDetail"
	import editor from "../../forms/editor"
	export default {
		components: {
			goodsMessage,
			goodsDetail,
			editor
		},
		data() {
			return {
				form: {
					topStyle: "",
					bottomStyle: "",
					province: "",
					city: "",
					goodType: "",
					productPrice: "",
					invoive: "",
					release:"",
					releaseTime:"",
					hours:"",
					qus:[]
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.onSale{
		padding-top: 5px;
		background-color: #fff;
	}
	.el-row {
		margin: 30px 20px;
		border: 1px solid #E5E5E5;
	}
	.orange{
		color: #fa824c;
	}
	.blue{
		color: #2667ff;
	}
	.release{
		height: 60px;
		margin-top: 10px;
		line-height: 30px;
		border-right:1px solid #e5e5e5;
	}
	.fontsize20{
		font-weight: 700;
		font-size:20px;
	}
	.lineHeight{
		line-height: 40px;
	}
	.el-breadcrumb{
		line-height: 50px;
	}
	.borderGreen{
		height: 50px;
		line-height: 50px;
		border-left: 5px solid #9fd356;
	}
	h4{
		text-align: left;
    	padding-left: 20px;
	}
</style>