<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { RealEstate } from "../interfaces";
import useStore from "../services/store";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
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
  <Carousel class="carousel__item mx-auto w-[90%]">
    <Slide v-for="(x, index) in properties" :key="index">
      <figure class="my-2 p-2 justify-center align-middle">
        <img :src="x.img" class="w-[200px] my-2 mx-auto" />
        <h2>{{ x.title }}</h2>
        <h3>{{ x.category }}</h3>
        <figcaption>
          <ul>
            <li>
              <p><b>Precio: </b>{{ x.price }}</p>
            </li>
            <li>
              <p><b>Dirección: </b {{ x.address }}</p>
            </li>
            <li>
              <p>
                <b>Particular? </b
                >{{ x.individual ? "Particular" : "Inmobiliaria" }}
              </p>
            </li>
            <li>
              <p><b>Teléfono: </b>{{ x.phone }}</p>
            </li>
            <li>
              <p><b>Email: </b>{{ x.email }}</p>
            </li>
          </ul>
        </figcaption>
      </figure>
    </Slide>
    <template #addons>
      <Navigation class="text-white pb-6" />
      <Pagination class="text-white pb-6" />
    </template>
  </Carousel>
</template>
<style scoped>
.carousel__item {
  position: relative;
  min-height: 200px;
  width: 300px;
  font-size: 20px;
  border-radius: 8px;
  display: block;
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

.carousel__prev {
  margin-right: 5rem;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: gold;
}
</style>
