
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sign up</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <img
        class="logo"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMSI+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjNEE4QUY5IiBkPSJNMjU2LDEzOS4zYy02NC4zLDAtMTE2LjcsNTIuMy0xMTYuNywxMTYuN2MwLDY0LjMsNTIuMywxMTYuNywxMTYuNywxMTYuN1MzNzIuNywzMjAuMywzNzIuNywyNTYKCQkJQzM3Mi43LDE5MS43LDMyMC4zLDEzOS4zLDI1NiwxMzkuM3oiLz4KCQk8Zz4KCQkJPGNpcmNsZSBmaWxsPSIjNEE4QUY5IiBjeD0iNDIzLjUiIGN5PSI5Ni41IiByPSI1My4yIi8+CgkJPC9nPgoJCTxwYXRoIGZpbGw9IiM0QThBRjkiIGQ9Ik00ODksMTQ5LjlsLTIuMi00LjlsLTMuNiw0Yy04LjcsOS45LTE5LjgsMTcuNS0zMi4xLDIyLjFsLTMuNCwxLjNsMS40LDMuM2MxMC42LDI1LjUsMTYsNTIuNSwxNiw4MC4yCgkJCWMwLDExNS4zLTkzLjgsMjA5LjItMjA5LjIsMjA5LjJTNDYuOCwzNzEuMyw0Ni44LDI1NlMxNDAuNyw0Ni44LDI1Niw0Ni44YzMxLjMsMCw2MS41LDYuOCw4OS42LDIwLjJsMy4zLDEuNmwxLjQtMy4zCgkJCWM1LjEtMTIsMTMuMy0yMi43LDIzLjYtMzFsNC4yLTMuNGwtNC44LTIuNUMzMzYuOCw5LjYsMjk3LjMsMCwyNTYsMEMxMTQuOCwwLDAsMTE0LjgsMCwyNTZjMCwxNDEuMiwxMTQuOCwyNTYsMjU2LDI1NgoJCQlzMjU2LTExNC44LDI1Ni0yNTZDNTEyLDIxOS4xLDUwNC4zLDE4My40LDQ4OSwxNDkuOXoiLz4KCTwvZz4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+CjwvZz4KPGcgaWQ9IkxheWVyXzMiPgo8L2c+Cjwvc3ZnPgo="
      />
      <form>
        <ion-list>
          <ion-item>
            <ion-label>Name</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Password</ion-label>
            <ion-input type="password"></ion-input>
          </ion-item>
        </ion-list>
      </form>
      <div class="buttons">
        <ion-button expand="block" :routerLink="{ name: 'home' }"
          >Sign up</ion-button
        >
        <ion-button
          color="light"
          expand="block"
          :routerLink="{ name: 'login' }"
        >
          Already have an account?
        </ion-button>
      </div>

      <div class="buttons">
        <SocialMediaAuth title="SingUp with" />
      </div>
    </ion-content>
  </ion-page>
</template>


<script >
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

import SocialMediaAuth from "@/components/Auth/SocialMedia.vue";

export default defineComponent({
  name: "Signup",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,

    /* My Components */
    SocialMediaAuth,
  },
});
</script>

<style scoped>
.logo {
  display: block;
  margin: 24px auto;
  max-height: 96px;
}
.buttons {
  margin: 24px;
  text-align: center;
}
.buttons a {
  margin-top: 24px;
}
</style>
  