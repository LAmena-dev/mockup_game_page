<template>
  <q-img
    src="backgrounds/background.png"
    class="dimmed"
    style="background-size: cover; height: 100%; position: fixed"
  />
  <q-page>
    <div class="fixed-center flex flex-center row full-width text-white">
      <div class="col q-pa-md text-center">
        <q-video
          class="shadow-20"
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/1PEcCd1hLIw?rel=0"
        />
      </div>
      <div
        style="
          align-items: center;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          height: 468px;
          opacity: 1;
        "
        class="col q-ma-md text-center text-h5 shadow-20 vertical-middle"
      >
        <div id="sourGummy" class="q-ma-md" style="flex: 1; min-width: 0">
          Are you ready to take on dark winding dungeons crawling with magic and monsters? Prepare
          yourself for a remastered classic dungeon crawler, full of exploration, combat, and
          endless opportunities.
        </div>
        <div>
          <img src="char_image.png" style="width: 350px" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
