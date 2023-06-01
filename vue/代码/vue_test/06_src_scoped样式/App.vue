<template>
	<div>
		<h1 class="title">你好啊</h1>
		<School />
		<Student />
	</div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
	name: 'App',
	components: { School, Student }
}
</script>

<style scoped>  /* scoped: 作用域, 只在当前组件中生效，但是在app.vue里面一般不用scoped，因为app.vue的属性值一般是公用的 */
	.title {
		color: red;
	}
</style>
