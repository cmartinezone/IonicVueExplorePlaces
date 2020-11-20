<template>
  <ion-content>
    <div id="container">
      <ion-icon
        slot="start"
        :icon="nocards ? walletOutline : searchCircleOutline"
      />
      <br />
      <strong>{{ msg }}</strong>
    </div>
  </ion-content>
</template>

<script >
import { IonContent, IonIcon } from "@ionic/vue";

import { defineComponent } from "vue";

import { walletOutline, searchCircleOutline } from "ionicons/icons";

export default defineComponent({
  name: "NoBCards",
  props: {
    msg: String,
    nocards: Boolean,
  },
  components: {
    IonIcon,
    IonContent,
  },
  data() {
    return {
      walletOutline,
      searchCircleOutline,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
ion-icon {
  opacity: 0.5;
  font-size: 45px;
}

#container strong {
  transform: translate(-50%, -50%);
  opacity: 0.5;
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>