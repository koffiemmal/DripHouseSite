<template>
  <h1 class="title">NOS CATEGORIES</h1>

  <!-- Filtre des catégories -->
  <div class="categories_div"> 
    <div class="category_div"
      v-for="category in categories"
      :key="category.id"
    >
      <button 
          class="category_btn"
          :class="{active: activeCategory === category.id}"
          @click="setActiveCategory(category.id)"
          >
          <img :src="category.icon" alt="">
          {{ category.name }}
      </button>
    </div>
  </div>


  <div class="grid">
      <div class="card" v-for="product in filteredProducts" :key="product.id">

          <!-- Conteneur pour l'image du produit -->
          <div class="image-container">
            <img :src="product.image" >
          </div>

          <!-- Conteneur pour les détails du produit -->
          <div class="details-container">
            <!-- Logo du site et nom du produit -->
            <div>
              <div class="logo">
              <img :src=logo alt="" />
            </div>
              <h3 class="product-name">{{ product.name }}</h3>
            </div>

            <!-- Disponibilité -->
            <p :class="product.available ? 'text-green-600' : 'text-red-600'" class="availability">
              {{ product.available ? "✔ Disponible" : "✖ Non disponible" }}
            </p>
            
            <!-- Couleurs disponibles -->
            <div class="colors">
              <span
                v-for="color in product.colors"
                :key="color"
                :style="{ backgroundColor: color }"
                class="color-circle"
              ></span>
            </div>
            
          </div>

      </div>


  </div>


</template>

<script setup>
  import { computed, ref } from 'vue';
  import logo from '@/assets/logodriphouse 1.png'



  //Liste des catégories
  const categories = ref([
      {id: 1, name: "NIKE", icon: "src/assets/logo_nike.png"},
      {id: 2, name: "JORDAN", icon: "src/assets/logo_jordan.png"},
      {id: 3, name: "ADIDAS", icon: "src/assets/logo_adidas.png"},
      {id: 4, name: "AUTRES", icon: "src/assets/more.png"}
  ]);

  const activeCategory = ref(1); //Fixer la première catégorie comme active par défaut

  //Méthode pour la catégorie active
  const setActiveCategory = (categoryId) => {
    activeCategory.value = categoryId;
  };

  
  //Liste des produits
  const products = ref([
      { id: 1, name: "Nike Running Tn", category: "NIKE", available:true, image: "src/assets/tn.png", colors: ["#A72626", "#4626A7", "#DCD6D6"]},
      { id: 1, name: "Nike Running Tn", category: "NIKE", available:true, image: "src/assets/tn.png", colors: ["#A72626", "#4626A7", "#DCD6D6"]},
      { id: 1, name: "Nike Running Tn", category: "NIKE", available:false, image: "src/assets/tn.png", colors: ["#A72626", "#4626A7", "#DCD6D6"]},
      { id: 1, name: "Nike Running Tn", category: "NIKE", available:true, image: "src/assets/tn.png", colors: ["#A72626", "#4626A7", "#DCD6D6"]},
      { id: 1, name: "Nike Running Tn", category: "NIKE", available:false, image: "src/assets/tn.png", colors: ["#A72626", "#4626A7", "#DCD6D6"]},
      { id: 1, name: "Nike Running Tn", category: "NIKE", available:true, image: "src/assets/tn.png", colors: ["#A72626", "#4626A7", "#DCD6D6"]},
     
    
  ]);

  //Méthode pour filtrer les produits en fonction de la catégorie active
  const filteredProducts = computed(() => {
    const categoryName = categories.value.find(cat => cat.id === activeCategory.value)?.name;
    return products.value.filter(product => product.category === categoryName);
  } );

</script>


<style>

  .title{
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 3rem;
  }

  .categories_div{
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 30px;
      
  }

  .category_div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 272px;
    height: 76px;
    background-color: #F0F0F0;
    border-radius: 10px;
  }

  .category_btn{
      display: flex;
      width: 233px;
      height: 49px;
      padding: 10px 20px;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      background-color: #ffffff;
      cursor: pointer;
      font-size: 36px;
      /* transition: 0.3s;     */
  }

  .category_btn img{
    max-width: 60px;
    max-height: 100px;
  }

  .category_btn.active{
    background-color: black;
    color:  #ffffff;
  }

  .category_btn:hover {
    background-color: black;
    color: #ffffff;
  }

  .grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px; 
      width: fit-content; 
      margin: 0 auto;
      justify-content: center; 
      align-items: center; 
      
  }

  .card{
    width: 348px;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .image-container {
    flex: 1;
    display: flex;
    max-height:348px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 10px;
    background: radial-gradient(circle 200px, #ffffff, #F3F3F378, #92929278);
    
  }

  .image-container img {
    max-width: 100%;
    height: auto;
  }

  .details-container {
    display: flex;
    padding: 10px;
    justify-content: space-around;
  }

  .logo img {
    width: 50px;
    height: auto;
    margin-bottom: 10px;
  }

  .availability {
    font-size: 0.9rem;
    margin: 5px 0;
  }

  .text-green-600{
    color: #358A24;
  }

  .text-red-600{
    color: #A72626;
  }

  .product-name {
    font-size: 1rem;
    margin: 10px 0;
  }

  .colors {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
  }

  .color-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }

    
</style>

