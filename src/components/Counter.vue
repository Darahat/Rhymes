<template>
  <Page class="page">
<ActionBar>
<NavigationButton text="Go Back" @tap="$router.push('/home')" android.systemIcon="ic_menu_back" tap="onNavBtnTap"/>
  <ActionItem tap="onDelete"
      ios.systemIcon="16" ios.position="right"
      text="delete" android.position="popup"/>
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
    color: black;
    font-family:'Wicked Mouse Demo';
    font-size: 16;
    vertical-align: middle;
    width: 80%;
    padding: 5%;
}
.my-title{
    border-radius: 5;
    color: orangered;
    font-family: 'comic2';
    font-size: 22;
    vertical-align: middle;
    width: 80%;
    padding: 5%;
}
</style>
