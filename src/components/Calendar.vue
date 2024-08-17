<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <button @click="prevMonth">‹</button>
      <span class="month-year">{{ monthYear }}</span>
      <button @click="nextMonth">›</button>
    </div>
    <div class="calendar-grid">
      <div class="calendar-cell font-bold">Sun</div>
      <div class="calendar-cell font-bold">Mon</div>
      <div class="calendar-cell font-bold">Tue</div>
      <div class="calendar-cell font-bold">Wed</div>
      <div class="calendar-cell font-bold">Thu</div>
      <div class="calendar-cell font-bold">Fri</div>
      <div class="calendar-cell font-bold">Sat</div>
      <div v-for="n in firstDayOffset" :key="'empty-' + n" class="calendar-cell"></div>
      <div
          v-for="day in daysInMonth"
          :key="day"
          class="calendar-cell"
          :class="{ 'bg-blue-200': isToday(day) }"
          @click="selectDate(day)"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
import {ref, computed} from 'vue';

export default {
  name: 'CalendarComponent',
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, {emit}) {
    const today = new Date();
    const currentMonth = ref(today.getMonth());
    const currentYear = ref(today.getFullYear());

    const daysInMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
    });

    const firstDayOffset = computed(() => {
      return new Date(currentYear.value, currentMonth.value, 1).getDay();
    });

    const monthYear = computed(() => {
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return `${monthNames[currentMonth.value]} ${currentYear.value}`;
    });

    const selectDate = (day) => {
      const date = new Date(currentYear.value, currentMonth.value, day);
      emit('dateSelected', date);
    };

    const isToday = (day) => {
      const date = new Date(currentYear.value, currentMonth.value, day);
      return date.toDateString() === today.toDateString();
    };

    const prevMonth = () => {
      if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
      } else {
        currentMonth.value--;
      }
    };

    const nextMonth = () => {
      if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
      } else {
        currentMonth.value++;
      }
    };

    return {
      daysInMonth,
      firstDayOffset,
      monthYear,
      selectDate,
      isToday,
      prevMonth,
      nextMonth,
    };
  },
};
</script>

<style scoped>
.calendar-container {
  max-width: 100%;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}

.calendar-cell {
  padding: 0.5rem;
  text-align: center;
}

.bg-blue-200 {
  background-color: #e3f2fd;
}
</style>
