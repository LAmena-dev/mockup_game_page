<template>
  <q-page class="bg-gradient full-width">
    <div class="container q-mt-xl">
      <!-- Content Section -->
      <div class="row content-section q-my-lg q-mt-xl">
        <!-- Image Section -->
        <div class="col image-section">
          <q-img
            src="char_image.png"
            class="promo-image q-mt-xl"
            style="width: 400px; top: 20px; z-index: 1"
          />
        </div>

        <!-- SNS Section -->
        <div class="col sns-section">
          <h2 class="section-title">OFFICIAL SNS</h2>
          <div class="sns-buttons q-my-md">
            <!-- Twitter -->
            <q-img
              src="link_pics/twitter.png"
              class="sns-icon q-ma-sm"
              @click="openLink('https://x.com/PQubeGames')"
            />
            <!-- Facebook -->
            <q-img
              src="link_pics/facebook.png"
              class="sns-icon q-ma-sm"
              @click="openLink('https://www.facebook.com/PQubeAsia')"
            />
            <!-- Instagram -->
            <q-img
              src="link_pics/insta.png"
              class="sns-icon q-ma-sm"
              @click="openLink('https://www.instagram.com/pqubegames/')"
            />
            <!-- YouTube -->
            <q-img
              src="link_pics/youtube.png"
              class="sns-icon q-ma-sm"
              @click="openLink('https://www.youtube.com/channel/UCxFuaOew_PN5H1gXCPHH6rw')"
            />
          </div>
        </div>
      </div>

      <!-- Download Section -->
      <div class="download-section absolute-bottom">
        <h2 class="section-title">Download NOW</h2>
        <div class="row justify-center q-my-md">
          <!-- Windows Client -->
          <!-- <q-img
            src="https://p7.hiclipart.com/preview/13/230/408/microsoft-store-app-store-windows-phone-store-microsoft-store.jpg"
            class="download-icon q-ma-sm"
            @click="
              openLink(
                'https://store.steampowered.com/app/2195780/Class_of_Heroes_Anniversary_Edition/',
              )
            "
          /> -->
          <!-- Steam -->
          <q-img
            src="link_pics/steam.png"
            class="download-icon q-ma-sm"
            @click="
              openLink(
                'https://store.steampowered.com/app/2195780/Class_of_Heroes_Anniversary_Edition/',
              )
            "
          />
          <!-- Nintendo -->
          <q-img
            src="link_pics/nintendo.png"
            class="download-icon q-ma-sm"
            @click="
              openLink(
                'https://www.nintendo.com/us/store/products/class-of-heroes-1-and-2-complete-edition-switch/',
              )
            "
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SocialLinksPage',
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
.full-width {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(to bottom, #d2869d, #a16da3);
  color: white;
  padding-top: 30px;
}

.container {
  max-width: 1200px;
  width: 100%;
}

/* Section Titles */
.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;
}

.content-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

.promo-image {
  width: 100%;
  max-width: 500px;
  height: auto;
}

/* SNS Section */
.sns-section {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.sns-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.sns-icon {
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 50%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: white;
}

.sns-icon:hover {
  transform: scale(1.2);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

/* Download Section */
.download-section {
  width: 100%;
  background-color: #f0f0f0;
  padding: 30px 0;
  margin-top: 30px;
  text-align: center;
}

.download-icon {
  width: 160px;
  height: 60px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.download-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .content-section {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .sns-buttons {
    flex-wrap: wrap;
  }

  .promo-image {
    max-width: 100%;
  }

  .sns-icon {
    width: 70px;
    height: 70px;
  }

  .download-icon {
    width: 140px;
    height: 50px;
  }
}
</style>
