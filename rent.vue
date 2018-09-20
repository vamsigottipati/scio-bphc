<template>
  <vuestic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="opened" style="position:fixed;" @toggle-menu="toggleSidebar"/>
    <!-- <catagory-sidebar style="position:absolute;top:90vh;" /> -->
    <main slot="content" id="content" class="content" role="main">

      <!-- SEARCH FILTERS -->

        <div class="row">
          <div class="col-md-5">

          </div>
          <button class="btn btn-secondary btn-micro col-md-2"  v-if="!visiblefilters" @click.prevent="visiblefilters = !visiblefilters">
              Show Filters
          </button>

          <button class="btn btn-secondary btn-micro col-md-2" style="" v-if="visiblefilters" @click.prevent="visiblefilters = !visiblefilters">
              Hide Filters
          </button>
        </div>
        <transition name="fadeIn">
          <div class="row well"  v-if="visiblefilters" style="background-color:white;margin-bottom:-2vh;">
            <input v-model="searchItem" class="searchBar col-md-4" type="text" name="searchInput" style="line-height: 1.25;margin-top:3vh" placeholder="Search Item"/>
          <!--  <button class="btn btn-info btn-micro col-md-2" @click.prevent="search" style="margin-left:1vw;margin-top:2.8vh;height:6vh;">
              Search
            </button> -->
            <div class="col-md-1">
            </div>
            <span class="col-md-5" style="cursor:pointer">
              <input type="range" v-model="rangeValue" name="range" style="width:90%;margin-top:1vh;" min="0" max="20" step="1" value="0">
              <label for="range" style="margin-left:20%;width:50%;font-size:1.5rem;margin-top:3vh;font-weight:800;">Max Distance</label>
            </span>
            <span class="col-md-1">
              <div class="rangeVal"> {{ rangeValue }} km</div>
            </span>
          </div>
        </transition>
      <div class="box">
        <article v-for="listedItem in filteredItems">
          <img class="img" :src=' listedItem.itemImg '/>
          <div class="txt">
            <p>{{ listedItem.itemName }}</p>
            <span @click.prevent="rentalRoute(listedItem)" style="cursor:pointer;" class="main-link">Rent</span>
            <span class="main-link" style="margin-left:10px;cursor:pointer;" @click.prevent="showdetailsModal(listedItem)">More</span>
            <i class="fas fa-map-marker-alt animated "
              @mouseover="animationStatus = !animationStatus"
              @mouseleave="animationStatus = !animationStatus"
              @click.prevent="showLocation(listedItem)"
              style="float:right;font-size:1.7rem;color:#05386b;cursor:pointer"
              v-bind:class="{ 'faa-bounce': animationStatus}"></i>
          </div>
        </article>
      </div>

      <!-- Models -->

        <!-- More Model -->

      <vuestic-modal :show.sync="show" v-bind:small="true" v-bind:force="true" ref="detailsModal" :cancelClass="'none'"
                     okText="Okay">
        <div slot="title">More Details</div>
        <div ref="detailsBody"></div>
      </vuestic-modal>

       <!-- More Model End-->

        <!-- Rent Modal -->

      <vuestic-modal :show.sync="show" v-bind:large="true" :display="'noDisplay'" v-bind:force="true" ref="rentModal" :cancelClass="'none'"
                     okText="Rent">
        <div slot="title" ref="rentHead"></div>
        <div class="row">
          <div class="col-md-1"></div>
          <img ref="rentImage" class="col-md-10" style="height:70vh;margin-bottom: 5vh;"  />
          <div class="moreDetails col-md-10" ref="rentDetails"></div>
        </div>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10 well">
            <div class="row">
              <div class="col-md-3"></div>
              <p class="col-sm-3" style="margin-top:1vh;font-size:1.5rem;font-weight: 600"> Cost </p>
              <button class="btn btn-secondary btn-micro col-md-3" ref="priceBtn" style="cursor:default;color:#05386b;" disabled></button>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>

        <div class="row " style="margin-top:3vh;height:50vh;">
          <div class="col-md-1"></div>
          <div class="col-md-10 well">
            <div class="row">
              <div class="col-md-4"></div>
              <h3 class="col-md-4" style="margin-top:1vh;font-weight: 600"> Item Details </h3>
            </div>
          </div>
        </div>
      </vuestic-modal>

      <!-- Rent Modal End -->

      <!-- Location Modal -->

      <vuestic-modal :show.sync="show" v-bind:large="true" v-bind:force="true" ref="locationModal" :cancelClass="'none'"
                     okText="Close">
        <div slot="title"> Location Of Your Item </div>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10 well" style="height:80vh;">

          </div>
        </div>
        <div class="moreDetails" ref="locationDetails"></div>
      </vuestic-modal>

      <!-- Location Modal End-->

      <!-- Bottom Button -->

      <input type="checkbox"style="position:fixed;" id="actionMenuButton"/>
      <div class="actions-menu" >
        <button class="button button--share">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#ffffff" d="M21,11L14,4V8C7,9 4,14 3,19C5.5,15.5 9,13.9 14,13.9V18L21,11Z" />
          </svg>
        </button>
        <button class="button button--star">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#ffffff" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
        </button>
        <button class="button button--comment">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#ffffff" d="M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35C16.92,9.14 16.92,8.79 16.7,8.58L15.42,7.3C15.21,7.08 14.86,7.08 14.65,7.3L13.65,8.3L15.7,10.35L16.7,9.35M7,14.94V17H9.06L15.12,10.94L13.06,8.88L7,14.94Z" />
          </svg>
        </button>
        <label for="actionMenuButton" class="button button--large pulse button--menu"/>
      </div>
    </main>
  </vuestic-layout>
