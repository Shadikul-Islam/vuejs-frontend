<template>
    <h2>Student Signup Page</h2>
    <div class="signup">
        <form @submit.prevent="submitForm"> 
        <input type="text" v-model="fullname" placeholder="Enter Full Name" > <br>
        <input type="text" v-model="email" placeholder="Enter Email"> <br>
        <input type="text" v-model="studentId" placeholder="Enter Student ID"> <br>
        <input type="password" v-model="password" placeholder="Enter Password"> <br>
        <button type="submit">Submit</button>
    </form>
    </div>
</template>

<script src="./js/SignUp.js"></script>
