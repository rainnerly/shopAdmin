<template>
	<div style="width:50vw;">
		<el-form ref="form" :model="form" label-width="150px">
			<el-form-item label="商品名称：">
				<el-input v-model="form.name" placeholder="请输入30字以内的商品名称"></el-input>
			</el-form-item>
			<el-form-item label="商品品牌：">
				<el-col :span="6">
					<el-select v-model="form.region">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-col>
			</el-form-item>
			<el-form-item label="商品类型：">
				<el-col :span="4">
					<el-radio-group v-model="form.resource">
						<el-radio label="全新"></el-radio>
						<el-radio label="二手"></el-radio>
					</el-radio-group>
				</el-col>
			</el-form-item>
			<el-form-item label="商品简介：">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item label="产品价格：">
				<el-col :span="8">
					<el-input v-model="form.productPrice"></el-input>
				</el-col>
				<el-col :span="1">元</el-col>
			</el-form-item>
			<el-form-item label="市场价：" label-suffix="1111">
				<el-col :span="8">
					<el-input v-model="form.price"></el-input>
				</el-col>
				<el-col :span="1">元</el-col>
			</el-form-item>
			<el-form-item label="成本价：">
				<el-col :span="8">
					<el-input v-model="form.oldPrice"></el-input>
				</el-col>
				<el-col :span="1">元</el-col>
			</el-form-item>
			<el-form-item label="折扣：">
				<el-col :span="8">
					<el-input v-model="form.account"></el-input>
				</el-col>
				<el-col :span="1">%</el-col>
			</el-form-item>
			<el-form-item label="商品库存：">
				<el-col :span="8">
					<el-input v-model="form.num"></el-input>
				</el-col>

			</el-form-item>
			<el-form-item label="库存预警值：">
				<el-col :span="8">
					<el-input v-model="form.danger"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="商家货号：">
				<el-col :span="12">
					<el-input v-model="form.goods"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="商品条形码：">
				<el-col :span="12">
					<el-input v-model="form.barCode"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="商品图片：">
				<el-col :span="3">
					<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-col>
			</el-form-item>
			<el-form-item label="商品视频：">
				<el-col :span="3">
					<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-col>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: '',
					productPrice: "",
					oldPrice: "",
					account: "",
					num: "",
					danger: "",
					goods: "",
					barCode: ""					
				}
			}
		},
		methods: {
			onSubmit() {
				//				console.log('submit!');
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}

		}
	}
</script>

<style>
	.el-form-item {
		margin-bottom: 10px;
	}
	
	.el-input__inner {
		height: 35px;
	}
	
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
	
	.avatar {
		width: 100px;
		height: 100px;
		display: block;
	}
	
</style>