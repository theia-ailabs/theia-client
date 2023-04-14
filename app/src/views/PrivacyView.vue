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
      <h2>2. Registro de cuentas</h2>
    <p>
      Para utilizar algunos de nuestros Servicios, es posible que debas registrarte y crear una cuenta. Al crear una cuenta, aceptas proporcionar información precisa, actual y completa sobre ti.
    </p>

    <h2>3. Uso aceptable</h2>
    <p>
      Te comprometes a no utilizar los Servicios de manera que viole cualquier ley aplicable, infrinja los derechos de propiedad intelectual, o de cualquier otra manera que cause daño a terceros o a los Servicios.
    </p>

    <h2>4. Propiedad intelectual</h2>
    <p>
      Los Servicios y su contenido original, características y funcionalidades son y seguirán siendo propiedad exclusiva de (nombre de tu empresa) y sus licenciantes. Los Servicios están protegidos por derechos de autor, marcas comerciales y otras leyes tanto de (tu país) como de otros países.
    </p>

    <h2>5. Limitación de responsabilidad</h2>
    <p>
      En ningún caso (nombre de tu empresa) ni sus directores, empleados o afiliados serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, la pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, como resultado del acceso o uso de los Servicios.
    </p>

    <h2>6. Cambios en los Términos</h2>
    <p>
      Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento a nuestra discreción. Si hacemos cambios en los Términos, te lo notificaremos actualizando la fecha en la parte superior de esta página.
    </p>

    <h2>7. Contacto</h2>
    <p>
      Si tienes alguna pregunta sobre estos Términos, por favor, no dudes en contactarnos a través de (proporcionar información de contacto, como dirección de correo electrónico).
    </p>
    </div>
  </template>