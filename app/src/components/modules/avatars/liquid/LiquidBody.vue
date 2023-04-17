<template>
  <div class="bg-green-500 w-screen h-screen">
    <div id="canvas" class="bg-blue-500" @mouseup="updateCoordinates"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as THREE from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import useStore from "../../../../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    let SCENE: THREE.Scene;
    let CAMERA: THREE.PerspectiveCamera;
    let RENDERER: THREE.WebGLRenderer;
    let CONTROLS: OrbitControls;
    let COMPOSER: EffectComposer;
    let TIME = 10; // Let it be non zero at star
    let CANVAS: HTMLCanvasElement;

    // Render 3D
    onMounted(() => {
      init();
      animate();
      CANVAS = document.querySelector("#canvas") as HTMLCanvasElement;
      if (CANVAS) {
        CANVAS.append(RENDERER.domElement);
      }
    });

    function init() {
      initScene();
      initLights();
      initCamera();
      initRenderer();
      initComposer();
      initControls();
      initEventListeners();
      createObjects();
    }

    function initScene() {
      SCENE = new THREE.Scene();
      // SCENE.background = new THREE.Color(0);
    }

    function initLights() {
      // const light = new THREE.PointLight(0xffffff, 1, 100);
      // light.position.set(255, 255, 255);
      // const ambientLight = new THREE.AmbientLight(0xffffff, 0);
      // SCENE.add(ambientLight);
      // SCENE.add(light);
    }

    function initCamera() {
      CAMERA = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        100,
        2000
      );
      CAMERA.position.x = store.avatarConfig.position.x;
      CAMERA.position.y = store.avatarConfig.position.y;
      CAMERA.position.z = store.avatarConfig.position.z;
    }

    function initRenderer() {
      RENDERER = new THREE.WebGLRenderer({ alpha: true });
      RENDERER.setClearColor(0xffffff, store.avatarConfig.background);
      RENDERER.setPixelRatio(window.devicePixelRatio);
      RENDERER.setSize(window.innerWidth, window.innerHeight);
      RENDERER.shadowMap.enabled = true;
    }

    function initComposer() {
      COMPOSER = new EffectComposer(RENDERER);
      COMPOSER.setSize(window.innerWidth, window.innerHeight);
      const renderPass = new RenderPass(SCENE, CAMERA);
      COMPOSER.addPass(renderPass);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        store.avatarConfig.energy.x,
        store.avatarConfig.energy.y,
        store.avatarConfig.energy.z
      );
      bloomPass.renderToScreen = true;
      COMPOSER.addPass(bloomPass);
    }

    function initControls() {
      CONTROLS = new OrbitControls(CAMERA, RENDERER.domElement);
      CONTROLS.enableZoom = false;
      CONTROLS.minPolarAngle = (Math.PI * 1) / 4;
      CONTROLS.maxPolarAngle = (Math.PI * 3) / 4;
      CONTROLS.update();
    }

    function initEventListeners() {
      window.addEventListener("resize", onWindowResize);
      onWindowResize();
    }

    function onWindowResize() {
      CAMERA.aspect = window.innerWidth / window.innerHeight;
      CAMERA.updateProjectionMatrix();
      RENDERER.setSize(window.innerWidth, window.innerHeight);
      COMPOSER.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      CONTROLS.update();
      TIME += store.avatarConfig.speed / 1000;
      updateUniforms();
      render();
    }

    function updateUniforms() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      SCENE.traverse(function (child: any) {
        if (
          child instanceof THREE.Mesh &&
          child.material.type === "ShaderMaterial"
        ) {
          child.material.uniforms.uTime.value = TIME;
          child.material.needsUpdate = false;
        }
      });
    }

    function render() {
      CAMERA.lookAt(SCENE.position);
      COMPOSER.render();
    }

    function createObjects() {
      let geometry = new THREE.SphereGeometry(
        store.avatarConfig.sphere.x,
        store.avatarConfig.sphere.y,
        store.avatarConfig.sphere.z
      );
      const modelColors = ref(`
        uniform float uTime;
        varying vec3 vNormal;
        void main() {
          vec3 color1 = ${store.avatarConfig.vecColor1};
          vec3 color2 = ${store.avatarConfig.vecColor2};
          gl_FragColor = vec4(mix(color1, color2, vNormal.${store.avatarConfig.colorDir}), ${store.avatarConfig.colorsSplit});
        }
      `);
      const vertex = ref(`
        uniform float uTime;     
        varying vec3 vNormal;
        void main() {
            vNormal = normal;
            vec3 delta = ${store.avatarConfig.vertex.x}.0 * normal * sin(normal.x + normal.y * ${store.avatarConfig.vertex.y}.0 + normal.z + uTime * ${store.avatarConfig.vertex.z}.0);
            vec3 newPosition = position + delta;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }`);
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: TIME },
        },
        transparent: store.avatarConfig.transparent,
        side: THREE.DoubleSide,
        vertexShader: vertex.value,
        fragmentShader: modelColors.value,
      });
      const sphere = new THREE.Mesh(geometry, shaderMaterial);
      SCENE.add(sphere);
    }

    function updateCoordinates() {
      store.avatarConfig.position = CAMERA.position;
      console.log(store.avatarConfig.position);
    }

    return {
      updateCoordinates,
    };
  },
});
</script>
