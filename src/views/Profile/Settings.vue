
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Settings</ion-title>
        <ion-buttons>
          <ion-back-button
            :text="getBackButtonText()"
            default-href="/user/profile"
          />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header><ion-label>Settings</ion-label></ion-list-header>
        <ion-item>
          <ion-icon slot="start" :icon="notificationsOutline" />
          <ion-label>Enable notifications</ion-label>
          <ion-toggle slot="end" name="notifications"></ion-toggle>
        </ion-item>
        <ion-list-header>
          <ion-label>Support & Feedback</ion-label>
        </ion-list-header>
        <ion-item detail>
          <ion-icon slot="start" :icon="notificationsOutline" />
          <ion-label>Contact Us</ion-label>
        </ion-item>
        <ion-item detail>
          <ion-icon slot="start" :icon="helpCircleOutline" />
          <ion-label>Help</ion-label>
        </ion-item>
        <ion-item detail>
          <ion-icon slot="start" :icon="informationCircleOutline" />
          <ion-label>About</ion-label>
        </ion-item>
        <ion-item detail>
          <ion-icon slot="start" :icon="lockClosedOutline" />
          <ion-label>Privacy</ion-label>
        </ion-item>
        <ion-item detail><ion-label>Log out</ion-label></ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonIcon,
  IonToggle,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

import {
  notificationsOutline,
  helpCircleOutline,
  informationCircleOutline,
  lockClosedOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "Settings",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonIcon,
    IonToggle,
    IonButtons,
    IonBackButton,
  },
  data() {
    return {
      getBackButtonText: () => {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === "ios" ? "Profile" : "";
      },
      notificationsOutline,
      helpCircleOutline,
      informationCircleOutline,
      lockClosedOutline,
    };
  },
});
</script>

<style scoped>
</style>
  