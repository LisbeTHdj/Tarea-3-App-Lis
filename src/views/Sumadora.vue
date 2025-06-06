<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Sumadora</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Sumadora</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">Calculadora de Suma</strong>
        
        <div class="input-section">
          <div class="input-group">
            <ion-item>
              <ion-label position="stacked">Primer Número</ion-label>
              <ion-input 
                type="number" 
                v-model="numero1" 
                placeholder="Ingresa el primer número">
              </ion-input>
            </ion-item>
            
            <div class="operador">+</div>
            
            <ion-item>
              <ion-label position="stacked">Segundo Número</ion-label>
              <ion-input 
                type="number" 
                v-model="numero2" 
                placeholder="Ingresa el segundo número">
              </ion-input>
            </ion-item>
          </div>
          
          <div class="button-group">
            <ion-button 
              @click="sumar" 
              color="primary"
              size="large">
              Calcular
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
        <div v-if="resultado !== null" class="resultado-container">
          <div class="resultado">
            {{ numero1 }} + {{ numero2 }} = <strong>{{ resultado }}</strong>
          </div>
        </div>

        <p v-else>Ingresa dos números para ver el resultado de la suma</p>
      </div>

      <!-- Alert para errores -->
      <ion-alert
        :is-open="showAlert"
        @didDismiss="showAlert = false"
        header="Error"
        message="Por favor, ingresa números válidos"
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

const numero1 = ref<number>(0);
const numero2 = ref<number>(0);
const resultado = ref<number | null>(null);
const showAlert = ref<boolean>(false);

const sumar = () => {
  const num1 = Number(numero1.value);
  const num2 = Number(numero2.value);
  
  if (isNaN(num1) || isNaN(num2)) {
    showAlert.value = true;
    return;
  }
  
  resultado.value = num1 + num2;
};

const limpiar = () => {
  numero1.value = 0;
  numero2.value = 0;
  resultado.value = null;
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
  max-width: 400px;
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

.input-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.operador {
  font-size: 24px;
  font-weight: bold;
  color: #3880ff;
  margin: 10px 0;
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

.resultado {
  font-size: 18px;
  color: #333;
}

.resultado strong {
  font-size: 24px;
  color: #3880ff;
  display: inline;
}

@media (max-width: 768px) {
  .button-group {
    flex-direction: column;
  }
}
</style>