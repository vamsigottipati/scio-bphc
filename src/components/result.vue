<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <div class="profile">
          <p style="margin-top:7vh;font-size:2rem;">Name</p>
          <span style="font-weight: 200;">Registration Number</span>
        </div>
        <div class="actions">
          <span class="marks">Marks</span>
        </div>
        <!-- <span class="btn" style="margin-top:30vh;">Exit</span> -->
      </div>

      <div class="right">
        <a class="right-box">
          <p>10</p>
          <span>Math</span>
        </a>
        <a class="right-box">
          <p>10</p>
          <span>English</span>
        </a>
        <a class="right-box">
          <p>10</p>
          <span>Other</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 60vw;
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to top right, #EEBE6C 0%, #CA7C4E 100%);
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, .3);
  color: #786450;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  border-radius: 2px;
}

.container {
  border-radius: 4px;
  background: #fff;
  box-shadow: 7px 7px 16px 0 rgba(0, 0, 0, .4);
  width: 80%;
  height: 75%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.left {
  max-width: 63%;
  flex: 0 0 63%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
}

.right {
  flex: 1;
}

.profile {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile p {
  font-weight: 100;
  margin: 0;
  line-height: 1.2;
}

.profile span {
  font-weight: 900;
  font-size: 11px;
  display: inline-block;
}

.marks {
  color:#56baed;
  font-size:3rem;
}

.actions {
  text-align: center;
}

.btn {
  text-align: center;
  border: 1px solid;
  width: 125px;
  border-radius: 20px;
  line-height: 28px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: #786450;
  display: inline-block;
  transition: all .5s;
}

.btn:hover {
  background: #786450;
  color: #fff;
}

.btn + .btn {
  margin-top: 10px;
}

.right {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
}

.right-box {
  background: #f5e8df;
  flex: 1;
  text-decoration: none;
  color: #786450;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: background .5s;
}

.right-box:hover {
  background: #E1CFC2;
}

.right-box p {
  margin: 0;
}

.right-box span {
  font-size: 11px;
  font-weight: 300;
}

.right-box + .right-box {
  border-top: 1px solid #fff;
}
</style>
