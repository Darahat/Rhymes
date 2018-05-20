<template>


<CardView class="cardStyle" margin="10" elevation="40" radius="10" >
	<GridLayout rows="auto,auto,auto,auto,auto" columns="auto,auto, *, auto,auto">
		<Image src="res://baa" stretch="aspectFill" colSpan="3" col="1" row="3"/>
		<Label horizontalAlignment="right" radius="20" color="white" background="purple" text="Ba Ba Black Ship"  row="4"  col="1"></Label>
	</GridLayout>
</CardView>

</template>

<script>
  export default {
    name:'hello',
    data () {
      return {
        surprise: false,

      };
    },
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }
</style>
