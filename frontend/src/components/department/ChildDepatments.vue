<template>
  <div>
    <div class="well sidebar-nav">
      <ul class="nav nav-list" v-if="departments.length">
        <li class="nav-header">Подразделения</li>
        <li><hr /></li>
        <li v-for="department in departments" :key="department.id">
          <department-option
            :department="department"
            :className="'department-child'"
            @fetchDetails="fetchParentDepartment"
          />
        </li>
      </ul>
      <ul v-else>
        <li>
          <h4>Нет подразделений</h4>
        </li>
      </ul>
    </div>
    <div class="block-in-center" v-if="headOffice">
      <button class="btn btn-secondary" @click="levelUp">
        На уровень выше
      </button>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { useDepartmentStore } from "@/stores/department";
// @ts-ignore
import type { IDepartmentStore, IDepartments, IEmployeeStore } from "@/types";
// @ts-ignore
import { useEmployeeStore } from "@/stores/employee";
import DepartmentOption from "@/components/department/DepartmentOption.vue";
import { computed } from "vue";

export default {
  name: "BaseDepartments",
  components: { DepartmentOption },
  props: {
    departments: {
      type: Array as IDepartments,
      required: true,
    },
  },
  setup(props: any, { emit }: any) {
    const departmentStore: IDepartmentStore = useDepartmentStore(),
      employeeStore: IEmployeeStore = useEmployeeStore(),
      fetchParentDepartment = (value: string | null): void => {
        employeeStore.resetEmployees();
        departmentStore.fetchDepartment(value);
        departmentStore.fetchDepartments(value);
        employeeStore.fetchEmployees(value);
      },
      levelUp = (): void => {
        emit("levelUp");
      },
      headOffice = computed(() => departmentStore.department.id);

    return {
      fetchParentDepartment,
      levelUp,
      headOffice,
    };
  },
};
</script>

<style scoped></style>
