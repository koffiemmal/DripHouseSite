<template>
  <Carousel :wrap-around="true" :items-to-show="1" :autoplay="2000" >
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <div
          :class="[
            'h-screen w-screen bg-gradient-to-r',
            slide.bckcolor,
            'flex items-center justify-end',
          ]"
        >
          <section class="relative left-8 md:left-16 ps-0 md:ps-10 flex flex-col justify-start">
            <p class=" text-md md:text-4xl text-start text-black font-extrabold pb-40">
              The most iconic,ever <br />.
              <span class="text-lg md:text-7xl  text-black font-extrabold">{{
                slide.title
              }}</span>
            </p>
            <p class="py-24 text-xs md:text-lg text-start text-black">
              {{ slide.content }}
            </p>
            <button
              class="bg-black   md:w-[75%] text-white px-4 py-2 text-xs  md:text-xl font-extrabold rounded-md"
            >
              CHOPPER-MAINTENANT
            </button>
          </section>
          <img
            :src="slide.images"
            class="  w-[55%] relative md:right-[-5%]"
            alt=""
          />
          <!-- Colonnes colorées -->
          <div
            :class="['h-full hidden md:block w-16 md:w-52 bg-blue-600', slide.fristcolum]"
          ></div>
          <div
            :class="[
              'h-full w-12  md:w-44 bg-blue-950 flex items-center justify-center,',
              slide.secondcolum,
            ]"
          >
            <!-- Texte vertical -->
            <p
              :class="[ 
                ' text-md md:text-7xl  font-extrabold text-white rotate-90',
                slide.paddingTitle,
                'tracking-wide',
              ]"
            >
              {{ slide.title }}
            </p>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
// Pas besoin d'importer quoi que ce soit ici si Vuetify est bien configuré dans app.js
import bcg from "@/assets/bck_vans.png";
import vans from "@/assets/vans.png";
import tn from "@/assets/tn.png";
import campus from "@/assets/campus.png";

import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const slides = [
  {
    id: "1",
    images: vans,
    bckcolor: "from-blue-100 to-blue-400",
    fristcolum: "bg-blue-600",
    secondcolum: "bg-blue-950",
    title: "VANS",
    paddingTitle: " pt-4 md:pt-16",
    content:
      "CHUCK TAYLOR ALL STAR VANS CORE \n LITTLE STYLE WITH COMFORTABILY",
  },
  {
    id: "2",
    images: tn,
    bckcolor: "from-white to-gray-400 ",
    fristcolum: "bg-white",
    secondcolum: "bg-black",
    title: "NIKE",
    paddingTitle: " pt-4 md:pt-8",
    content:
      "CHUCK TAYLOR ALL STAR VANS CORE \n LITTLE STYLE WITH COMFORTABILY",
  },
  {
    id: "3",
    images: campus,
    bckcolor: "from-gray-500 to-AddMarron",
    fristcolum: "bg-AddMarron",
    secondcolum: "bg-gray-500",
    title: "ADIDAS",
    paddingTitle: " pt-10 md:pt-36",
    content:
      "CHUCK TAYLOR ALL STAR VANS CORE \n LITTLE STYLE WITH COMFORTABILY",
  },
];
</script>

<style>
#bck_vans {
  background-image: url(@/assets/bck_vans.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.carousel__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  text-align: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>
