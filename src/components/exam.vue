<template>
  <div class="body">
    <div class="row topSection">
      <div class="col-md-1"></div>
      <div class="col-md-4 numberSection" style="background-color:khaki;height:15vh;">
        <div class="row">
          <button type="button" v-for='nos in mathQues' @click.prevent="displayQues(nos)" class="btn">{{nos.qno}}</button>
        </div>
        <div class="row">
          <button type="button" v-for='nos in aptitudeQues' @click.prevent="displayQues(nos)" class="btn">{{nos.qno}}</button>
        </div>
        <div class="row">
          <button type="button" v-for='nos in engQues' @click.prevent="displayQues(nos)" class="btn">{{nos.qno}}</button>
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
          <div class="col-md-12">
            <p class="q" ref='abc'>{{ defaultques }}</p>
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
export default {
  name: 'Exam',
  data () {
    return {
      timeOver: false,
      defaultques: 'some ques here 1',
      currentQues: 1,
      mathQues: [
        {
          qno:1,
          ques: 'some ques here 1',
        },
        {
           qno:2,
           ques: 'some ques here 2',
        },
        {
           qno:3,
           ques: 'some ques here 3',
        },
        {
           qno:4,
           ques: 'some ques here 4',
        },
        {
           qno:5,
           ques: 'some ques here 5',
        },
        {
           qno:6,
           ques: 'some ques here 6',
        },
        {
           qno:7,
           ques: 'some ques here 7',
        },
        {
           qno:8,
           ques: 'some ques here 8',
        },
        {
           qno:9,
           ques: 'some ques here 9',
        },
        {
           qno:10,
           ques: 'some ques here 10',
        },
      ],
      aptitudeQues: [
        {
          qno:11,
          ques: 'some ques here 11',
        },
        {
           qno:12,
           ques: 'some ques here 12',
        },
        {
           qno:13,
           ques: 'some ques here 13',
        },
        {
           qno:14,
           ques: 'some ques here 14',
        },
        {
           qno:15,
           ques: 'some ques here 15',
        },
        {
           qno:16,
           ques: 'some ques here 16',
        },
        {
           qno:17,
           ques: 'some ques here 17',
        },
        {
           qno:18,
           ques: 'some ques here 18',
        },
        {
           qno:19,
           ques: 'some ques here 19',
        },
        {
           qno:20,
           ques: 'some ques here 20',
        },
      ],
      engQues: [
        {
          qno:21,
          ques: 'some ques here 21',
        },
        {
           qno:22,
           ques: 'some ques here 22',
        },
        {
           qno:23,
           ques: 'some ques here 23',
        },
        {
           qno:24,
           ques: 'some ques here 24',
        },
        {
           qno:25,
           ques: 'some ques here 25',
        },
        {
           qno:26,
           ques: 'some ques here 26',
        },
        {
           qno:27,
           ques: 'some ques here 27',
        },
        {
           qno:28,
           ques: 'some ques here 28',
        },
        {
           qno:29,
           ques: 'some ques here 29',
        },
        {
           qno:30,
           ques: 'some ques here 30',
        },
      ],
      activeQues: 1,
    }
  },

  methods: {
    submit() {
      this.$router.push('result')
    },
    displayQues (nos) {
      this.$refs.abc.innerHTML = nos.ques
      this.currentQues = nos.qno
      alert(this.currentQues)
    },
    previous () {  
        var x = this.currentQues
        if (x != 1) {
         var y = x-1
         this.currentQues = y 
         alert(this.currentQues)
        }else {
          alert('this is the first question')
        }
    },
    next () {  
        var x = this.currentQues
        if (x != 30) {
         var y = x+1
         this.currentQues = y 
         alert(this.currentQues)
        }else {
          alert('this is the last question')
        }
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