</template>

<script>

import AppNavbar from './admin/app-navbar/AppNavbar'
import AppSidebar from './admin/app-sidebar/AppSidebar'
import CatogorySidebar from './CatogorySidebar'
import Layout from 'vuestic-theme/vuestic-directives/Layout'
import VuesticLayout from '../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'

export default {
  name: 'rent',
  props: {
  },
  components: {
    VuesticLayout,
    AppNavbar,
    AppSidebar,
    CatogorySidebar
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
      show: true,
      searchItem: '',
      visiblefilters: true,
      animationStatus: true,
      rangeValue: 10,
      listedItems: [
        {
          itemName: 'Something',
          itemImg: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2Fintro.jpg?alt=media&token=d6d199b2-34c1-4532-911b-6b6adc5c1f3f',
          itemOwner: 'somename',
          id: 'iharglfggdsxnaerf',
          location: 'Location1',
          price: '100',
          catagory: 'Product1',
        },
        {
          itemName: 'Something2',
          itemImg: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2Fintro.jpg?alt=media&token=d6d199b2-34c1-4532-911b-6b6adc5c1f3f',
          itemOwner: 'somename',
          id: 'iharglfgssfaerf',
          location: 'Location2',
          price: '67',
          catagory: 'Product2',
        },
        {
          itemName: 'Something3',
          itemImg: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2Fintro.jpg?alt=media&token=d6d199b2-34c1-4532-911b-6b6adc5c1f3f',
          itemOwner: 'somename',
          id: 'iharglfaevvffrf',
          location: 'Location3',
          price: '345',
          catagory: 'Product3',
        },
        {
          itemName: 'lavada',
          itemImg: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2Fintro.jpg?alt=media&token=d6d199b2-34c1-4532-911b-6b6adc5c1f3f',
          itemOwner: 'somename',
          id: 'iharglfsdvvaerf',
          location: 'Location4',
          price: '453',
          catagory: 'Product4',
        },
        {
          itemName: 'Something5',
          itemImg: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2Fintro.jpg?alt=media&token=d6d199b2-34c1-4532-911b-6b6adc5c1f3f',
          itemOwner: 'somename',
          id: 'iharglfdfbdfaerf',
          location: 'Location5',
          price: '777',
          catagory: 'Product5',
        },
        {
          itemName: 'Something6',
          itemImg: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2Fintro.jpg?alt=media&token=d6d199b2-34c1-4532-911b-6b6adc5c1f3f',
          itemOwner: 'somename',
          id: 'iharglfwetwaerf',
          location: 'Location6',
          price: '555',
          catagory: 'Product6',
        },
        {
          itemName: 'Something7',
          itemImg: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2Fintro.jpg?alt=media&token=d6d199b2-34c1-4532-911b-6b6adc5c1f3f',
          itemOwner: 'somename',
          id: 'iharglfaersdff',
          location: 'Location7',
          price: '222',
          catagory: 'Product7',
        },
        {
          itemName: 'Something8',
          itemImg: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2Fintro.jpg?alt=media&token=d6d199b2-34c1-4532-911b-6b6adc5c1f3f',
          itemOwner: 'somename',
          id: 'iharglfhjgjhaerf',
          location: 'Location8',
          price: '333',
          catagory: 'Product8',
        },
      ]
    }
  },
  computed: {
    filteredItems: function () {
      return this.listedItems.filter((listedItem) => {
        return listedItem.itemName.toLowerCase().match(this.searchItem.toLowerCase())
      })
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
    rentalRoute (itemDetails) {
      this.$refs.rentModal.open()
      this.$refs.rentHead.innerHTML = 'Rent ' + itemDetails.itemName
      this.$refs.rentImage.src = itemDetails.itemImg
      this.$refs.priceBtn.innerHTML = itemDetails.price + '₹'
    },
    showdetailsModal (itemDetails) {
      this.$refs.detailsModal.open()
      this.$refs.detailsBody.innerHTML = itemDetails.location
    },
    showLocation (itemDetails) {
      this.$refs.locationModal.open()
    }
  }
}
</script>

