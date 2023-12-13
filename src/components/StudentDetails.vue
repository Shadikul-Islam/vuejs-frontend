<template>
  <div>
    <h2>Student Details Page</h2>
    <div class="studentTable">
      <table border="1">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Student ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ student.fullname }}</td>
            <td>{{ student.studentId }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.password }}</td>
            <td>
              <button @click="editStudent(student.studentId)">Edit</button>
              <button @click="deleteStudent(student.studentId)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <MyModal
      :studentId="selectedStudentId"
      :students="students"
      @update:students="updateStudents"
      ref="modalRef"
    />
  </div>
</template>
<script src="./js/StudentDetails.js"></script>
