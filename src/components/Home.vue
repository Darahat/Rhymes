<template>
  <Page class="page">
    <ActionBar title="Rhymes" backgroundColor="skyblue" flat="true" color="white">
      <!-- <NavigationButton  ></NavigationButton> -->
      <label :text="'\uf0c9   Rhymes'" @tap="openDrawer()" horizontalAlignment="left" class="fontawesome"></label>
    </ActionBar>
<GridLayout rows="*" height="1500px">
  <RadSideDrawer ref="drawer">
    <StackLayout ~drawerContent backgroundColor="white" color="skyblue">
      <StackLayout height="56" style="text-align: center; vertical-align: center;">
         <Image  src="res://logo" text="Navigation Menu" />
      </StackLayout>
      <StackLayout>
        <ListView  for="item in catagory" @itemTap="onItemTap()" class="fontawesome2 sideStackLayout">
          <v-template>
            <Label :text="item.icon"></Label>
            <!-- <Label :text="item.title" class="sideLabel sideLightGrayLabel" padding="10"></Label> -->
 
          </v-template>
        </ListView>
      </StackLayout>
        <Label text="Close" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap"></Label>
      </StackLayout>
      <StackLayout ~mainContent>
        <!-- <Label textWrap="true">Hello</Label> -->
        <hello ref="hello"></hello>
      </StackLayout>
    </RadSideDrawer>

</GridLayout>
    <!-- <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
    </StackLayout> -->

  </Page>
</template>
<script>
import hello from './HelloWorld.vue'
export default {
    data(){
      return{
        catagory:[{
 
          icon:'\uf015',
          title:'Home'
        },{
 
          icon:'\uf015',
          title:'Promotions'
        },{
 
          icon:'\uf015',
          title:'Promotions'
        },{
 
          icon:'\uf015',
          title:'Promotions'
        },{
 
          icon:'\uf015',
          title:'Promotions'
        }]
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
  font-size:20px;
}
.fontawesome2{
  font-family: "fontawesome-webfont";
  font-size:15px;
  margin:5px;
  padding:5px;
}
</style>
