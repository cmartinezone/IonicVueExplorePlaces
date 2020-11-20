<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title> {{ experienceDetail.name }} </ion-title>
        <ion-buttons>
          <ion-back-button
            :text="getBackButtonText()"
            :default-href="`/explorer/destination/${slug}`"
          />
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button color="primary">
            <ion-icon slot="icon-only" :icon="shareSocialOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ experienceDetail.name }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card class="my-card">
              <img
                class="my-card-image"
                :src="`places/${experienceDetail.image}`"
                :alt="experienceDetail.name"
              />
              <ion-card-header>
                <ion-card-title></ion-card-title>
              </ion-card-header>
              <ion-card-content
                >{{ experienceDetail.description }}
              </ion-card-content>
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
import { shareSocialOutline } from "ionicons/icons";

export default defineComponent({
  name: "ExperienceDetail",
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
    experienceSlug: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { slug, experienceSlug } = toRefs(props);
    const store = useStore();

    const destinationDetail = computed(() => {
      return store.state.destinations.find(
        (destination) => destination.slug === slug.value
      );
    });

    const experienceDetail = computed(() => {
      let experience = null;
      if (experienceSlug) {
        experience = destinationDetail.value.experiences.find(
          (experience) => experience.slug === experienceSlug.value
        );
      }
      return experience;
    });

    const getBackButtonText = () => {
      const win = window;
      const mode = win && win.Ionic && win.Ionic.mode;
      return mode === "ios" ? destinationDetail.value.name : "";
    };

    return {
      getBackButtonText,
      experienceDetail,

      /* Icons */
      shareSocialOutline,
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