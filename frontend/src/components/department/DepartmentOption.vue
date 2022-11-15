<template>
  <div
    @click="fetchDetails(department.id)"
    @mouseover="showOptions = true"
    @mouseout="showOptions = false"
    :class="className"
  >
    <span>{{ department.name }}</span>
  </div>
  <hr />
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
// @ts-ignore
import type { IDepartment } from "@/types";

export default defineComponent({
  name: "DepartmentOption",
  props: {
    department: {
      type: Object as () => IDepartment,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
  },
  emits: ["fetchDetails"],
  setup(props, { emit }) {
    const showOptions = ref(false),
      fetchDetails = (id: string): void => {
        emit("fetchDetails", id);
      };
    return {
      showOptions,
      fetchDetails,
    };
  },
});
</script>

<style scoped>
.department-child {
  color: #313131;
}

.department-child:hover {
  cursor: pointer;
  transform: matrix(1.05, 0, 0, 1, 2, 2);
  font-size: 1rem;
  color: black;
  transition: all 1s ease-in-out;
}

.department-parent {
  font-size: 20px;
}
</style>
