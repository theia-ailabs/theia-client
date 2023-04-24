<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from "vue";
import useStore from "@/services/store";

export default defineComponent({
    setup() {
        const store = useStore();
				const properties: Ref = ref([]);
				watchEffect(() => {
					properties.value = ['a', 'b', 'c'];
				});
				
        return {
            store,
        }
    }
});
</script>
<template>
  <section id="realestate-carousel">
    <div v-if="store.realEstate">
        <div v-for="x in store.realEstate">
            <img :src="x.img">
            <h2>{{ x.title }}</h2>
						<h3>{{ x.tipo }}</h3>
						<ul>
							<li>
								<p><strong>Precio: </strong>{{ x.price }}</p>
							</li>
							<li>
								<p><strong>Dirección: </strong> {{ x.address }}</p>
							</li>
							<li>
								<p><strong>Particular? </strong>{{ x.particular }}</p>
							</li>
						</ul>
        </div>
    </div>
    </section>
</template>
