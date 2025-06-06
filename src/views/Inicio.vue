<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Página Inicial</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Datos Personales</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <!-- Foto 2x2 -->
        <div class="foto-container">
          <img src="/assets/FotoLis.jpg" alt="Mi foto 2x2" class="foto-2x2">
        </div>

        <!-- Información Personal -->
        <div class="info-section">
          <div class="info-item">
            <strong>Nombre:</strong>
            <p>Lisbeth</p> 
          </div>

          <div class="info-item">
            <strong>Apellido:</strong>
            <p>De Jesus Geronimo</p> 
          </div>

          <div class="info-item">
            <strong>Correo Electrónico:</strong>
            <p>20230287@itla.edu.do</p> 
          </div>

          <div class="info-item">
            <strong>Matrícula:</strong>
            <p>20230287</p> 
          </div>
        </div>

        <div class="footer-info">
          <p>Tarea 3 - Lisbeth</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { person, mail, school } from 'ionicons/icons';
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
}

.foto-container {
  margin-bottom: 30px;
}

.foto-2x2 {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid #3880ff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.info-section {
  margin: 20px 0;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  gap: 10px;
}

.info-icon {
  color: #3880ff;
  font-size: 20px;
}

.info-item strong {
  font-size: 18px;
  line-height: 24px;
  color: #3880ff;
  min-width: 120px;
  text-align: right;
}

.info-item p {
  font-size: 18px;
  line-height: 24px;
  color: #333;
  margin: 0;
  font-weight: 500;
  text-align: left;
  min-width: 200px;
}

.footer-info {
  margin-top: 30px;
}

.footer-info p {
  font-size: 14px;
  line-height: 20px;
  color: #8c8c8c;
  margin: 0;
  font-style: italic;
}

/* Responsive para móviles */
@media (max-width: 768px) {
  .info-item {
    flex-direction: column;
    gap: 5px;
  }
  
  .info-item strong,
  .info-item p {
    text-align: center;
    min-width: auto;
  }
  
  .foto-2x2 {
    width: 120px;
    height: 120px;
  }
}
</style>