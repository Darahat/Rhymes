<template>

    <StackLayout class="hello-world">
      <!-- <Label class="body" textWrap=true text="This is a hello world component, tap the button if you dare"/> -->
<!-- @tap="surprise = !surprise" -->
      <Image src="res://teddy"  @tap="surprise = !surprise"/>
      <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>

    </StackLayout>
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

  Label {
    color: green;
  }
</style>
