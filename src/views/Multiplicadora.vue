<template>
 <ion-page>
   <ion-header :translucent="true">
     <ion-toolbar>
       <ion-buttons slot="start">
         <ion-menu-button color="primary"></ion-menu-button>
       </ion-buttons>
       <ion-title>Tabla de Multiplicar</ion-title>
     </ion-toolbar>
   </ion-header>

   <ion-content :fullscreen="true">
     <ion-header collapse="condense">
       <ion-toolbar>
         <ion-title size="large">Tabla de Multiplicar</ion-title>
       </ion-toolbar>
     </ion-header>

     <div id="container">
       <strong class="capitalize">Generador de Tabla de Multiplicar</strong>
       
       <div class="input-section">
         <ion-item>
           <ion-label position="stacked">Inserte un número</ion-label>
           <ion-input
             type="number"
             v-model="numero"
             placeholder="Ejemplo: 5"
             @keyup.enter="generarTabla">
           </ion-input>
         </ion-item>
         
         <div class="button-group">
           <ion-button 
             @click="generarTabla"
             color="primary"
             size="large"
             :disabled="!numero">
             Generar Tabla
           </ion-button>
           
           <ion-button 
             @click="limpiar"
             color="secondary"
             fill="outline"
             size="large"
             v-if="tabla.length > 0">
             Limpiar
           </ion-button>
         </div>
       </div>

       <!-- Resultado de la tabla -->
       <div v-if="tabla.length > 0" class="tabla-container">
         <div class="tabla-title">Tabla del {{ numero }}</div>
         <div class="tabla-grid">
           <div 
             v-for="(item, index) in tabla" 
             :key="index"
             class="tabla-item"
             :class="{ destacado: item.multiplicador === 10 }">
             {{ numero }} × {{ item.multiplicador }} = {{ item.resultado }}
           </div>
         </div>
       </div>

       <p v-else>Inserte un número para generar su tabla de multiplicar</p>
     </div>

     <!-- Alert para errores -->
     <ion-alert
       :is-open="showAlert"
       @didDismiss="showAlert = false"
       header="Error"
       message="Por favor, ingresa un número válido"
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

interface TablaItem {
 multiplicador: number;
 resultado: number;
}

const numero = ref<string>('');
const tabla = ref<TablaItem[]>([]);
const showAlert = ref<boolean>(false);

const generarTabla = () => {
 const num = parseInt(numero.value);
 
 if (isNaN(num) || num <= 0) {
   showAlert.value = true;
   return;
 }
 
 const nuevaTabla: TablaItem[] = [];
 for (let i = 1; i <= 13; i++) {
   nuevaTabla.push({
     multiplicador: i,
     resultado: num * i
   });
 }
 
 tabla.value = nuevaTabla;
};

const limpiar = () => {
 numero.value = '';
 tabla.value = [];
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

.tabla-container {
 margin: 30px 0;
 max-height: 400px;
 overflow-y: auto;
}

.tabla-title {
 font-size: 18px;
 font-weight: bold;
 color: #3880ff;
 margin-bottom: 15px;
}

.tabla-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
 gap: 8px;
 padding: 15px;
 background: #f8f9fa;
 border-radius: 12px;
}

.tabla-item {
 background: white;
 padding: 10px;
 border-radius: 8px;
 box-shadow: 0 2px 4px rgba(0,0,0,0.1);
 font-weight: 500;
 font-size: 14px;
 color: #333;
 transition: all 0.2s;
}

.tabla-item:hover {
 transform: translateY(-2px);
 box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.tabla-item.destacado {
 background: #3880ff;
 color: white;
 font-weight: bold;
}

@media (max-width: 768px) {
 .button-group {
   flex-direction: column;
 }
 
 .tabla-grid {
   grid-template-columns: 1fr;
 }
 
 .tabla-item {
   font-size: 16px;
   padding: 12px;
 }
}
</style>
