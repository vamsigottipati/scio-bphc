<template>
  <div class="body">
    <div class="row topSection">
      <div class="col-md-1"></div>
      <div class="col-md-4 numberSection" style="background-color:khaki;height:15vh;">
        <div class="row">
          <button type="button" @click.prevent="displayQues1"  class="btn">01</button>
          <button type="button" @click.prevent="displayQues2" class="btn">02</button>
          <button type="button" @click.prevent="displayQues3" class="btn">03</button>
          <button type="button"  class="btn">04</button>
          <button type="button"  class="btn">05</button>
          <button type="button"  class="btn">06</button>
          <button type="button"  class="btn">07</button>
          <button type="button"  class="btn">08</button>
          <button type="button"  class="btn">09</button>
          <button type="button"  class="btn">10</button>
        </div>
        <div class="row">
          <button type="button"  class="btn">11</button>
          <button type="button"  class="btn">12</button>
          <button type="button"  class="btn">13</button>
          <button type="button"  class="btn">14</button>
          <button type="button"  class="btn">15</button>
          <button type="button"  class="btn">16</button>
          <button type="button"  class="btn">17</button>
          <button type="button"  class="btn">18</button>
          <button type="button"  class="btn">19</button>
          <button type="button"  class="btn">20</button>
        </div>
        <div class="row">
          <button type="button"  class="btn">21</button>
          <button type="button"  class="btn">22</button>
          <button type="button"  class="btn">23</button>
          <button type="button"  class="btn">24</button>
          <button type="button"  class="btn">25</button>
          <button type="button"  class="btn">26</button>
          <button type="button"  class="btn">27</button>
          <button type="button"  class="btn">28</button>
          <button type="button"  class="btn">29</button>
          <button type="button"  class="btn">30</button>
        </div>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-1"></div>
      <div class="col-md-2 timerSection" style="height:15vh;background-color:khaki;margin-left:3.5vw;">
        <p id="time" ref='time'></p>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row questionSection">
      <div class="col-md-1"></div>
      <div class="col-md-8 question">
        <div class="row">
          <div class="col-md-12 mainQues" ref="ques1">
            <p class='q'>{{questions[0].quesno}}. {{questions[0].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[0].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques2">
            <p class='q'>{{questions[1].quesno}}. {{questions[1].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[0].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques3"> 
            <p class='q'>{{questions[1].quesno}}. {{questions[1].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[0].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[0].opt4}}</span> <br>
            </div>
          </div>
          
        </div>
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

import db from './firebaseINIT.js'

export default {
  name: 'Exam',
  data () {
    return {
      timeOver: false,
      questions: [
        {
          quesno: 1,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 2,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 2,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        }
      ]
    }
  },

  mounted () {
    setTimeout(function(){
      alert('Time is over')
      this.timeover = true
      
      if(this.timeover) {
       location.pathname = '/result'
      }
    }, 1000000)
    sessionStorage.setItem('pagename', window.location.pathname)
  },

  watch : {
    
  },

  methods: {
    submit() {
      this.$router.push('result')
    },
    displayQues1 () {
      this.$refs.ques1.style.display = 'block'
    },
    displayQues2 () {
      this.$refs.ques2.style.display = 'block'
    }, 
    previous () {  

    },
    next () {  

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
  border: 1px solid black;
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

.q {
  font-size: 1.6rem;
  margin: 20px;
  color:black;
  font-weight:900;
  text-align: left;
}

.ans {
  text-emphasis: none;
  text-align: left;
}

.opt {
  margin:1vw;
}

.ans input {
  position: relative;
  opacity: 1;
  cursor: pointer;
}

.ansopt{
  font-size: 1.2rem;
  font-weight: 500;
}

.question{
  background-color: khaki;
}

.mainQues {
  display: none;
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
