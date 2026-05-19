<template>
  <q-page>
    <div class="game-intro">
      <!-- Full-Width Scrollable Image Section
      <div class="image-section">
        <img
          src="https://static0.hardcoregamerimages.com/wordpress/wp-content/uploads/2013/05/08-12-12.jpg?fbclid=IwY2xjawHCfONleHRuA2FlbQIxMAABHVpA7o0mFl-sdEn56C7ONvd1xWZq2-sIQj0HIaAK-GrfkiCc0IPYfRFfsw_aem_bz4Vz6yP78csiv10IFXdBQ"
          alt="Scrollable Image"
          class="main-image"
        />
      </div> -->

      <!-- About This Game Section -->
      <div class="about-section">
        <div class="about-content">
          <!-- Main Display: Video or Image -->
          <div class="about-image-wrapper">
            <div v-if="currentItem.type === 'video'">
              <video :src="currentItem.src" controls class="about-main-video"></video>
            </div>
            <div v-else>
              <img :src="currentItem.src" alt="Gallery Main Image" class="about-main-image" />
            </div>

            <!-- Thumbnail Gallery -->
            <div class="thumbnail-gallery q-ma-sm">
              <div
                v-for="(item, index) in galleryItems"
                :key="index"
                class="thumbnail-item q-mx-xs"
                :class="{ active: currentItem.src === item.src }"
                @click="currentItem = item"
              >
                <template v-if="item.type === 'video'">
                  <video :src="item.src" muted class="thumbnail-video"></video>
                </template>
                <template v-else>
                  <img :src="item.src" alt="'Thumbnail ' + (index + 1)" class="thumbnail-image" />
                </template>
              </div>
            </div>
          </div>

          <!-- Game Description -->
          <div class="about-text">
            <h2>About This Game</h2>
            <p>
              A call for brave adventurers awaits at the doors of Crostini Academy. Prepare yourself
              for a remastered classic dungeon crawler, full of exploration, combat, and endless
              opportunities. Take advantage of the classes and quests available to build the
              ultimate, hardy cohort of students!
            </p>
            <p>
              Build your perfect roster and handpick your ideal party of 6 students to storm the
              labyrinths. Mix and match from 10 races and 18 classes, each with their unique skill
              sets. Crawl through over 100 labyrinth maps facing over 250 potential enemies. Don’t
              forget to collect artifacts, explore inter-dimensional travel, and conquer adversity.
              You determine the standard you thrive at, taking note of recipes for weapons, potions,
              and any upgrades necessary.
            </p>
            <p>
              Within this year, groups of excited students will walk through the doors of Crostini
              Academy to learn the tools of the trade and leave as the next Class of Heroes!
            </p>
            <p class="bold-text">Do you have what it takes?</p>
          </div>
        </div>
      </div>

      <!-- Game Features Overview -->
      <div class="game-overview bg-primary">
        <h2 class="section-title">Game Features Overview</h2>
        <div class="features-container">
          <div class="feature-item">
            <img
              src="https://pqube.co.uk/wp-content/uploads/2023/11/ClassOfHeroes2G_Class1_screenshot.webp"
              alt="Feature 1"
              class="feature-img"
            />
            <h3 class="feature-title">Student Customisation</h3>
            <p class="feature-description">
              Select the name, gender, alignment, and course for this year's students. Distribute
              points across different abilities to determine the strengths of both your vanguard and
              rearguard adventurers.
            </p>
          </div>
          <div class="feature-item">
            <img
              src="https://pqube.co.uk/wp-content/uploads/2023/11/ClassOfHeroes2G_FierceSlash_screenshot.webp"
              alt="Feature 2"
              class="feature-img"
            />
            <h3 class="feature-title">MONSTERS</h3>
            <p class="feature-description">
              Enemies hunt your every move within the dungeons. Customise your team's tactics to
              counter any unwanted beasts, but make sure to retreat when you're not adequately
              prepared!
            </p>
          </div>
          <div class="feature-item">
            <img
              src="https://pqube.co.uk/wp-content/uploads/2023/11/ClassOfHeroes2G_dungeonMap2_screenshot.jpg"
              alt="Feature 3"
              class="feature-img"
            />
            <h3 class="feature-title">DANGEROUS DUNGEONS</h3>
            <p class="feature-description">
              The dungeons are filled with winding paths, diverse terrains and environments for your
              students to master. Through these experiences, true adventurers can be made!
              Exploration is the key!
            </p>
          </div>
          <div class="feature-item">
            <img
              src="https://pqube.co.uk/wp-content/uploads/2023/11/Cla2_Inventory_screenshot.jpg"
              alt="Feature 4"
              class="feature-img"
            />
            <h3 class="feature-title">EQUIPPING ITEMS</h3>
            <p class="feature-description">
              With a wide array of options for weapons, armour, and ability- granting accessories,
              you're never without a reliable source of protection by your side. Remember. The most
              adept adventurers are those who are ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'GameIntro',
  data() {
    return {
      galleryItems: [
        {
          type: 'video',
          src: 'https://video.cloudflare.steamstatic.com/store_trailers/257018322/movie480_vp9.webm?t=1714143945',
        },
        {
          type: 'image',
          src: 'https://pqube.co.uk/wp-content/uploads/2023/11/ClassOfHeroes2G_dungeonMap2_screenshot.jpg',
        },
        {
          type: 'image',
          src: 'https://pqube.co.uk/wp-content/uploads/2023/11/Cla2_Inventory_screenshot.jpg',
        },
        {
          type: 'image',
          src: 'https://pqube.co.uk/wp-content/uploads/2023/11/CLA2_recipe-1_screenshot.jpg',
        },
        {
          type: 'image',
          src: 'https://pqube.co.uk/wp-content/uploads/2023/11/ClassOfHeroes2G_FierceSlash_screenshot.webp',
        },
      ],
      currentItem: {
        type: 'video',
        src: 'https://video.cloudflare.steamstatic.com/store_trailers/257018322/movie480_vp9.webm?t=1714143945',
      },
    }
  },
}
</script>

