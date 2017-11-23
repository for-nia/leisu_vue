<template>
  <div id="app">

      <el-row v-for="game in games">
        <el-col :span="24">
          <game-grid :game="game" >
        </game-grid></el-col>
      </el-row>

  </div>
</template>

<script>
    import gameGrid from './GameGrid.vue'
    export default {
        data(){
            return {
                games: [],
                api: "http://localhost:8989/matches"
            }
        },
        components: {
            gameGrid
        },
        mounted(){
            this.getGameList();
        },
        methods: {
            getGameList:function () {
                console.log('===========');
                this.$http.get(this.api).then((response)=>{
                    console.info(response.data.result.matches);
                    this.games=response.data.result.matches;
                    //this.$set('games',response.data.result.matches);
                }).catch(function (response) {
                    console.error("=============");
                    console.error(response)
                });
            }
        }

    }
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
