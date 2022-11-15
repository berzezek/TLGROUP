import { ref } from "vue";
import { defineStore } from "pinia";
// @ts-ignore
import type { IDepartment, IDepartmentStore } from "@/types";

export const useDepartmentStore = defineStore(
  "department",
  (): IDepartmentStore => {
    const department = ref({} as IDepartment),
      fetchDepartment = async (id: string | null) => {
      let fetch_url: string;
        if (id) {
          fetch_url = `${import.meta.env.VITE_BASE_URL}department/${id}`;
        } else {
          fetch_url = `${import.meta.env.VITE_BASE_URL}department/`;
        }
        const response = await fetch(
          fetch_url
        );
        department.value = await response.json();
      },
      departments = ref([] as Array<IDepartment>),
      fetchDepartments = async (id: string | undefined) => {
        let fetch_url: string;
        if (id) {
          fetch_url = `${import.meta.env.VITE_BASE_URL}department-list/${id}/`
        } else {
          fetch_url = `${import.meta.env.VITE_BASE_URL}department-list/`
        }
        const response = await fetch(
          fetch_url
        );
        departments.value = await response.json();
      };

    return {
      department,
      departments,
      fetchDepartment,
      fetchDepartments,
    };
  }
);
