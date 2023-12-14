import axios from "axios";
export default {
  name: "SignUp",

  data() {
    return {
      fullname: "",
      email: "",
      studentId: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      let params = new FormData();
      params.append("fullname", this.fullname);
      params.append("email", this.email);
      params.append("studentId", this.studentId);
      params.append("password", this.password);
      axios
        .post(
          "http://192.168.26.145/shadikul/backend/index.php/api/students/",
          params
        )
        .then((response) => {
          this.success = "Data saved successfully";
          alert(this.success);
          window.location.reload();
        })
        .catch((error) => {
          this.response = "Error: " + error.response.status;
          console.log(this.response);
        });
    },
  },
};
