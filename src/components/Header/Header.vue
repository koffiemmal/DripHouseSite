<template>
    <div  class="flex flex-row px-10 items-center justify-between justify-items-center " >
        <section >
            <article>
                <img :src=logo alt="">
            </article>
        </section>
        <section>
            <button class="text-white border-2 bg-black -black rounded-md text-sm md:text-md font-extrabold py-2 px-4">
               CHAUSSEZ-VOUS
            </button>
        </section>
    </div>
</template>

<script setup>

    import logo from '@/assets/logodriphouse 1.png'

</script>
<style scoped>
@font-face {
  font-family: "Anton";
  src: url("@/assets/font/Anton.ttf") format('truetype');;
  font-weight: bolder;
  font-style: normal;
}
* {
  font-family: "Anton", sans-serif;
}
</style>
