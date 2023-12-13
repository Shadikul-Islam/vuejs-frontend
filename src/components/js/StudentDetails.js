import axios from "axios";
import MyModal from "../MyModal.vue";

export default {
  components: {
    MyModal,
  },
  data() {
    return {
      students: [],
      selectedStudentId: null,
    };
  },
  mounted() {
    this.get_student_info();
  },
  methods: {
    async get_student_info() {
      try {
        const response = await axios.get(
          "http://192.168.26.145/shadikul/backend/index.php/api/students/"
        );
        this.students = response.data.results;
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    },
    editStudent(studentId) {
      this.selectedStudentId = studentId;
      this.$refs.modalRef.openModal(); // Ensure you're calling the correct method name to open the modal
    },
    updateStudents(updatedStudents) {
      this.students = updatedStudents;
    },
    async deleteStudent(studentId) {
      try {
        await axios.delete(
          `http://192.168.26.145/shadikul/backend/index.php/api/students/${studentId}`
        );
        console.log("Deleted student:", studentId);
        this.get_student_info();
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    },
  },
};
