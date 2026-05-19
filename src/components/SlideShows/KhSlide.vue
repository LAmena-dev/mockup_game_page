<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="height: 400px; width: 400px"
    >
      <q-carousel-slide :name="1" img-src="classes/Khulaz/Khulaz.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5 textRaise">Khulaz</div>
        </div> -->
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="classes/Khulaz/KhWarrior.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5">Warrior</div>
        </div> -->
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="classes/Khulaz/KhNinja.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5">Ninja</div>
        </div> -->
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="classes/Khulaz/KhPuppeteer.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5">Puppeteer</div>
        </div> --> </q-carousel-slide
      ><q-carousel-slide :name="5" img-src="classes/Khulaz/KhGeomancer.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5">Geomancer</div>
        </div> -->
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'KhSlideShow',
  setup() {
    return {
      slide: ref(1),
    }
  },
}
</script>

<style>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

.q-carousel {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
