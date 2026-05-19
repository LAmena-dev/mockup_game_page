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
      <q-carousel-slide :name="1" img-src="classes/Fairy/Fairy.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5 textRaise">Fairy</div>
        </div> -->
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="classes/Fairy/FaWarrior.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5">Warrior</div>
        </div> -->
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="classes/Fairy/FaSorcerer.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5">Sorcerer</div>
        </div> -->
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="classes/Fairy/FaRanger.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5">Ranger</div>
        </div> --> </q-carousel-slide
      ><q-carousel-slide :name="5" img-src="classes/Fairy/FaSage.png">
        <!-- <div class="absolute-top custom-caption">
          <div class="text-h5">Sage</div>
        </div> -->
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FaSlideShow',
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
