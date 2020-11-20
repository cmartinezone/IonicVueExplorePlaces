
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Explorer</ion-title>

        <ion-buttons slot="start">
          <ion-button color="primary">
            <ion-icon slot="icon-only" :icon="filterOutline"></ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-buttons slot="end">
          <ion-button @click="setSearchFocus()" color="primary">
            <ion-icon
              slot="icon-only"
              :icon="enableSearch ? closeOutline : search"
            ></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-toolbar class="my-searchbar" v-if="enableSearch">
        <ion-searchbar
          ref="inputElement"
          :animated="true"
          color="medium"
          v-model="searchInput"
          inputmode="search"
          placeholder="Search place..."
        />
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="!searchInput">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Explorer</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card
        v-for="(destination, index) in store.state.destinations"
        :key="index"
        :router-link="{
          name: 'DestinationDetail',
          params: { slug: destination.slug },
        }"
      >
        <img
          class="my-card-image"
          :src="`places/${destination.image}`"
          :alt="destination.name"
        />
        <ion-card-header>
          <ion-card-subtitle>Destination</ion-card-subtitle>
          <ion-card-title>{{ destination.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content> </ion-card-content>
      </ion-card>
    </ion-content>
    <NoResults v-if="noCards" :nocards="true" :msg="'No places'" />
    <NoResults v-if="searchInput" :msg="'No Results'" />
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
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonSearchbar,
} from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { search, filterOutline, closeOutline } from "ionicons/icons";

import NoResults from "@/components/Explorer/NoResults.vue";

export default defineComponent({
  name: "Explorer",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSearchbar,

    /* My Components */
    NoResults,
  },
  setup() {
    const enableSearch = ref(false);
    const noCards = ref(false);
    const searchInput = ref(null);
    const inputElement = ref(null);

    /* Vuex store */
    const store = useStore();

    /* Router */
    const router = useRouter();

    const setSearchFocus = () => {
      enableSearch.value = !enableSearch.value;
      if (enableSearch.value) {
        setTimeout(() => inputElement.value.$el.setFocus(), 600);
      } else {
        searchInput.value = null;
      }
    };

    onMounted(() => {
      /*  */
    });

    return {
      /* Data */
      enableSearch,
      searchInput,
      noCards,
      inputElement,

      /* Vuex / Router */
      store,
      router,

      /* Methods */
      setSearchFocus,

      /* Icons */
      search,
      filterOutline,
      closeOutline,
    };
  },
});
</script>

<style scoped>
.my-searhbar {
  height: 10px;
}
.my-card-image {
  width: 100%;
}
</style>
  