<template>
  <div>
    <Header />
    <Home />
    <NewArrivales />
    <About />
    <Categories />
    <Footer />
  </div>
</template>

<script>
import Home from "./Home/Home.vue";
import Header from "./Header/Header.vue";
import NewArrivales from "./NewArrivales/NewArrivales.vue";
import About from "./About/About.vue";
import Categories from "./Categories/Categories.vue";
import Footer from "./Footer/Footer.vue";

export default {
  components: {
    Header,
    Home,
    NewArrivales,
    About,
    Categories,
    Footer,

  },
};
</script>
