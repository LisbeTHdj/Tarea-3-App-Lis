<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Traductor de Números</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Traductor</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">Números a Letras en Español</strong>
        
        <div class="input-section">
          <ion-item>
            <ion-label position="stacked">Número (1-1000)</ion-label>
            <ion-input
              type="number"
              v-model="numero"
              placeholder="Ingresa un número del 1 al 1000"
              min="1"
              max="1000">
            </ion-input>
          </ion-item>
          
          <div class="button-group">
            <ion-button 
              @click="traducir"
              color="primary"
              size="large">
              Traducir a Letras
            </ion-button>
            
            <ion-button 
              @click="limpiar"
              color="secondary"
              fill="outline"
              size="large">
              Limpiar
            </ion-button>
          </div>
        </div>

        <!-- Resultado -->
        <div v-if="numeroEnLetras" class="resultado-container">
          <div class="numero-original">{{ numero }}</div>
          <div class="flecha">↓</div>
          <div class="numero-letras">{{ numeroEnLetras }}</div>
        </div>

        <p v-else>Ingresa un número en el recuadro</p>
      </div>

      <!-- Alert para errores -->
      <ion-alert
        :is-open="showAlert"
        @didDismiss="showAlert = false"
        header="Error"
        :message="alertMessage"
        :buttons="['OK']">
      </ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert
} from '@ionic/vue';

const numero = ref<string>('');
const numeroEnLetras = ref<string>('');
const showAlert = ref<boolean>(false);
const alertMessage = ref<string>('');

// Arrays para convertir números a letras (SIN USAR APIs)
const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const veintenas = ['veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

const convertirUnidad = (num: number): string => {
  if (num === 0) return '';
  return unidades[num];
};

const convertirDecena = (num: number): string => {
  if (num < 10) return convertirUnidad(num);
  if (num >= 10 && num < 20) return especiales[num - 10];
  if (num >= 20 && num < 30) return veintenas[num - 20];
  
  const dec = Math.floor(num / 10);
  const uni = num % 10;
  
  if (uni === 0) return decenas[dec];
  return decenas[dec] + ' y ' + unidades[uni];
};

const convertirCentena = (num: number): string => {
  if (num === 0) return '';
  if (num === 100) return 'cien';
  if (num < 100) return convertirDecena(num);
  
  const cen = Math.floor(num / 100);
  const resto = num % 100;
  
  if (resto === 0) return centenas[cen];
  return centenas[cen] + ' ' + convertirDecena(resto);
};

const numeroALetras = (num: number): string => {
  if (num === 0) return 'cero';
  if (num === 1000) return 'mil';
  
  if (num < 1000) {
    return convertirCentena(num);
  }
  
  return 'Número fuera de rango';
};

const traducir = () => {
  const num = parseInt(numero.value);
  
  if (isNaN(num)) {
    alertMessage.value = 'Por favor, ingresa un número válido';
    showAlert.value = true;
    return;
  }
  
  if (num < 1 || num > 1000) {
    alertMessage.value = 'El número debe estar entre 1 y 1000';
    showAlert.value = true;
    return;
  }
  
  const resultado = numeroALetras(num);
  numeroEnLetras.value = resultado;
};

const limpiar = () => {
  numero.value = '';
  numeroEnLetras.value = '';
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
  max-width: 500px;
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
}

.input-section {
  margin: 20px 0;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.resultado-container {
  margin: 30px 0;
  padding: 20px;
  background: #f0f8ff;
  border-radius: 12px;
  border: 2px solid #3880ff;
}

.numero-original {
  font-size: 24px;
  font-weight: bold;
  color: #3880ff;
  margin-bottom: 10px;
}

.flecha {
  font-size: 20px;
  color: #666;
  margin: 10px 0;
}

.numero-letras {
  font-size: 18px;
  color: #333;
  font-weight: 500;
  text-transform: capitalize;
  font-style: italic;
}

@media (max-width: 768px) {
  .button-group {
    flex-direction: column;
  }
}
</style>