<style scoped>
/* General Styles */
.game-intro {
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #1e1e2d;
}

/* Scrollable Main Image */
.image-section .main-image {
  width: 100%;
  height: auto;
  margin-bottom: 40px;
}

.about-section {
  padding: 40px 20px;
  color: white;
  position: relative;
  background:
    linear-gradient(rgba(30, 30, 45, 0.9), rgba(30, 30, 45, 0.9)),
    url('https://static0.hardcoregamerimages.com/wordpress/wp-content/uploads/2013/05/08-12-12.jpg?fbclid=IwY2xjawHCfONleHRuA2FlbQIxMAABHVpA7o0mFl-sdEn56C7ONvd1xWZq2-sIQj0HIaAK-GrfkiCc0IPYfRFfsw_aem_bz4Vz6yP78csiv10IFXdBQ')
      no-repeat center center;
  background-size: cover;
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}

.about-image-wrapper {
  flex: 1;
}

.about-main-video {
  width: 100%;
  border-radius: 8px;
}

.about-main-image {
  width: 100%;
  border-radius: 8px;
}

.thumbnail-gallery {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.thumbnail-item {
  width: 80px;
  height: 100px;
  cursor: pointer;
  opacity: 0.8;
  transition:
    opacity 0.3s,
    transform 0.3s;
  overflow: hidden;
}

.thumbnail-item:hover,
.thumbnail-item.active {
  opacity: 1;
  transform: scale(1.1);
}

.thumbnail-video,
.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.about-text {
  flex: 1;
  font-size: 1.3em;
}

.about-text h2 {
  color: #f05454;
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 15px;
  line-height: 1.6;
}

.bold-text {
  font-weight: bold;
}

/* Game Features Section */
.game-overview {
  padding: 40px 20px;
  background-color: #2a2a40;
  color: white;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature-item {
  background: #14110d;
  text-align: center;
  padding: 15px;
  border-radius: 8px;
}

.feature-img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.feature-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 1.3em;
  color: #bbb;
}
</style>
