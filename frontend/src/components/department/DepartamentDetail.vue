<template>
  <div class="well sidebar-nav">
    <ul class="nav nav-list">
      <li class="nav-header">{{ departmentTitle }}</li>
      <li
        v-for="department in departments"
        :key="department.id"
        @click="changeDepartment(department.id)"
        class="department"
      >
        <span>{{ department.name }}</span>
        <span class="badge badge-info" @click="removeDepartment(department.id)"
          >Удалить</span
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import type { IDepartment } from "@/types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DepartmentDetail",
  props: {
    departmentTitle: {
      type: String,
      required: true,
    },
    departments: {
      type: [] as IDepartment[],
      required: true,
    },
  },
  emits: ["changeDepartment", "removeDepartment"],
  setup(props, { emit }) {
    const changeDepartment = (id: string): void => {
      emit("changeDepartment", id);
    };
    const removeDepartment = (id: string): void => {
      emit("removeDepartment", id);
    };
    return {
      changeDepartment,
      removeDepartment,
    };
  },
});
</script>

<style scoped>
.department {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
</style>
