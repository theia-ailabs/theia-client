<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";

export default defineComponent({
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
      <h1>Política de privacidad</h1>
      <p>Última actualización: 14/04/2023</p>
  
      <h2>1. Introducción</h2>
      <p>
        En Theia, nos preocupamos por tu privacidad. Esta Política de privacidad describe cómo recopilamos, utilizamos, divulgamos y protegemos tus datos personales cuando utilizas nuestros Servicios.
      </p>
  
      <!-- Añade más secciones para cubrir temas como la información que recopilas, cómo la utilizas, con quién la compartes, cómo la proteges, cómo manejas las solicitudes de los usuarios, etc. -->
  
      <h2>X. Cambios en la Política de privacidad</h2>
      <p>
        Nos reservamos el derecho de modificar o actualizar esta Política de privacidad en cualquier momento a nuestra discreción. Si hacemos cambios en la Política de privacidad, te lo notificaremos actualizando la fecha en la parte superior de esta página.
      </p>
  
      <h2>X+1. Contacto</h2>
      <p>
        Si tienes alguna pregunta sobre esta Política de privacidad, por favor, no dudes en contactarnos a través de (proporcionar información de contacto, como dirección de correo electrónico).
      </p>
    </div>
  </template>