<template>
	<div>
		<school></school>
		<student></student>
	</div>
</template>

<script>
import Student from '../vue_basic/19_单文件组件/Student.vue';
import School from '../vue_basic/19_单文件组件/School.vue'
export default {
	components: { student, School },

}
</script>

<style></style>