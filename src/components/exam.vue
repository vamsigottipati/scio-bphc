<template>
  <div class="body">
    <div class="row topSection">
      <div class="col-md-1"></div>
      <div class="col-md-4 numberSection" style="background-color:khaki;height:15vh;">
        <div class="row">
          <button type="button" class="btn">01</button>
          <button type="button" class="btn">02</button>
          <button type="button" class="btn">03</button>
          <button type="button" class="btn">04</button>
          <button type="button" class="btn">05</button>
          <button type="button" class="btn">06</button>
          <button type="button" class="btn">07</button>
          <button type="button" class="btn">08</button>
          <button type="button" class="btn">09</button>
          <button type="button" class="btn">10</button>
        </div>
        <div class="row">
          <button type="button" class="btn">11</button>
          <button type="button" class="btn">12</button>
          <button type="button" class="btn">13</button>
          <button type="button" class="btn">14</button>
          <button type="button" class="btn">15</button>
          <button type="button" class="btn">16</button>
          <button type="button" class="btn">17</button>
          <button type="button" class="btn">18</button>
          <button type="button" class="btn">19</button>
          <button type="button" class="btn">20</button>
        </div>
        <div class="row">
          <button type="button" class="btn">21</button>
          <button type="button" class="btn">22</button>
          <button type="button" class="btn">23</button>
          <button type="button" class="btn">24</button>
          <button type="button" class="btn">25</button>
          <button type="button" class="btn">26</button>
          <button type="button" class="btn" >27</button>
          <button type="button" class="btn">28</button>
          <button type="button" class="btn">29</button>
          <button type="button" class="btn">30</button>
        </div>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-1"></div>
      <div class="col-md-2 timerSection" style="height:15vh;background-color:khaki;margin-left:3.5vw;">
        <p id="time"></p>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row questionSection">
      <div class="col-md-1"></div>
      <div class="col-md-8 question">

      </div>
      <div class="col-md-1"></div>
      <div class="col-md-2 helper">

      </div>
    </div>
    <div class="row bottomSection">
      <div class="col-md-2"></div>
      <div class="col-md-2 previousBtn">
        <button type="button" @click.prevent='previous' class="btn diff" style="width:100%;">Previous</button>
      </div>
      <div class="col-md-2 nextBtn">
        <button type="button" @click.prevent='next' class="btn diff" style="width:100%;">Next</button>
      </div>
      <div class="col-md-2 submitBtn">
        <button type="button" @click.prevent='submit' class="btn diff btn-dark" style="width:100%;">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exam',
  data () {
    return {
      timeOver: false,
    }
  },
  beforeMount: {

  },
  methods: {
    submit() {
      this.$router.push('result')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.topSection{
}

.btn{
  width: calc(100% / 10);
  height: 5vh;
  border-radius: 0px;
}

.diff {
    border-radius: 30px;
    height:6vh;
}

#time {
  font-size: 3rem;
  margin-top: 4.2vh;
}

.questionSection{
  margin-top: 5vh;
  height: 60vh;
}

.question{
  background-color: khaki;
}

.helper{
  background-color: blue;
  margin-left: -5vw;
}

.bottomSection{
  margin-top: 5vh;
  height: 10vh;
}

</style>
