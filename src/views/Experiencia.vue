<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Experiencia Personal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mi Experiencia</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">Video de Experiencia Personal</strong>
        
        <!-- Icono de video -->
        <div class="video-icon">
          <ion-icon :icon="videocam" class="main-icon"></ion-icon>
        </div>
        
        <!-- Descripción -->
        <div class="descripcion">
          <p class="video-descripcion">
            En este video explico mi experiencia desarrollando esta aplicación 
            con Ionic y Vue.js.
          </p>
        </div>

        <!-- Iframe del video de YouTube -->
        <div class="video-container">
          <iframe
            :src="videoUrl"
            title="Video de Experiencia Personal"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="video-iframe">
          </iframe>
        </div>
        
        <!-- Botón para abrir en YouTube -->
        <div class="button-section">
          <ion-button 
            @click="abrirVideo"
            color="danger"
            size="large">
            <ion-icon :icon="logoYoutube" slot="start"></ion-icon>
            Ver en YouTube
          </ion-button>
        </div>

        <p>Lisbeth De Jesus G. 2023-0287</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton,
  IonIcon
} from '@ionic/vue';
import { videocam, logoYoutube, time, person } from 'ionicons/icons';

// TU VIDEO DE YOUTUBE ACTUALIZADO
const videoUrl = "https://www.youtube.com/embed/hhKvumFiXsw";
const videoUrlDirect = "https://youtu.be/hhKvumFiXsw";

const abrirVideo = () => {
  window.open(videoUrlDirect, "_blank");
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  color: #3880ff;
  display: block;
  margin-bottom: 20px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 20px 0 0 0;
  font-style: italic;
}

.video-icon {
  margin: 20px 0;
}

.main-icon {
  font-size: 48px;
  color: #3880ff;
}

.descripcion {
  margin: 20px 0;
}

.video-descripcion {
  font-size: 16px;
  color: #666;
  line-height: 24px;
  margin: 0;
  font-style: normal;
}

.video-container {
  margin: 25px 0;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.button-section {
  margin: 20px 0;
}

.info-video {
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
}

.info-icon {
  font-size: 16px;
  color: #3880ff;
}

@media (max-width: 768px) {
  .video-container {
    margin: 20px -10px;
  }
}
</style>