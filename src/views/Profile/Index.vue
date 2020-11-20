
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>@cmartniezone</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear" :routerLink="{ name: 'settings' }">
            <ion-icon :icon="cogOutline" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="avatar">
        <img
          src="https://avatars1.githubusercontent.com/u/6591344?s=460&u=043e4ecae76df7e50ff1ae5b223fa6d182ec76f1&v=4"
        />
      </div>
      <div class="info">
        <h2>CMartinezOne</h2>
        <p>A very cool App</p>
      </div>
      <hr />
      <div>
        <h3 class="ion-padding">Visited places</h3>
        <ion-grid>
          <ion-row>
            <ion-col><div class="post"></div></ion-col>
            <ion-col><div class="post"></div></ion-col>
            <ion-col><div class="post"></div></ion-col>
          </ion-row>
          <ion-row>
            <ion-col><div class="post"></div></ion-col>
            <ion-col><div class="post"></div></ion-col>
            <ion-col><div class="post"></div></ion-col>
          </ion-row>
          <ion-row>
            <ion-col><div class="post"></div></ion-col>
            <ion-col><div class="post"></div></ion-col>
            <ion-col><div class="post"></div></ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { cogOutline } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Profile",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },

  setup() {
    return {
      cogOutline,
    };
  },
});
</script>

<style scoped>
.avatar {
  margin: 16px;
  text-align: center;
}
.avatar img {
  width: 96px;
  height: 96px;
}
.info {
  margin: 16px 0;
  text-align: center;

  h2 {
    font-size: 14px;
  }
}
.post {
  width: 100%;
  height: 64px;
  background-color: #eee;
}

.ion-icon {
  font-size: 20px;
}
</style>
  