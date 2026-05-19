<template>
  <q-img
    src="backgrounds/background2.png"
    class="dimmed"
    style="background-size: cover; height: 100%; position: fixed"
  />
  <q-page class="text-white text-body1">
    <!-- content -->

    <div class="flex-center full-width row q-my-xl">
      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Human</div>
            Race Skill: None
            <br />Likes all races <br class="q-my-sm" />They are the Jack of all Trades, Master of
            None. Humans are suitable for all classes. Of all the races, they are the most balanced
            and the one race all the others are compared to. They still have no particular strength
            or weaknesses, but there is no more mention of a lack of piety.
          </q-card-section>
          <Human></Human>
        </q-card-section>
      </q-card>

      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Elf</div>
            Race Skill: None
            <br />Dislikes Dwarves <br class="q-my-sm" />Highly intelligent race who are proficient
            at magic. Elves tend to orient towards magical classes due to their high intelligence
            and piety. On the other hand, their power and vitality are low, making them ill suited
            to the Fighter class.
          </q-card-section>
          <Elf></Elf>
        </q-card-section>
      </q-card>

      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Dwarf</div>
            Race Skill: None
            <br />Dislikes Elves <br class="q-my-sm" />
            Dwarves are robust and strong creatures who like weapons and armor. Their durable bodies
            and impressive strength make Dwarves the ideal Fighters. In addition, their piety makes
            them suited to play Priest classes as well. Their exclusive class is Berserker.
          </q-card-section>
          <Dwarf></Dwarf>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Gnome</div>
            Race Skill: Protection, Floating
            <br />Likes all races <br class="q-my-sm" />They live in underground caves, where they
            normally keep to their own kind. They are small, but sturdy and also possess a natural
            resistance against magic spells. Bound in piety, Gnomes excel at the Priest class.
            However, their physical strength and vitality makes them equally suited to join the
            Fighter class as well.
          </q-card-section>
          <Gnome></Gnome>
        </q-card-section>
      </q-card>

      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Khulaz</div>
            Race Skill: None
            <br />Dislikes Diabolos <br class="q-my-sm" />Fast and lucky, Khulaz are great at the
            Thief class. Due to their low ability scores it's often tough for them to be successful
            in other classes.
          </q-card-section>
          <Khulaz></Khulaz>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Fairy</div>
            Race Skill: Floating
            <br />Likes Humans <br class="q-my-sm" />They are tiny human-like beings with wings of
            various color. Due to their size, they are very fast, but not that strong. They can
            dodge attacks more effectively than larger races.Their diminutive size restricts their
            choices in weapons and armor, but they also can find equipment and gear made
            specifically for them. Their innate, magical nature means they can recover magic power
            quicker than other races.
          </q-card-section>
          <Fairy></Fairy>
        </q-card-section>
      </q-card>

      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Felpurr</div>
            Race Skill: None
            <br />Dislikes Dwarves and is shy to all of the other races <br class="q-my-sm" />Hard
            race to raise affinities for, they are feline humanoid creatures that rely on their
            speed, nimbleness, and sleek body to survive over raw strength. Their natural quickness
            and agility makes felpurrs excel at professions that rely on speed. Their exclusive
            class is Beast.
          </q-card-section>
          <Felpurr></Felpurr>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Bahamoon</div>
            Race Skill: Breath
            <br />Likes Gnomes <br class="q-my-sm" />They are renowned for their ability to breathe
            acid when angered, giving them access to a special area of effect attack. They are said
            to be primarily solitary creatures, but Bahamoon have been known to occasionally venture
            out and accompany another group for whatever reasons of its own. Bahamoons are noted for
            being strong, dexterous, and hearty. The only race that can use the Dragon Knight class.
          </q-card-section>
          <Bahamoon></Bahamoon>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Diabolos</div>
            Race Skill: Breath
            <br />Gnomes Dislike them <br class="q-my-sm" />the diabolos race has the highest base
            statistics, it has by far the worst relations with other races.
          </q-card-section>
          <Diabolos></Diabolos>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-ma-lg shadow-20 cardSize" bordered>
        <q-card-section horizontal class="bg-primary infoBox">
          <q-card-section>
            <div class="text-h5">Celestian</div>
            Race Skill: Floating
            <br />Dislikes Diabolos <br class="q-my-sm" />They are the only class that can take on
            the Fallen Angel class. Have high faith.
          </q-card-section>
          <Celestian></Celestian>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import HuSlide from 'src/components/SlideShows/HuSlide.vue'
import ElSlide from 'src/components/SlideShows/ElSlide.vue'
import DwSlide from 'src/components/SlideShows/DwSlide.vue'
import GnSlide from 'src/components/SlideShows/GnSlide.vue'
import KhSlide from 'src/components/SlideShows/KhSlide.vue'
import FaSlide from 'src/components/SlideShows/FaSlide.vue'
import FeSlide from 'src/components/SlideShows/FeSlide.vue'
import BaSlide from 'src/components/SlideShows/BaSlide.vue'
import DiSlide from 'src/components/SlideShows/DiSlide.vue'
import CeSlide from 'src/components/SlideShows/CeSlide.vue'

export default {
  name: 'RacePage',
  components: {
    Human: HuSlide,
    Elf: ElSlide,
    Dwarf: DwSlide,
    Gnome: GnSlide,
    Khulaz: KhSlide,
    Fairy: FaSlide,
    Felpurr: FeSlide,
    Bahamoon: BaSlide,
    Diabolos: DiSlide,
    Celestian: CeSlide,
  },
}
</script>

<style>
.infoBox {
  height: 400px;
}

.cardSize {
  width: 775px;
}
</style>
