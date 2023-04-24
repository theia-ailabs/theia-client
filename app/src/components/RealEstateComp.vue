<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import useStore from "@/services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const properties: Ref = ref([]);
    watchEffect(() => {
      properties.value = ["a", "b", "c"];
    });

    return {
      store,
      Slide,
      Carousel,
			Pagination,
			Navigation,
    };
  },
  data() {
    return {
      title: "Chalet 300m2",
      img: require("../assets/img/ico/casa1.jpg"),
      particular: true,
      tipo: "Venta",
      precio: "200.000€",
      address: "C/ Baltasar de España, 32, 08970 Sant Joan Despí",
      telf: "600 00 00 00",
      email: "prueba@gmail.com",
    };
  },
});
</script>
<template>
  <section id="realestate-carousel">
    <Carousel>
      <Slide :key="0">
        <img :src="img" />
        <h2>{{ title }}</h2>
        <h3>{{ tipo }}</h3>
        <ul>
          <li>
            <p><strong>Precio: </strong>{{ precio }}</p>
          </li>
          <li>
            <p><strong>Dirección: </strong> {{ address }}</p>
          </li>
          <li>
            <p><strong>Particular? </strong>{{ particular }}</p>
          </li>
          <li>
            <p><strong>Teléfono: </strong>{{ telf }}</p>
          </li>
          <li>
            <p><strong>Email: </strong>{{ email }}</p>
          </li>
        </ul>
      </Slide>
    </Carousel>
  </section>
</template>
