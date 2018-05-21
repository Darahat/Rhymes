<template>
  <GridLayout rows="*" height="1500px">
    <ListView   separatorColor="white" for="item in rhymes" class="fontawesome2 ">
      <v-template>
        <CardView class="cardStyle" margin="10" radius="10" >
          <GridLayout rows="auto,auto,auto,auto,auto" columns="auto,auto, *, auto,auto" @tap="$router.push({ name:'Rhyme',params: {id: item.id,
            title:item.title,
            imgurl:item.imgurl,
            rhyme:item.rhyme
            } })">
            <Image :src="item.imgurl" stretch="aspectFill" colSpan="3" col="1" row="3" />
            <Label horizontalAlignment="center" color="orangered" :text="item.title" colspan="3" row="8" col="2"></Label>
          </GridLayout>
        </CardView>
      </v-template>
    </ListView>
  </GridLayout>
</template>

<script>
  import json from '../assets/data/rhymes.json'


  export default {
    data() {
      return {
        rhymes: json,
      }
    }
  }
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }
</style>
