<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: { NavbarComp },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <div>
    <h1>Términos de servicio</h1>
    <p>Última actualización: 14/04/2023</p>

    <h2>1. Introducción</h2>
    <p>
      Bienvenido a Theia. Estos Términos de servicio
      (en adelante, "Términos") rigen tu acceso y uso de nuestro sitio web, aplicaciones
      y otros productos y servicios (colectivamente, los "Servicios").
    </p>

    <!-- Añade más secciones para cubrir temas como el registro de cuentas, uso aceptable, propiedad intelectual, limitación de responsabilidad, etc. -->

    <h2>X. Cambios en los Términos</h2>
    <p>
      Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento a nuestra discreción. Si hacemos cambios en los Términos, te lo notificaremos actualizando la fecha en la parte superior de esta página.
    </p>

    <h2>X+1. Contacto</h2>
    <p>
      Si tienes alguna pregunta sobre estos Términos, por favor, no dudes en contactarnos a través de (proporcionar información de contacto, como dirección de correo electrónico).
    </p>
  </div>
</template>
