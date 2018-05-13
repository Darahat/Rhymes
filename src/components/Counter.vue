<template>
  <Page class="page">
    <ActionBar title="Rhymes" backgroundColor="white" flat="true" color="skyblue">
      <!-- <NavigationButton  ></NavigationButton> -->
      <label :text="'\uf0c9   Rhymes'" @tap="openDrawer()" horizontalAlignment="left" class="fontawesome"></label>
    </ActionBar>
<GridLayout rows="*" height="1500px">
  <RadSideDrawer ref="drawer">
    <StackLayout ~drawerContent backgroundColor="white" color="skyblue">
      <StackLayout height="56" style="text-align: center; vertical-align: center;">
         <Image  src="~/images/NativeScript-Vue.png" text="Navigation Menu" />
      </StackLayout>
      <StackLayout>
        <ListView  for="item in catagory" @itemTap="onItemTap()" class="fontawesome2 sideStackLayout">
          <v-template>
<Label :text="item.icon" class="sideLabel sideLightGrayLabel"></Label>
            <Label :text="item.title" class="sideLabel sideLightGrayLabel" padding="10"></Label>
 
          </v-template>
        </ListView>
      </StackLayout>
        <Label text="Close Drawer" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap"></Label>
      </StackLayout>
      <StackLayout ~mainContent>
            <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline"/>
        <Label :text="message" alignSelf="baseline" class="h2"/>
        <Button @tap="increment" text="+" class="btn btn-outline"/>
      </FlexboxLayout>
      <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
    </StackLayout>
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
  import { mapActions } from 'vuex';

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
    computed: {
      message () {
        return this.$store.state.counter.count.toString();
      },
      surprise () {
        return (this.$store.state.counter.count >= 5);
      },
    },
    methods: mapActions([
      'decrement',
      'increment',
    ]),
  };
</script>
