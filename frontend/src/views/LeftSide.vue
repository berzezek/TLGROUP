<template>
  <div>
    <base-departments
      :departments="departments"
      @levelUp="levelUp"
      :className="'department-options-hover'"
    />
  </div>
</template>

<script>
import BaseDepartments from "@/components/department/ChildDepatments.vue";
export default {
  name: "LeftSide",
  components: { BaseDepartments },
  props: {
    departments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    levelUp() {
      this.$emit("levelUp");
    },
  },
};
</script>

<style scoped></style>
