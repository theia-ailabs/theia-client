<template>
  <div
    class="w-screen h-screen"
    :class="store.dark ? 'bg-black/90' : 'bg-white/90'"
  >
    <div id="canvas" @mouseup="updateCoordinates"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
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
    let TIME = 5; // Let it be non zero at star
    let CANVAS: HTMLCanvasElement;
    const avatarMode = ref(store.avatarMode);
    const vecColor1 = ref(store.avatarConfig.vecColor1);
    const vecColor2 = ref(store.avatarConfig.vecColor2);
    const colorDir = ref(store.avatarConfig.colorDir);
    const colorSplit = ref(store.avatarConfig.colorSplit);
    const sphereForm = ref(store.avatarConfig.sphere);
    const cameraPosition = ref(store.avatarConfig.position);
    const material = ref(store.avatarConfig.material);
    const vertexXYZ = ref(store.avatarConfig.vertex);
    const speedEffect = ref(store.avatarConfig.speed);
    const transparentMaterial = ref(store.avatarConfig.transparent);
    const canvasBackground = ref(store.avatarConfig.background);

    // Render 3D Avatar
    onMounted(() => {
      init();
      animate();
      CANVAS = document.querySelector("#canvas") as HTMLCanvasElement;
      if (CANVAS) {
        CANVAS.append(RENDERER.domElement);
      }
      modeTransition();
    });

    function modeTransition() {
      watchEffect(() => {
        if (store.avatarMode != avatarMode.value) {
          console.log();
        }
      });
    }

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
    }

    function initLights() {
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(255, 255, 255);
      const ambientLight = new THREE.AmbientLight(0xffffff, 0);
      SCENE.add(ambientLight);
      SCENE.add(light);
    }

    function initCamera() {
      CAMERA = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        100,
        2000
      );
      CAMERA.position.x = cameraPosition.value.x;
      CAMERA.position.y = cameraPosition.value.y;
      CAMERA.position.z = cameraPosition.value.z;
    }

    function initRenderer() {
      RENDERER = new THREE.WebGLRenderer({ alpha: true });
      RENDERER.setClearColor(0xffffff, canvasBackground.value);
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
        material.value.x,
        material.value.y,
        material.value.z
      );
      bloomPass.renderToScreen = true;
      COMPOSER.addPass(bloomPass);
    }

    function initControls() {
      CONTROLS = new OrbitControls(CAMERA, RENDERER.domElement);
      CONTROLS.enableZoom = false;
      CONTROLS.minPolarAngle = Math.PI / 32;
      CONTROLS.maxPolarAngle = Math.PI * 32;
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
      TIME += speedEffect.value / 1000;
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
        sphereForm.value.x,
        sphereForm.value.y,
        sphereForm.value.z
      );
      const modelColors = `
        uniform float uTime;
        varying vec3 vNormal;
        void main() {
          vec3 color1 = ${vecColor1.value};
          vec3 color2 = ${vecColor2.value};
          gl_FragColor = vec4(mix(color1, color2, vNormal.${colorDir.value}), ${colorSplit.value});
        }
      `;
      const vertex = `
        uniform float uTime;     
        varying vec3 vNormal;
        void main() {
            vNormal = normal;
            vec3 delta = ${vertexXYZ.value.x}.0 * normal * sin(normal.x + normal.y * ${vertexXYZ.value.y}.0 + normal.z + uTime * ${vertexXYZ.value.z}.0);
            vec3 newPosition = position + delta;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }`;
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: TIME },
        },
        transparent: transparentMaterial.value,
        side: THREE.DoubleSide,
        vertexShader: vertex,
        fragmentShader: modelColors,
      });
      const sphere = new THREE.Mesh(geometry, shaderMaterial);
      SCENE.add(sphere);
    }

    function updateCoordinates() {
      store.avatarConfig.position = CAMERA.position;
      console.log(store.avatarConfig.position);
    }

    return {
      store,
      updateCoordinates,
    };
  },
});
</script>
