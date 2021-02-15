<template>
  <div id="app">
  
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand><b><i>Image Gallery</i></b></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><router-link class="route" to="/">Images</router-link></b-nav-item>
        <b-nav-item ><router-link class="route" to="/random">Random Image</router-link></b-nav-item>
      </b-navbar-nav>
  </b-collapse>
</b-navbar>


    <!------->
   
  <keep-alive include="ImageList">
  <router-view/>
  </keep-alive>
 
  

  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="bottom">
    <b-navbar-nav center><b><i>Image Gallery</i></b></b-navbar-nav>
 </b-navbar>
 
  </div>
</template>

<style scoped>

 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
 
}

.route{

font-weight: bold;
color:#d9d9d9;

}
.tags{
 position: absolute;
  left: 45%;
  right: 45%;
  color: white;
}

.display{
 
  color: white;
}
.nav-link :hover{
  color: white;
  text-decoration: none;
}
h6{
  padding: 10px;
}

</style>
