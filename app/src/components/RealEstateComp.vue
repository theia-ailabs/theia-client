<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { RealEstate } from "../interfaces";
import useStore from "@/services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const properties: Ref<RealEstate[]> = ref([]);
    watchEffect(() => {
      properties.value = [
        {
          title: "Chalet 300m2",
          img: require("../assets/img/ico/casa1.jpg"),
          category: "sell",
          price: "200 000 €",
          individual: true,
          address: "C/ Baltasar de España, 32, 08970 Sant Joan Despí",
          phone: "600 00 00 00",
          email: "prueba@gmail.com",
        },
        {
          title: "Casa 800m2",
          img: require("../assets/img/ico/casa2.jpg"),
          category: "sell",
          price: "2 000 €" + "/mes",
          individual: true,
          address: "C/ Baltasar de España, 32, 08970 Sant Joan Despí",
          phone: "600 00 00 00",
          email: "prueba@gmail.com",
        },
      ];
    });

    return {
      store,
      Slide,
      Carousel,
      Pagination,
      Navigation,
      properties,
    };
  },
});
</script>
<template>
  <Carousel class="carousel__item">
    <Slide v-for="x in properties" :key="x.price">
      <img :src="x.img" width="120" />
      <h2>{{ x.title }}</h2>
      <h3>{{ x.category }}</h3>
      <ul>
        <li>
          <p><strong>Precio: </strong>{{ x.price }}</p>
        </li>
        <li>
          <p><strong>Dirección: </strong> {{ x.address }}</p>
        </li>
        <li>
          <p>
            <strong>Particular? </strong
            >{{ x.individual ? "Particular" : "Inmobiliaria" }}
          </p>
        </li>
        <li>
          <p><strong>Teléfono: </strong>{{ x.phone }}</p>
        </li>
        <li>
          <p><strong>Email: </strong>{{ x.email }}</p>
        </li>
      </ul>
    </Slide>
    <template #addons>
      <Navigation class="text-white pb-6" />
      <Pagination class="text-white pb-6" />
    </template>
  </Carousel>
</template>
<style>
.carousel__item {
  position: fixed;
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.carousel__slide {
  padding: 10px;
  color: gray;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: gray;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: gold;
}
</style>
