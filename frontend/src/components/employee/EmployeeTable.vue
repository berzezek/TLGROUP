<template>
  <div>
    <div class="row-fluid" v-if="employees">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ФИО</th>
            <th scope="col">Дата</th>
            <th scope="col">Зарплата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees" :key="employee.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ employee.name }}</td>
            <td>{{ employee.date_of_issue }}</td>
            <td>{{ employee.salary }} руб.</td>
          </tr>
        </tbody>
      </table>
      <div class="observer" ref="pagination"></div>
    </div>
    <div v-else class="block-in-center">
      <h2>В выбранной категории нет работников</h2>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import type { IEmployees, IEmployeeStore } from "@/types";
import { ref } from "vue";
// @ts-ignore
import { useEmployeeStore } from "@/stores/employee";
// @ts-ignore
import { useDynamicPagination } from "@/hooks/useDynamicPagination";

export default {
  name: "EmployeeTable",
  props: {
    employees: {
      type: [Array, []] as IEmployees,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props: any) {
    const paginationBlock = ref<HTMLElement | null>(null),
      employeeStore: IEmployeeStore = useEmployeeStore(),
      { pagination } = useDynamicPagination(
        employeeStore,
        paginationBlock,
        props.id
      );

    return {
      pagination,
    };
  },
};
</script>

<style scoped></style>
