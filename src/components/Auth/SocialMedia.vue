<template>
  <div id="container">
    <p>{{ title }}</p>
    <ion-button
      color="btnfacebook"
      expand="block"
      :routerLink="{ name: 'home' }"
    >
      <ion-icon slot="start" :icon="logoFacebook" />
      Facebook
    </ion-button>

    <ion-button :routerLink="{ name: 'home' }" color="secondary" expand="block">
      <ion-icon slot="start" :icon="logoTwitter" />
      Google
    </ion-button>

    <ion-button :routerLink="{ name: 'home' }" color="btngoogle" expand="block">
      <ion-icon slot="start" :icon="logoGoogle" />
      Google
    </ion-button>
  </div>
</template>

<script >
import { IonIcon, IonButton } from "@ionic/vue";
import { logoFacebook, logoTwitter, logoGoogle } from "ionicons/icons";

export default {
  name: "SocialMedia",
  props: {
    title: String,
  },
  components: {
    IonIcon,
    IonButton,
  },
  data() {
    return {
      logoFacebook,
      logoTwitter,
      logoGoogle,
    };
  },
};
</script>

<style scoped>
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

.buttons {
  margin: 24px;
  text-align: center;
}
.buttons a {
  margin-top: 24px;
}
</style>