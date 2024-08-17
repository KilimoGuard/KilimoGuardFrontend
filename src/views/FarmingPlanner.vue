<template>
  <main-layout>
    <div class="bg-custom-green text-white p-4">
      <h1 class="text-3xl font-bold mb-6">Farming Planner</h1>
    </div>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Planting Form -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Planting Details</h2>
        <form @submit.prevent="submitPlantingForm">
          <div class="mb-4">
            <label class="block text-gray-700">Crop</label>
            <select v-model="newPlanting.crop" class="w-full p-2 border border-gray-300 rounded-lg">
              <option value="" disabled>Select a crop</option>
              <option v-for="crop in crops" :key="crop.id" :value="crop.id">{{ crop.name }}</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Date</label>
            <input type="date" v-model="newPlanting.date" class="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Location</label>
            <input type="text" v-model="newPlanting.location" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Location..." />
          </div>
          <button type="submit" class="bg-custom-green text-white py-2 px-4 rounded-lg hover:bg-custom-green-dark">
            Add Planting
          </button>
        </form>
      </div>

      <!-- Calendar View -->
      <div class="bg-white rounded-lg shadow-lg p-6 col-span-2 lg:col-span-3">
        <h2 class="text-xl font-semibold mb-4">Planting Schedule</h2>
        <Calendar :events="calendarEvents" @dateSelected="handleDateSelection" />
      </div>

      <!-- Diary Entries -->
      <div v-if="selectedPlanting" class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Planting Diary for {{ selectedPlanting.cropName }}</h2>
        <div class="mb-4">
          <input v-model="newDiaryEntry.title" class="w-full p-2 border border-gray-300 rounded-lg mb-2" placeholder="Diary Title..." />
          <textarea v-model="newDiaryEntry.content" class="w-full p-2 border border-gray-300 rounded-lg mb-2" rows="4" placeholder="Diary Content..."></textarea>
          <button @click="addDiaryEntry" class="bg-custom-green text-white py-2 px-4 rounded-lg hover:bg-custom-green-dark">
            Add Entry
          </button>
        </div>
        <ul>
          <li v-for="(entry, index) in getDiaryEntriesForSelectedPlanting()" :key="index" class="mb-4">
            <h3 class="text-lg font-semibold">{{ entry.title }}</h3>
            <p>{{ entry.content }}</p>
            <span class="text-gray-500">{{ entry.date }}</span>
            <button @click="removeDiaryEntry(index)" class="text-red-500 hover:text-red-700 ml-4">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout.vue";
import Calendar from "@/components/Calendar.vue"; // Ensure you have a Calendar component or use a third-party library

export default {
  name: 'FarmingPlanner',
  components: {
    MainLayout,
    Calendar,
  },
  data() {
    return {
      newPlanting: {
        crop: '',
        date: '',
        location: '',
      },
      crops: [
        { id: 1, name: 'Maize' },
        { id: 2, name: 'Wheat' },
        { id: 3, name: 'Rice' },
        // Add more crops as needed
      ],
      plannedPlantings: [],
      selectedPlanting: null,
      newDiaryEntry: {
        title: '',
        content: '',
      },
      diaryEntries: [],
      calendarEvents: [], // Data for the calendar
    };
  },
  methods: {
    submitPlantingForm() {
      if (this.newPlanting.crop && this.newPlanting.date && this.newPlanting.location) {
        const crop = this.crops.find(crop => crop.id === parseInt(this.newPlanting.crop));
        if (crop) {
          const planting = {
            ...this.newPlanting,
            cropName: crop.name,
            id: Date.now() // Unique ID for each planting entry
          };
          this.plannedPlantings.push(planting);
          this.newPlanting = { crop: '', date: '', location: '' };
          this.updateCalendarEvents();
        }
      }
    },
    addDiaryEntry() {
      if (this.selectedPlanting && this.newDiaryEntry.title && this.newDiaryEntry.content) {
        this.diaryEntries.push({
          ...this.newDiaryEntry,
          plantingId: this.selectedPlanting.id,
          date: this.selectedPlanting.date || new Date().toISOString().split('T')[0]
        });
        this.newDiaryEntry = { title: '', content: '' };
      }
    },
    removeDiaryEntry(index) {
      this.diaryEntries.splice(index, 1);
    },
    getDiaryEntriesForSelectedPlanting() {
      return this.diaryEntries.filter(entry => entry.plantingId === this.selectedPlanting.id);
    },
    handleDateSelection(date) {
      // Find if there's a planting entry for the selected date
      const planting = this.plannedPlantings.find(p => p.date === date);
      if (planting) {
        this.selectedPlanting = planting;
      } else {
        this.selectedPlanting = null;
      }
      this.updateCalendarEvents();
    },
    updateCalendarEvents() {
      this.calendarEvents = [
        ...this.plannedPlantings.map(planting => ({
          title: `Plant ${planting.cropName}`,
          start: new Date(planting.date),
          end: new Date(planting.date),
          allDay: true
        })),
        ...this.diaryEntries.map(entry => ({
          title: `Diary Entry: ${entry.title}`,
          start: new Date(entry.date),
          end: new Date(entry.date),
          allDay: true
        }))
      ];
    }
  },
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.text-xl {
  font-size: 1.25rem;
}

.font-semibold {
  font-weight: 600;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
