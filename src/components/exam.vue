<template>
  <div class="body">
    <div class="row topSection">
      <div class="col-md-1"></div>
      <div class="col-md-4 numberSection" style="background-color:khaki;height:15vh;">
        <div class="row">
          <button type="button" @click.prevent="displayQues1"  class="btn">01</button>
          <button type="button" @click.prevent="displayQues2" class="btn">02</button>
          <button type="button" @click.prevent="displayQues3" class="btn">03</button>
          <button type="button" @click.prevent="displayQues4" class="btn">04</button>
          <button type="button" @click.prevent="displayQues5" class="btn">05</button>
          <button type="button" @click.prevent="displayQues6" class="btn">06</button>
          <button type="button" @click.prevent="displayQues7" class="btn">07</button>
          <button type="button" @click.prevent="displayQues8" class="btn">08</button>
          <button type="button" @click.prevent="displayQues9" class="btn">09</button>
          <button type="button" @click.prevent="displayQues10" class="btn">10</button>
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
          <div class="col-md-12 mainQues" v-bind:class="{ default: defaultQues }" ref="ques1">
            <p class='q'>{{questions[0].quesno}}. {{questions[0].ques}}</p>
            <div class='ans'>
              <input type="checkbox" value="opt1" v-model="ques1" class="opt"/> <label class="ansopt">{{questions[0].opt1}}</label> <br>
              <input type="checkbox" value="opt2" v-model="ques1" class="opt"/> <label class="ansopt">{{questions[0].opt2}}</label> <br>
              <input type="checkbox" value="opt3" v-model="ques1" class="opt"/> <label class="ansopt"> {{questions[0].opt3}}</label> <br>
              <input type="checkbox" value="opt4" v-model="ques1" class="opt"/> <label class="ansopt">{{questions[0].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques2">
            <p class='q'>{{questions[1].quesno}}. {{questions[1].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[0].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[0].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[0].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[0].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques3"> 
            <p class='q'>{{questions[2].quesno}}. {{questions[2].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[2].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[2].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[2].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[2].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques4">
            <p class='q'>{{questions[3].quesno}}. {{questions[3].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[3].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[3].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[3].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[3].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques5">
            <p class='q'>{{questions[4].quesno}}. {{questions[4].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[4].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[4].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[4].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[4].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques6">
            <p class='q'>{{questions[5].quesno}}. {{questions[5].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[5].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[5].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[5].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[5].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques7">
            <p class='q'>{{questions[6].quesno}}. {{questions[6].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[6].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[6].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[6].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[6].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques8">
            <p class='q'>{{questions[7].quesno}}. {{questions[7].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[7].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[7].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[7].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[7].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques9">
            <p class='q'>{{questions[8].quesno}}. {{questions[8].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[8].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[8].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[8].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[8].opt4}}</label> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques10">
            <p class='q'>{{questions[9].quesno}}. {{questions[9].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[9].opt1}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[9].opt2}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt"> {{questions[9].opt3}}</label> <br>
              <input type="checkbox" class="opt"/> <label class="ansopt">{{questions[9].opt4}}</label> <br>
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
     <!-- <div class="col-md-2 previousBtn">
        <button type="button" @click.prevent='previous' class="btn diff" style="width:100%;">Previous</button>
      </div>
      <div class="col-md-2 nextBtn">
        <button type="button" @click.prevent='next' class="btn diff" style="width:100%;">Next</button>
      </div> -->
      <div class="col-md-3"></div>
      <div class="col-md-2 submitBtn">
        <button type="button" @click.prevent='submit' class="btn diff btn-dark" style="width:100%;">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit.js'
export default {
  name: 'Exam',
  data () {
    return {
      timeOver: false,
      defaultQues: true,
      currentQues: 1,
      ques1: [],
      marks: 0,
      questions: [
        {
          quesno: 1,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 2,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 3,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 4,
          ques: 'some ques here 4',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 5,
          ques: 'some ques here 5',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 6,
          ques: 'some ques here 6',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 7,
          ques: 'some ques here 7',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 8,
          ques: 'some ques here 8',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 9,
          ques: 'some ques here 9',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 10,
          ques: 'some ques here 10',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 11,
          ques: 'some ques here 11',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 12,
          ques: 'some ques here 12',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 13,
          ques: 'some ques here 13',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 14,
          ques: 'some ques here 14',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 15,
          ques: 'some ques here 15',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 16,
          ques: 'some ques here 16',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 17,
          ques: 'some ques here 17',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 18,
          ques: 'some ques here 18',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 19,
          ques: 'some ques here 19',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 20,
          ques: 'some ques here 20',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 21,
          ques: 'some ques here 21',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 22,
          ques: 'some ques here 22',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 23,
          ques: 'some ques here 23',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 24,
          ques: 'some ques here 24',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 25,
          ques: 'some ques here 25',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 26,
          ques: 'some ques here 26',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 27,
          ques: 'some ques here 27',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
        },
        {
          quesno: 28,
          ques: 'some ques here 28',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt3',
        },
        {
          quesno: 29,
          ques: 'some ques here 29',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt1',
        },
        {
          quesno: 30,
          ques: 'some ques here 30',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          correct: 'opt2',
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
      if(this.ques1 == this.questions[0].correct){
        this.marks = this.marks + 2
      }else{
        this.marks = this.marks - 1
      }
      this.$router.push('result')
      sessionStorage.setItem('marks' , this.marks)
    },
    displayQues1 () {
      this.$refs.ques1.style.display = 'block'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
      this.currentQues = 1
    },
    displayQues2 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'block'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
       this.currentQues = 2
    }, 
    displayQues3 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'block'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
       this.currentQues = 3
    },
    displayQues4 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'block'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
       this.currentQues = 4
    }, 
    displayQues5 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'block'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
       this.currentQues = 5
    },
    displayQues6 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'block'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
       this.currentQues = 6
    }, 
     displayQues7 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'block'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
       this.currentQues = 7
    },
    displayQues8 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'block'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
       this.currentQues = 8
    }, 
    displayQues9 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'block'
      this.$refs.ques10.style.display = 'none'
      this.defaultQues = false
       this.currentQues = 9
    },
    displayQues10 () {
      this.$refs.ques10.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'block'
      this.defaultQues = false
       this.currentQues = 10
    }, 
   /* previous () {
      var x =  this.currentQues-1
      var y = 'ques' + x
      this.$refs[y].style.display = 'block'
    }, 

    next () {  
    } */
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

.default {
  display: block;
}

.bottomSection{
  margin-top: 5vh;
  height: 10vh;
}
</style>