<script lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data: function () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        weekends: false,
        events: [{ title: "Meeting", start: new Date() }],
      },
    };
  },
};
</script>

<template>
    <teleport to="body">
        <notifications position="top left" class="mt-2" animation-type="velocity" />
        <div :class="calendar.signup ? 'block' : 'hidden'">
            <h1>Demo App</h1>
        <FullCalendar :options="calendarOptions" />
        </div>
    </teleport>
</template>
