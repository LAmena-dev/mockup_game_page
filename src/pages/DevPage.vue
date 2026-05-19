<template>
  <q-img
    src="backgrounds/background3.png"
    class="dimmed"
    style="background-size: cover; height: 100%; position: fixed"
  />
  <q-page>
    <div elevated class="bg-primary q-mt-md q-pa-sm text-h4 text-center text-white shadow-20">
      Class of Heroes: Team
    </div>

    <div class="character-container q-mx-xl">
      <div
        v-for="member in team"
        :key="member.id"
        class="character-card"
        @click="selectMember(member)"
      >
        <img :src="member.avatar" alt="Team Member" class="character-avatar" />
        <div class="character-name">{{ member.name }}</div>
      </div>
    </div>

    <div v-if="selectedMember" class="dialogue-box">
      <div class="dialogue-content">
        <img :src="selectedMember.avatar" alt="Character Avatar" class="dialogue-avatar" />
        <div class="dialogue-text">
          <div class="dialogue-name">{{ selectedMember.name }}</div>
          <div class="dialogue-role">{{ selectedMember.role }}</div>
          <p>{{ selectedMember.dialogue }}</p>
          <q-btn flat color="primary" label="Close" @click="selectedMember = null" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DevPage',
  data() {
    return {
      team: [
        {
          id: 1,
          name: 'Laremm Uriel Amena',
          role: 'Web Design Leader',
          avatar: 'profile/kirby.jpg',
          dialogue: 'I ensure everything in our code works smoothly!',
        },
        {
          id: 2,
          name: 'Shanica Elupre',
          role: 'Web Programmer',
          avatar: 'profile/totoro.gif',
          dialogue: 'I make sure our interfaces are beautiful and user-friendly!',
        },
        {
          id: 3,
          name: 'Janea Geresola',
          role: 'Web Programmer',
          avatar: 'profile/pepe.png',
          dialogue: 'The magic behind the scenes? That’s my job.',
        },
        {
          id: 4,
          name: 'Angelie Bidiones',
          role: 'Web UX Designer',
          avatar: 'profile/toothless-dancing-toothless.gif',
          dialogue: 'I bring creativity to the team with my designs!',
        },
      ],
      selectedMember: null,
    }
  },
  methods: {
    selectMember(member) {
      this.selectedMember = member
    },
  },
}
</script>

<style scoped>
.q-page {
  background-size: cover;
  height: 100%;
}

.character-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.character-card {
  display: flex;
  cursor: pointer;
  transition: transform 0.3s;
  width: 300px;
  margin: 10px;
  position: relative;
  background: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.character-card:hover {
  transform: scale(1.1);
}

.card-background {
  background: transparent;
  display: flex;
  width: 100%;
}

.card-left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2c2c2c;
  padding: 10px;
}

.card-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eaeaea;
  padding: 10px;
  text-align: left;
}

.character-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.character-role {
  font-size: 14px;
  color: #555;
}

.character-name {
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #000;
}

.dialogue-box {
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #ffd700;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  padding: 15px;
  display: flex;
  align-items: center;
  color: #fff;
}

.dialogue-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
}

.dialogue-content {
  flex: 1;
}

.dialogue-name {
  font-size: 18px;
  font-weight: bold;
}

.dialogue-role {
  font-size: 14px;
  font-style: italic;
  margin-bottom: 10px;
}

.dialogue-text p {
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
