<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title> {{ destinationDetail.name }} </ion-title>
        <ion-buttons>
          <ion-back-button
            :text="getBackButtonText()"
            default-href="/explorer/"
          />
        </ion-buttons>

        <ion-buttons slot="end">
          <ion-button color="primary">
            <ion-icon slot="icon-only" :icon="shareSocialOutline"></ion-icon>
          </ion-button>
          <ion-button color="primary">
            <ion-icon slot="icon-only" :icon="starOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ destinationDetail.name }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card class="my-card">
              <img
                class="my-card-image"
                :src="`places/${destinationDetail.image}`"
                :alt="destinationDetail.name"
              />
              <ion-card-header>
                <ion-card-title>{{ destinationDetail.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                magnam rerum, laboriosam debitis in ducimus illum cupiditate
                reiciendis assumenda ipsa accusantium veritatis esse! Sed quas,
                obcaecati ipsum quae consequatur ipsam.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div class="ion-text-center">
              <h4>Top Experiences in {{ destinationDetail.name }}</h4>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            offset-xs
            size="6"
            class="ion-align-self-start"
            v-for="(experience, index) in destinationDetail.experiences"
            :key="index"
          >
            <ion-card
              :button="true"
              :router-link="{
                name: 'ExperienceDetail',
                params: { experienceSlug: experience.slug },
              }"
              class="my-card"
            >
              <img
                class="card-image"
                :src="`places/${experience.image}`"
                :alt="destinationDetail.name"
              />
              <ion-card-header>
                <ion-label>{{ experience.name }} </ion-label>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script >
/* eslint-disable */
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonItemDivider,
} from "@ionic/vue";
import { defineComponent, onMounted, computed, toRefs } from "vue";
import { useStore } from "vuex";
//import { useRoute, useRouter } from "vue-router";
import { shareSocialOutline, starOutline } from "ionicons/icons";

export default defineComponent({
  name: "DestinationDetail",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonItemDivider,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { slug } = toRefs(props);
    const store = useStore();

    //const router = useRouter()
    //const route = useRoute();
    // let message = ref(null);
    //message = store.state.messages.filter((msg) => msg.id == route.params.id)[0];

    const destinationDetail = computed(() => {
      return store.state.destinations.find(
        (destination) => destination.slug === slug.value
      );
    });

    const getBackButtonText = () => {
      const win = window;
      const mode = win && win.Ionic && win.Ionic.mode;
      return mode === "ios" ? "Explorer" : "";
    };

    return {
      getBackButtonText,
      destinationDetail,
      /* Icons */
      shareSocialOutline,
      starOutline,
    };
  },
});
</script>

<style scoped>
.my-card {
  padding: 0px !important;
  margin: 0px !important;
}
.my-card-image {
  width: 100%;
}
</style>