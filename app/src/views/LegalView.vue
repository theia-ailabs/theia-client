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
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Términos de servicio</h1>
    <p>Última actualización: 14/04/2023</p>

    <ol class="list-decimal list-outside pl-6 space-y-2">
      <li class="mb-2">
        <strong class="font-semibold">Introducción</strong>
        <p>
          Bienvenido a Theia. Estos Términos de servicio (en adelante,
          "Términos") rigen tu acceso y uso de nuestro sitio web, aplicaciones y
          otros productos y servicios (colectivamente, los "Servicios").
        </p>
      </li>
      <li class="mb-2">
        <strong class="font-semibold">Registro de cuentas</strong>
        <p>
          Para utilizar algunos de nuestros Servicios, es posible que debas
          registrarte y crear una cuenta. Al crear una cuenta, aceptas
          proporcionar información precisa, actual y completa sobre ti.
        </p>
      </li>
      <li class="mb-2">
        <strong class="font-semibold">Uso aceptable</strong>
        <p>
          Te comprometes a no utilizar los Servicios de manera que viole
          cualquier ley aplicable, infrinja los derechos de propiedad
          intelectual, o de cualquier otra manera que cause daño a terceros o a
          los Servicios.
        </p>
      </li>
      <li class="mb-2">
        <strong class="font-semibold">Propiedad intelectual</strong>
        <p>
          Los Servicios y su contenido original, características y
          funcionalidades son y seguirán siendo propiedad exclusiva de Theia y
          sus licenciantes. Los Servicios están protegidos por derechos de
          autor, marcas comerciales y otras leyes tanto de España como de otros
          países.
        </p>
      </li>
      <li class="mb-2">
        <strong class="font-semibold">Limitación de responsabilidad</strong>
        <p>
          En ningún caso Theia ni sus directores, empleados o afiliados serán
          responsables de daños indirectos, incidentales, especiales,
          consecuentes o punitivos, incluidos, entre otros, la pérdida de
          beneficios, datos, uso, buena voluntad u otras pérdidas intangibles,
          como resultado del acceso o uso de los Servicios.
        </p>
      </li>
      <li class="mb-2">
        <strong class="font-semibold">Cambios en los términos</strong>
        <p>
          Nos reservamos el derecho de modificar o reemplazar estos Términos en
          cualquier momento a nuestra discreción. Si hacemos cambios en los
          Términos, te lo notificaremos actualizando la fecha en la parte
          superior de esta página.
        </p>
      </li>
      <li class="mb-2">
        <strong class="font-semibold">Contacto</strong>
        <p>
          Si tienes alguna pregunta sobre estos Términos, por favor, no dudes en
          contactarnos a través de theia.ailabs@gmail.com.
        </p>
      </li>
    </ol>
  </div>
</template>
