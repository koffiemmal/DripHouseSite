<template>
  <div 
  class="flex flex-col items-center justify-center  text-black py-10">

    <article>
        <img :src=logo alt="">
    </article>
    <p>Suivez nous sur</p>
    <section class="flex flex-row items-center justify-center  ">
        <article>
            <img :src=Facbook alt="">

        </article>
        <article>
            <img :src=Instagram alt="">
            
        </article>
        <article>
            <img :src=WhatsApp alt="">
            
        </article>
    </section>
 

    <p class="w-[75%] border-t-2 border-gray-300 mx-14 py-4 text-center "  >Copyright@ByDarkDevs2024</p>
  </div>
</template>
<script setup>
import logo from "@/assets/logodriphouse 1.png";
import Facbook from "@/assets/Facebook.png";
import Instagram from "@/assets/Instagram.png";
import WhatsApp from "@/assets/WhatsApp.png";
</script>
