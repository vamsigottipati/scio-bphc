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
          <button type="button" @click.prevent="displayQues11" class="btn">11</button>
          <button type="button" @click.prevent="displayQues12" class="btn">12</button>
          <button type="button" @click.prevent="displayQues13" class="btn">13</button>
          <button type="button" @click.prevent="displayQues14" class="btn">14</button>
          <button type="button" @click.prevent="displayQues15" class="btn">15</button>
          <button type="button" @click.prevent="displayQues16" class="btn">16</button>
          <button type="button" @click.prevent="displayQues17" class="btn">17</button>
          <button type="button" @click.prevent="displayQues18" class="btn">18</button>
          <button type="button" @click.prevent="displayQues19" class="btn">19</button>
          <button type="button" @click.prevent="displayQues20" class="btn">20</button>
        </div>
        <div class="row">
          <button type="button" @click.prevent="displayQues21" class="btn">21</button>
          <button type="button" @click.prevent="displayQues22" class="btn">22</button>
          <button type="button" @click.prevent="displayQue23" class="btn">23</button>
          <button type="button" @click.prevent="displayQues24" class="btn">24</button>
          <button type="button" @click.prevent="displayQues25" class="btn">25</button>
          <button type="button" @click.prevent="displayQues26" class="btn">26</button>
          <button type="button" @click.prevent="displayQues27" class="btn">27</button>
          <button type="button" @click.prevent="displayQues28" class="btn">28</button>
          <button type="button" @click.prevent="displayQues29" class="btn">29</button>
          <button type="button" @click.prevent="displayQues30" class="btn">30</button>
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
          <div class="col-md-12 mainQues default" ref="ques1">
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
          <div class="col-md-12 mainQues default" ref="ques4">
            <p class='q'>{{questions[3].quesno}}. {{questions[3].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[3].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[3].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[3].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[3].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques5">
            <p class='q'>{{questions[4].quesno}}. {{questions[4].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[4].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[4].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[4].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[4].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques6"> 
            <p class='q'>{{questions[5].quesno}}. {{questions[5].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[5].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[5].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[5].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[5].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues default" ref="ques7">
            <p class='q'>{{questions[6].quesno}}. {{questions[6].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[6].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[6].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[6].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[6].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques8">
            <p class='q'>{{questions[7].quesno}}. {{questions[7].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[7].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[7].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[7].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[7].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques9"> 
            <p class='q'>{{questions[8].quesno}}. {{questions[8].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[8].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[8].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[8].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[8].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues default" ref="ques10">
            <p class='q'>{{questions[9].quesno}}. {{questions[9].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[9].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[9].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[9].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[9].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques11">
            <p class='q'>{{questions[10].quesno}}. {{questions[10].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[10].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[10].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[10].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[10].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques12"> 
            <p class='q'>{{questions[12].quesno}}. {{questions[12].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[11].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[11].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[11].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[11].opt4}}</span> <br>
            </div>
          </div>
           <div class="col-md-12 mainQues default" ref="ques13">
            <p class='q'>{{questions12.quesno}}. {{questions[12].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[12].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[12].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[12].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[12].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques14">
            <p class='q'>{{questions[13].quesno}}. {{questions[13].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[13].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[13].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[13].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[13].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques15"> 
            <p class='q'>{{questions[14].quesno}}. {{questions[14].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[14].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[14].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[14].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[14].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues default" ref="ques16">
            <p class='q'>{{questions[15].quesno}}. {{questions[15].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[15].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[15].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[15].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[15].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques17">
            <p class='q'>{{questions[16].quesno}}. {{questions[16].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[16].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[16].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[16].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[16].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques18"> 
            <p class='q'>{{questions[17].quesno}}. {{questions[17].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[17].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[17].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[17].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[17].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues default" ref="ques19">
            <p class='q'>{{questions[18].quesno}}. {{questions[18].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[18].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[18].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[18].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[18].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques20">
            <p class='q'>{{questions[19].quesno}}. {{questions[19].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[19].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[19].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[19].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[19].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques21"> 
            <p class='q'>{{questions[20].quesno}}. {{questions[20].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[20].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[20].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[20].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[20].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues default" ref="ques22">
            <p class='q'>{{questions[21].quesno}}. {{questions[21].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[21].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[21].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[21].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[21].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques23">
            <p class='q'>{{questions[22].quesno}}. {{questions[22].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[22].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[22].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[22].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[22].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques24"> 
            <p class='q'>{{questions[23].quesno}}. {{questions[23].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[23].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[23].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[23].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[23].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues default" ref="ques25">
            <p class='q'>{{questions[24].quesno}}. {{questions[24].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[24].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[24].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[24].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[24].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques26">
            <p class='q'>{{questions[25].quesno}}. {{questions[25].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[25].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[25].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[25].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[25].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques27"> 
            <p class='q'>{{questions[26].quesno}}. {{questions[26].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[26].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[26].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[26].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[26].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues default" ref="ques28">
            <p class='q'>{{questions[27].quesno}}. {{questions[27].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[27].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[27].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[27].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[27].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques29">
            <p class='q'>{{questions[28].quesno}}. {{questions[28].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[28].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[28].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[28].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[28].opt4}}</span> <br>
            </div>
          </div>
          <div class="col-md-12 mainQues" ref="ques30"> 
            <p class='q'>{{questions[29].quesno}}. {{questions[29].ques}}</p>
            <div class='ans'>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[29].opt1}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[29].opt2}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt"> {{questions[29].opt3}}</span> <br>
              <input type="checkbox" class="opt"/> <span class="ansopt">{{questions[29].opt4}}</span> <br>
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

// import db from './firebaseINIT.js'

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
          quesno: 3,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 4,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 5,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 6,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 7,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 8,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 9,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 10,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 11,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 12,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 13,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 14,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 15,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 16,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 17,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 18,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 19,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 20,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 21,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 22,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 23,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 24,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 25,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 26,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 27,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
        },
        {
          quesno: 28,
          ques: 'some ques here 3',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt3',
        },
        {
          quesno: 29,
          ques: 'some ques here 1',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt1',
        },
        {
          quesno: 30,
          ques: 'some ques here 2',
          opt1: 'opt1',
          opt2: 'opt2',
          opt3: 'opt3',
          opt4: 'opt4',
          corect: 'opt2',
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
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'
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
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'
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
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'

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
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'
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
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'

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
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'
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
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'
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
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'
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
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'

    },
    displayQues10 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'block'
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'
    },
    displayQues11 () {
     this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.$refs.ques11.style.display = 'block'
      this.$refs.ques12.style.display = 'none'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'

    },
    displayQues12 () {
      this.$refs.ques1.style.display = 'none'
      this.$refs.ques2.style.display = 'none'
      this.$refs.ques3.style.display = 'none'
      this.$refs.ques4.style.display = 'none'
      this.$refs.ques5.style.display = 'none'
      this.$refs.ques6.style.display = 'none'
      this.$refs.ques7.style.display = 'none'
      this.$refs.ques8.style.display = 'none'
      this.$refs.ques9.style.display = 'none'
      this.$refs.ques10.style.display = 'none'
      this.$refs.ques11.style.display = 'none'
      this.$refs.ques12.style.display = 'block'
      this.$refs.ques13.style.display = 'none'
      this.$refs.ques14.style.display = 'none'
      this.$refs.ques15.style.display = 'none'
      this.$refs.ques16.style.display = 'none'
      this.$refs.ques17.style.display = 'none'
      this.$refs.ques18.style.display = 'none'
      this.$refs.ques19.style.display = 'none'
      this.$refs.ques20.style.display = 'none'
      this.$refs.ques21.style.display = 'none'
      this.$refs.ques22.style.display = 'none'
      this.$refs.ques23.style.display = 'none'
      this.$refs.ques24.style.display = 'none'
      this.$refs.ques25.style.display = 'none'
      this.$refs.ques26.style.display = 'none'
      this.$refs.ques27.style.display = 'none'
      this.$refs.ques28.style.display = 'none'
      this.$refs.ques29.style.display = 'none'
      this.$refs.ques30.style.display = 'none'
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

.default {
  display: block;
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
