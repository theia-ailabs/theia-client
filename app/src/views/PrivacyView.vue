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
      <h2>2. Información que recopilamos</h2>
    <p>
      Cuando utilizas nuestros Servicios, podemos recopilar información sobre ti, como:
      <ul>
        <li>Información de registro: nombre, dirección de correo electrónico, contraseña y otros datos que nos proporciones al registrarte en nuestra plataforma.</li>
        <li>Información de perfil: información que nos proporciones en tu perfil de usuario, como tu foto de perfil, intereses y preferencias.</li>
        <li>Información del dispositivo: información sobre el dispositivo que utilizas para acceder a nuestros Servicios, como el tipo de dispositivo, el sistema operativo, la dirección IP y la información de la ubicación.</li>
        <li>Información de uso: información sobre cómo utilizas nuestros Servicios, como las páginas que visitas, las funciones que utilizas y el tiempo que pasas en nuestra plataforma.</li>
      </ul>
    </p>

    <h2>3. Uso de la información</h2>
    <p>
      Utilizamos la información que recopilamos para:
      <ul>
        <li>Proporcionar y mejorar nuestros Servicios.</li>
        <li>Personalizar tu experiencia en nuestra plataforma.</li>
        <li>Responder a tus solicitudes y brindarte soporte.</li>
        <li>Comunicarnos contigo sobre actualizaciones, promociones y otras noticias relacionadas con nuestros Servicios.</li>
        <li>Realizar análisis y estudios para mejorar nuestros Servicios.</li>
      </ul>
    </p>

    <h2>4. Compartir información con terceros</h2>
    <p>
      No vendemos ni compartimos tu información personal con terceros para fines de marketing sin tu consentimiento. Podemos compartir tu información con:
      <ul>
        <li>Proveedores de servicios que nos ayudan a operar y mantener nuestros Servicios.</li>
        <li>En caso de venta, fusión o adquisición de nuestra empresa, podemos transferir tu información como parte de dicha transacción.</li>
        <li>Cuando sea necesario para cumplir con la ley o proteger nuestros derechos, propiedad o seguridad, o los de nuestros usuarios o terceros.</li>
      </ul>
    </p>

    <h2>5. Protección de la información</h2>
    <p>
      Nos esforzamos por proteger tu información personal utilizando medidas de seguridad técnicas y organizativas adecuadas. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de tu información.
    </p>
    <h2>6. Tus derechos y opciones</h2>
    <p>
      Según las leyes aplicables en tu jurisdicción, puedes tener derechos y opciones con respecto a tu información personal, como:
      <ul>
        <li>Acceso: puedes solicitar acceso a la información personal que tenemos sobre ti.</li>
        <li>Rectificación: puedes solicitarnos que corrijamos cualquier información personal inexacta o incompleta.</li>
        <li>Eliminación: puedes solicitarnos que eliminemos tu información personal cuando ya no sea necesaria para los fines para los que fue recopilada.</li>
        <li>Restricción de procesamiento: puedes solicitarnos que restrinjamos el procesamiento de tu información personal en ciertas circunstancias.</li>
        <li>Portabilidad de datos: puedes solicitarnos que te proporcionemos tu información personal en un formato estructurado, comúnmente utilizado y legible por máquina, o que la transfiramos a otro controlador de datos.</li>
        <li>Objeción: puedes objetar el procesamiento de tu información personal en ciertas circunstancias.</li>
        <li>Retirar el consentimiento: si hemos obtenido tu consentimiento para procesar tu información personal, puedes retirarlo en cualquier momento.</li>
      </ul>
      Para ejercer tus derechos, ponte en contacto con nosotros a través de theia.ailabs@gmail.com.
    </p>

    <h2>7. Retención de datos</h2>
    <p>
      Retenemos tu información personal durante el tiempo que sea necesario para los fines descritos en esta Política de privacidad, a menos que la ley exija o permita un período de retención más largo.
    </p>

    <h2>8. Enlaces a sitios web de terceros</h2>
    <p>
      Nuestros Servicios pueden contener enlaces a sitios web de terceros. Esta Política de privacidad no se aplica a la información recopilada por dichos sitios web. Te recomendamos que revises las políticas de privacidad de los sitios web de terceros antes de proporcionarles tu información personal.
    </p>
    <h2>9. Cambios en la Política de privacidad</h2>
    <p>
      Nos reservamos el derecho de modificar o actualizar esta Política de privacidad en cualquier momento a nuestra discreción. Si hacemos cambios en la Política de privacidad, te lo notificaremos actualizando la fecha en la parte superior de esta página.
    </p>

    <h2>10. Contacto</h2>
    <p>
      Si tienes alguna pregunta sobre esta Política de privacidad, por favor, no dudes en contactarnos a través de theia.ailabs@gmail.com.
    </p>
    </div>
  </template>