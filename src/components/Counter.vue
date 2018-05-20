<template>
  <Page class="page">
<ActionBar  backgroundColor="skyblue" flat="true" color="white">
  <label :text="'\uf060   Rhymes'" ios.systemIcon="16" ios.position="right" @tap="$router.push('/home')" horizontalAlignment="left" class="fontawesome"></label>

</ActionBar>
<ScrollView orientation="vertical">
  <StackLayout orientation="vertical">
<Image   :src="this.$route.params.imgurl"  />
<Label class="my-title" textWrap="true" :text="this.$route.params.title"></Label>
<Label textWrap="true" class="my-label" :text="this.$route.params.rhyme"></Label>
</StackLayout>
    </ScrollView>
 
  </Page>

</template>

<style >
.my-label {
    border-radius: 5;
    color: green;
    font-family:'Wicked Mouse Demo';
    font-size: 13;
    vertical-align: middle;
    width: 85%;
    padding: 5%;
}
.my-title{
    border-radius: 5;
    color: orangered;
    font-family: 'comic2';
    font-size: 21;
    vertical-align: middle;
    width: 85%;
    padding: 5%;
}
</style>
