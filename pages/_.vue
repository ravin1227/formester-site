<template>
  <div class="message-block">
    <h1 class="message">Oops</h1>
    <h4 class="message-detail">404, you seems to be lost</h4>
    <button class="navigate-btn" @click="$router.push('/')">Home</button>
    <img
      class="abs corner-design"
      src="../assets/images/error/design-404.png"
      alt=""
    />
    <img class="abs q1" src="../assets/images/error/q-mark-1.png" alt="" />
    <img class="abs q2" src="../assets/images/error/q-mark-2.png" alt="" />
    <img class="abs q3" src="../assets/images/error/q-mark-3.png" alt="" />
    <img class="abs q4" src="../assets/images/error/q-mark-4.png" alt="" />
    <img class="abs q5" src="../assets/images/error/q-mark-5.png" alt="" />
    <img class="abs q6" src="../assets/images/error/q-mark-6.png" alt="" />
    <img class="abs q7" src="../assets/images/error/q-mark-7.png" alt="" />
    <img class="abs q8" src="../assets/images/error/q-mark-8.png" alt="" />
    <img class="abs q9" src="../assets/images/error/q-mark-9.png" alt="" />
    <img class="abs q10" src="../assets/images/error/q-mark-10.png" alt="" />
    <img class="abs q11" src="../assets/images/error/q-mark-11.png" alt="" />
    <img class="abs q12" src="../assets/images/error/q-mark-12.png" alt="" />
  </div>
</template>

<script>
export default {
  layout: 'message',
}
</script>

<style>
.q1 {
  right: 366px;
  top: 100px;
}
.q2 {
  right: 356px;
  top: 352px;
}
.q3 {
  left: 350px;
  top: 150px;
}
.q4 {
  left: 440px;
  top: 280px;
}
.q5 {
  left: 119px;
  top: 70px;
}
.q6 {
  left: 727px;
  top: 100px;
}
.q7 {
  left: 12px;
  top: 270px;
}
.q8 {
  left: 560px;
  top: 180px;
}
.q9 {
  right: 118px;
  top: 250px;
}
.q10 {
  left: 285px;
  top: 626px;
}
.q11 {
  left: 767px;
  bottom: 60px;
}
.q12 {
  right: 132px;
  bottom: 80px;
}
@media only screen and (max-width: 1350px) {
  .q1 {
    right: 250px;
  }
  .q2 {
    right: 120px;
    top: 400px;
  }
  .q3 {
    left: 220px;
  }
  .q4 {
    display: none;
  }
}
@media only screen and (max-width: 1200px) {
  .q1 {
    right: 110px;
  }
  .q2 {
    right: 100px;
    top: 450px;
  }
  .q3 {
    top: 120px;
    left: 200px;
  }
  .q9 {
    right: 100px;
    top: 300px;
  }
}
@media only screen and (max-width: 992px) {
  .q6 {
    display: none;
  }
  .q11 {
    left: 500px;
  }
}
@media only screen and (max-width: 768px) {
  .q1 {
    display: none;
  }
  .q3 {
    top: 120px;
    left: 150px;
  }
  .q5 {
    top: 50px;
    left: 100px;
  }
  .q11 {
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  .q2 {
    right: 60px;
    top: 500px;
  }
  .q8 {
    display: none;
  }
  .q9 {
    right: 20px;
    top: 260px;
  }
  .q10 {
    left: 85px;
  }
  .q12 {
    bottom: 50px;
  }
}
</style>
