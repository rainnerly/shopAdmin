<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-col :span="12">
				<el-form-item label="产地：">
					<el-col :span="8" type="flex">
						<el-select v-model="form.region">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-col>					
				</el-form-item>
				<el-form-item label="产地：">
					<el-col :span="8">
						<el-select v-model="form.region">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-col>					
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="材质：">
					<el-col :span="8">
						<el-select v-model="form.region">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-col>
				</el-form-item>
				<el-form-item label="材质：">
					<el-col :span="8">
						<el-select v-model="form.region">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-col>
				</el-form-item>
			</el-col>			
			<el-form-item label="颜色：" prop="type">
				<el-col :span="6" :sm= "12" type="flex" >
					<el-checkbox-group v-model="form.type"  class="pull-left">
						<el-checkbox label="黑色" name="type"></el-checkbox>
						<el-checkbox label="白色" name="type"></el-checkbox>
						<el-checkbox label="黄色" name="type"></el-checkbox>
						<el-checkbox label="绿色" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-col>
				<el-col>
					<el-col :span="2" :md="3"  class="pull-left">
						<el-button type="info">+自定义添加</el-button>
					</el-col>					
				</el-col>				
			</el-form-item>			
			<el-form-item label="尺寸：" prop="type">
				<el-col :span="3" :md="6">
					<el-checkbox-group v-model="form.type"  class="pull-left">
						<el-checkbox label="S" name="type"></el-checkbox>
						<el-checkbox label="M" name="type"></el-checkbox>
						<el-checkbox label="L" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-col>
				<el-col>
					<el-col :span="2" :md="3">
						<el-button type="info">+自定义添加</el-button>
					</el-col>	
				</el-col>							
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					name:"",
					delivery:"",
					type:[],
					resource:"",
					region:"",
				}
			}
		}
	}
</script>

<style>
.pull-left{
	float: left;
}
</style>