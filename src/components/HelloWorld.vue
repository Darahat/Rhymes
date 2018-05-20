<template>

<ScrollView orientation="vertical">
  <StackLayout orientation="vertical">
      <Image src="~/images/Humpty.jpg"  />
      <Label  textWrap="true" text="Cock a doodle doo" class="my-title"/>
      <Label  textWrap="true" class="my-label"
      text="Cock a doodle do!
What is my dame to do?
Till master's found his fiddlingstick,
She'll dance without her shoe.

Cock a doodle do!
My dame has found her shoe,
And master's found his fiddlingstick,
Sing cock a doodle do!

Cock a doodle do!
My dame will dance with you,
While master fiddles his fiddlingstick,
And knows not what to do"/>
 </StackLayout>
</ScrollView>
   
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
