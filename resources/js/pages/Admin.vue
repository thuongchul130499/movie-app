<template>
	<div class="wrapper">
		<Sidebar />
		<div class="container-fluid">
			<Navbar />
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/layouts/Sidebar';
	import Navbar from '@/layouts/Navbar';
	export default {
		name: "LayoutAdmin",
		components: { Sidebar, Navbar }
	}
</script>

<style>
	.wrapper {
		display: flex;
		width: 100%;
		align-items: stretch;
	}
	body{
		background-color: white !important;
	}
</style>