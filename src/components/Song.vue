<script setup>
  import Oc from "./Oc.vue";
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import Song from '@/ocs/structures/Song';

  const song = ref(null);
  const emojis = ref(0);
  const vocals = ref(0.0000001);
  const timer = ref(null);
  const fancy = ref(false);
  // Sliders
  const timerSliderValue = ref(50);
  const emojiSliderValue = ref(0);
  const vocalSliderValue = ref(0.0000001);
  const fancyCheckboxValue = ref(false);

  const emojisSliderChanged = (slider) => {
    emojis.value = parseInt(slider.currentTarget?.value);
  }
  const vocalSliderChanged = (slider) => {
    vocals.value = parseInt(slider.currentTarget?.value) / 100;
  }

  onMounted(() => {
    timer.value = setInterval(() => {
      song.value.newLine(emojis.value, vocals.value);
    }, 5000);
  })
  onBeforeUnmount(() => {
    clearInterval(timer.value);
  })

  const sliderChanged = (slider) => {
    clearInterval(timer.value);
    timer.value = setInterval(() => {
      song.value.newLine(emojis.value, vocals.value);
    }, parseInt(slider.currentTarget?.value) * 100);
  }

  const fancyCheckboxChanged = (checkbox) => {
    const value = checkbox.currentTarget?.checked;
    fancy.value = value;
  }

  const getLinesContainerClass = () => {
    return fancy.value ? 'fancy-lines-container' : '';
  }

  song.value = new Song();
  
</script>

<template>
  <div id="song-header">
    {{ song.getTitle() }}
  </div>
  <div id="song-section">
    {{ song.getSection() }}
  </div>
  <div id="main-body">
    <div id="lines-container" :class="getLinesContainerClass()">
      <div id="notes" class="wiggle">♫</div>
      <TransitionGroup id="lines" name="list" tag="ul">
        <li v-for="(line, i) in song.getLines()" :key="line.id">
          <Oc
            :oc="line.value"
            :index="i"
            :iscurrent="i === 6"
            :fancy="fancy">
          </Oc>
        </li>
      </TransitionGroup>
    </div>
    <div id="swing">
      <div class="slidecontainer">
        <div class="element-title">speed...</div>
        <input
          type="range"
          min="1"
          max="70"
          value="0"
          class="slider rtl"
          id="speed"
          v-model="timerSliderValue"
          v-on:change="sliderChanged"
        >
      </div>
      <div class="slidecontainer">
        <div class="element-title">emojis...</div>
        <input
          type="range"
          min="0"
          max="100"
          value="50"
          class="slider"
          id="emojis"
          v-model="emojiSliderValue"
          v-on:change="emojisSliderChanged"
        >
      </div>
      <div class="slidecontainer">
        <div class="element-title">vocals...</div>
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class="slider"
          id="vocals"
          v-model="vocalSliderValue"
          v-on:change="vocalSliderChanged"
        >
      </div>
      <div class="slidecontainer">
        <div class="element-title">fancy...</div>
        <input
          type="checkbox"
          class="checkbox"
          id="fancy"
          v-model="fancyCheckboxValue"
          v-on:change="fancyCheckboxChanged"
        >
      </div>
      <div class="resetcontainer">
        <button
          v-on:click="song.init"
          id="reset-button">
          Reset...
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #song-header {
    color: white;
    font-size: 40px;
    padding-left: 75px;
    padding-top: 20px;
    text-shadow: 1px 1px 2px #999, 0 0 1em #999, 0 0 0.2em #999;
    color: #bbb;
  }

  #song-section {
    color: white;
    font-size: 30px;
    padding-left: 75px;
    text-shadow: 1px 1px 2px #999, 0 0 1em #999, 0 0 0.2em #999;
    color: #999;
  }

  #main-body {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }

  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    80% { transform: rotate(0deg); }
    85% { transform: rotate(5deg); }
    95% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }

  #notes.wiggle {
    display: inline-block;
    animation: wiggle 1s infinite;
  }
  #notes.wiggle:hover {
    animation: none;
  }
  #notes {
    width: 40px;
    align-self: flex-end;
    color: white;
    font-size: 30px;
    padding-left: 30px;
    padding-bottom: 11px;
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
  }

  #lines {
    list-style-type: none;
    padding-left: 30px;
    padding-top: 15px;
    flex-grow: 2;
    align-self: flex-end;
  }
  .fancy-lines-container #lines {
    padding-top: 0px;
  }
  #lines-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
    transition: all 2s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
  .list-leave-active {
    position: absolute;
  }

  /* Slider */
  .slidecontainer {
    padding: 20px;
    padding-bottom: 0px;
    opacity: 0.7;
  }
  .resetcontainer {
    padding: 20px;
    padding-top: 40px;
    opacity: 0.7;
  }
  .slider {
    -webkit-appearance: none;
    width: 100%;
    min-width: 150px;
    height: 15px;
    border-radius: 5px;  
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  .rtl {
    direction: rtl;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #666;
    cursor: pointer;
  }
  .element-title {
    padding: 10px;
    font-size: 20px;
    color: white;
    font-style: italic;
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
  }

  #reset-button {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: .375em;
    box-shadow: none;
    box-sizing: border-box;
    color: #363636;
    cursor: pointer;
    display: inline-flex;
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 1rem;
    height: 2.5em;
    justify-content: center;
    line-height: 1.5;
    padding: calc(.5em - 1px) 1em;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
    font-style: italic;
    text-shadow: 1px 1px 2px #999, 0 0 1em #999, 0 0 0.2em #999;
    font-size: 20px;
  }
  #reset-button:active {
    border-color: #4a4a4a;
    outline: 0;
  }
  #reset-button:focus {
    border-color: #485fc7;
    outline: 0;
  }
  #reset-button:hover {
    border-color: #b5b5b5;
  }
  #reset-button:focus:not(:active) {
    box-shadow: rgba(72, 95, 199, .25) 0 0 0 .125em;
  }
  input[type='checkbox'] {
    -webkit-appearance:none;
    width:30px;
    height:30px;
    background:white;
    border-radius:5px;
    border:2px solid #555;
  }
  input[type='checkbox']:checked {
      background: #999;
  }
</style>