<style scoped>
/* Global */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* Filter Block Transition */

.fadeIn-enter-active {
  animation: bounceIn 0.5s;
}

.nodisplay {
  display: none;
}

.fadeIn-leave-active {
  animation: bounceIn 0.5s reverse;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  /*60% {
    transform: scale(0.8);
  }*/
  100% {
    transform: 1;
    opacity: 1;
  }
}

/*  Filter Block Transition End */

/* SEARCH BAR STYLES */

.searchBar {
  border-radius: 2rem;
  border: 2px solid #10e7dc;
  width: 15vw;
  height: 2.25rem;
  text-align: center;
  margin-top:1vh;
  text-decoration: none;
  outline: none;

}

.box {
  margin: 50px auto;
  text-align: center;
}

/* Range Filter */

.rangeVal {
  border-bottom: 4px dashed #bdc3c7;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  width:15vh;
  line-height: 30px;
  text-shadow: white 2px 2px 2px;
}

input[type="range"] {
  display: block;
  -webkit-appearance: none;
  background-color: #bdc3c7;
  height: 5px;
  border-radius: 5px;
  outline: 0;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #e74c3c;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
​ input[type="range"]::-webkit-slider-thumb:hover {
  background-color: white;
  border: 2px solid #e74c3c;
}
input[type="range"]::-webkit-slider-thumb:active {
  transform: scale(1.6);
}


/* Range-End */

/* Cards */
article {
  display: inline-block;
  position: relative;
  width: 250px;
  margin: 20px;
  text-align: left;
  vertical-align: top;
  background: #FFFFFF;
  -webkit-box-shadow: 3px 3px 6px -2px rgba(0,0,0,0.2);
  -moz-box-shadow: 3px 3px 6px -2px rgba(0,0,0,0.2);
  box-shadow: 3px 3px 6px -2px rgba(0,0,0,0.2);
}

.img {
  position: relative;
  width: 100%;
  height: 200px;
  background: #333;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.txt {
  padding: 10%;
}

p {
  font-size: .9em;
  margin: 0 0 .5em 0;
}

.main-link {
  padding-bottom: .3em;
  text-decoration: none;
  color: #90A4AE;
  border-bottom: 3px solid #607D8B;
  transition: ease .5s;
}

.main-link:hover {
  border-bottom: 3px solid #B0BEC5;
}

.search-bar{
  width:20vw;
  margin-left:18vw;
}

#actionMenuButton {
  display: none;

}
.container {
  position: relative;
  background: #fff;
  width: 320px;
  height: 528px;
  margin: 50px auto;
}
.button {
  background: #e74c3c;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
}
.button svg {
  position: relative;
  top: 1px;
  right: 1px;
}
.button--large {
  width: 60px;
  height: 60px;
}
.button--menu:after,.button--menu:before {
  content: "";
  display: block;
  width: 25px;
  height: 3px;
  background: #fff;
  position: absolute;
  top: 29px;
  left: 18px;
  transition: transform 100ms;
}
.button--menu:after {
  transform: translateY(-5px);
}
.button--menu:before {
  transform: translateY(5px);
}
.button--share {
  background: #f39c12;
}
.button--star {
  background: #2ecc71;
}
.button--comment {
  background: #16a085;
}
.actions-menu {
  position: fixed;
  width: 60px;
  height: 60px;
  right: 15px;
  bottom: 15px;
}
.actions-menu .button {
  position: absolute;
  top: 8px;
  left: 8px;
  opacity: 0;
  transition: top 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
              left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
              opacity 200ms;
}
.actions-menu .button--menu {
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  z-index: 0;
}
.button--menu, #actionMenuButton:checked + .actions-menu > .button {
  opacity: 1;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}
#actionMenuButton:checked + .actions-menu > .button--menu:after {
  transform: rotate(45deg);
}
#actionMenuButton:checked + .actions-menu > .button--menu:before {
  transform: rotate(-45deg);
}
#actionMenuButton:checked + .actions-menu > .button--share {
  top: -70px;
}
#actionMenuButton:checked + .actions-menu > .button--star {
  top: -50px;
  left: -50px;
}
#actionMenuButton:checked + .actions-menu > .button--comment {
  left: -70px;
}

/* Pulse Animation  */

.pulse {
  box-shadow: 0 0 0 rgb(210, 150, 29);
  animation: pulse 1s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(210, 150, 29, 0.8);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(210, 150, 29, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(210, 150, 29, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(210, 150, 29, 0.8);
    box-shadow: 0 0 0 0 rgba(210, 150, 29, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(210, 150, 29, 0.8);
      box-shadow: 0 0 0 10px rgba(210, 150, 29, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(210, 150, 29, 0);
      box-shadow: 0 0 0 0 rgba(210, 150, 29, 0);
  }
}

</style>
