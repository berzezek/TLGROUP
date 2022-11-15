<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <left-side
          :departments="departments"
          @levelUp="levelUp"
          class="span3"
        />
        <right-side
          :employees="employees"
          :department="department"
          :employeesCount="count"
          class="span9"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LeftSide from "@/views/LeftSide.vue";
import RightSide from "@/views/RightSide.vue";
// @ts-ignore
import { useEmployeeStore } from "@/stores/employee";
// @ts-ignore
import { useDepartmentStore } from "@/stores/department";
// @ts-ignore
import { useBaseDepartments } from "@/hooks/useBaseDepartments";

export default {
  name: "HomeView",
  components: {
    RightSide,
    LeftSide,
  },
  mixins: [useBaseDepartments],
  setup() {
    const { employees, department, departments, levelUp, count } =
      useBaseDepartments(useEmployeeStore, useDepartmentStore);
    return {
      employees,
      department,
      departments,
      levelUp,
      count,
    };
  },
};
</script>

<style></style>
