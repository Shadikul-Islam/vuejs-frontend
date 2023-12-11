<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.signup input, .login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 5px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.signup button, .login button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}

.studentTable {
  width: 30%; /* Adjust as needed */
  margin: 0px auto;
  border-collapse: collapse;
}

/* For table headers */
.studentTable th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

/* For table cells */
.studentTable td {
  border: 1px solid #ddd;
  padding: 8px;
}

/* For alternating row colors */
.studentTable tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* For hover effect on rows */
.studentTable tbody tr:hover {
  background-color: #e2e2e2;
}



</style>
