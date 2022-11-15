import { onMounted } from "vue";
import type { Ref } from "vue";
// @ts-ignore
import type { IEmployeeStore } from "@/types";

export const useDynamicPagination = (
  useEmployeeStore: IEmployeeStore,
  paginationElement: Ref<HTMLElement>,
  id: number | string
) => {
  const pagination = paginationElement;
  onMounted(() => {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        if (useEmployeeStore.count > useEmployeeStore.employees.length) {
          useEmployeeStore.fetchEmployees(id);
        }
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(pagination.value);
  });

  return {
    pagination,
  };
};
