<template>
  <Page class="page">
    <ActionBar title="Rhymes" backgroundColor="skyblue" flat="true" color="white">
      <label :text="'\uf0c9   Rhymes'" @tap="openDrawer()" horizontalAlignment="left" class="fontawesome"></label>
    </ActionBar>
<GridLayout rows="*" height="1500px">
  <RadSideDrawer ref="drawer">
    <StackLayout ~drawerContent backgroundColor="white" color="skyblue">
      <FlexboxLayout   style="text-align: center;height:156px; vertical-align: center;" >
        <Image  class="animated-bounce" src="res://logo" text="Navigation Menu" />
        <Image  class="animated-bounce1" src="res://logo" text="Navigation Menu" />
        <Image class="animated-bounce2" src="res://logo" text="Navigation Menu" />
      </FlexboxLayout>
      <StackLayout>
          <ListView  for="item in rhymes" @itemTap="onItemTap()" class="fontawesome2 sideStackLayout">
          <v-template>
<Label :text="item.icon" class="sideLabel sideLightGrayLabel"></Label>
            <Label :text="item.title" class="sideLabel sideLightGrayLabel" padding="10" @tap="$router.push({ name:'counter',params: {id: item.id,
             title:item.title,
             imgurl:item.imgurl,
             rhyme:item.rhyme
            } })"></Label>
          </v-template>
        </ListView>
      </StackLayout>
        <Label text="Close" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap"></Label>
      </StackLayout>
      <StackLayout ~mainContent>
      <StackLayout>
      <hello ref="hello"></hello>
      </StackLayout>
      </StackLayout>
    </RadSideDrawer>

</GridLayout>

  </Page>
</template>
<script>
import hello from './HelloWorld.vue'
import json from '../assets/data/rhymes.json'
import anim from './animation.vue'
import axios from 'axios'
import http from 'http'
export default {
    data(){
      return{
         rhymes: json,
      }
      },
    components: {
      hello
    },
    methods: {
        openDrawer() {
            this.$refs.drawer.nativeView.showDrawer();
        },
        onCloseDrawerTap() {
            this.$refs.drawer.nativeView.closeDrawer();
        }
    },
}
</script>
<style>
  .fontawesome{
  font-family: "fontawesome-webfont";
  font-size:23;
}
.fontawesome2{
  font-family: "Funhouse";
  font-size:15;
  text-align: center;
  margin:5;
  padding:5;
  color:red;
}

</style>
