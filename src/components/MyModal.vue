<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Edit Student</h3>
        <button @click="closeModal">X</button>
      </div>
      <div class="modal-body">
        <input v-model="editedStudent.fullname" placeholder="Enter Full Name" />
        <input v-model="editedStudent.email" placeholder="Enter Email" />
        <input
          v-model="editedStudent.studentId"
          placeholder="Enter Student ID "
        />
        <input v-model="editedStudent.password" placeholder="Enter Password" />
        <button @click="saveChanges">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["studentId", "students"],
  data() {
    return {
      showModal: false,
      editedStudent: {},
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.editedStudent = {
        ...this.students.find(
          (student) => student.studentId === this.studentId
        ),
      };
    },
    closeModal() {
      this.showModal = false;
    },
    saveChanges() {
      const updatedStudentIndex = this.students.findIndex(
        (student) => student.studentId === this.studentId
      );
      if (updatedStudentIndex !== -1) {
        const updatedStudents = [...this.students]; // Create a new array
        updatedStudents[updatedStudentIndex] = { ...this.editedStudent }; // Update the specific student
        this.$emit("update:students", updatedStudents); // Emit an event with updated data
      }
      this.closeModal();
    },
  },
};
</script>
