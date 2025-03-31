<template>

  <h1 class="mb-5">Data Binding</h1>

  <!-- 1. Binding Text -->
  <h4>Binding Text</h4>
  <p>Hello: {{ name }}</p>
  <div v-text="name"></div>
  <hr class="my-3">

  <!-- 2. Binding HTML -->
  <h4>Binding Html</h4>
  <p>{{ play }}</p>
  <div v-text="play"></div>
  <div v-html="play"></div>
  <hr class="my-3">

  <!-- 3. Binding Attributes -->
  <h4>Binding Attributes</h4>
  <p v-bind:id="headingId">Article Title</p><!-- inspect and see id="1" --><!-- v-bind:id shorthand is :id -->
  <button :disabled="isDisabled">Pay Now</button>
  <hr class="my-3">

  <!-- 4. Binding Class -->
  <h4>Binding Class</h4>

  <p class="underline">Static Class</p>
  <!-- this underline class is a static class which never changed and always present in the html element -->

  <p :class="status">Dynamic Class</p>

  <p class="underline" :class="status">Both Static and Dynamic class added</p>

  <p :class="isPromoted && 'promoted'">Conditional Binding</p>
  <!-- if  isPromoted is true then .promoted style will be applied -->

  <p :class="isSoldOut ? 'sold-out' : 'new'">Conditional Binding and Ternary Operator</p>
  <!-- if  isSoldOut is true then .sold-out style will be applied otherwise .new -->

  <p :class="['new', 'promoted']">Array binding classes</p>

  <p :class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']">Array Conditional Binding and Ternary Operator
  </p>

  <p :class="{ promoted: isPromoted, new: !isSoldOut, 'sold-out': isSoldOut }">Object Conditional</p>

  <hr class="my-3">





  <!-- 5. Binding styles -->
  <h4>Binding Styles</h4>

  <p :style="{ color: highlightColor }">Object Syntax Inline Style 1</p>

  <p :style="{ color: highlightColor, fontSize: textSize + 'px', padding: '10px', }">Object Syntax Inline Style 2 </p> 
    <!-- also can use 'font-size' -->

  <p :style="headerStyleObject">Style Object</p>
  <!-- in stead of using inline style for code complex style object should be used -->

  <div :style="[baseStyleObject, successStyleObject]">Array Syntax Success Style</div>

  <div :style="[baseStyleObject, dangerStyleObject]">Array Syntax Danger Style</div>

  <hr class="my-3">

  <!-- 6. Conditional Rendering (v-if, v-else, v-else-if, v-show) -->
  <h4>Conditional Rendering</h4>
  <p v-if="num === 0">The number is zero</p>
  <p v-else-if="num < 0">The number is negative</p>
  <p v-else-if="num > 0">The number is positive</p>
  <p v-else>Not a number</p>

  <template v-if="showElement"><!-- use template to avoid extra div -->
    <p>Moana</p>
    <p>Maherin</p>
  </template>

  <p v-show="showElement">Using v-show</p>

  <hr class="my-3">






  <!-- 7. List Rendering -->
  <h4>List Rendering</h4>

  <p><b>List</b></p>
  <p v-for="name in names" :key="name">{{ name }}</p>

  <p><b>List with index</b></p>
  <p v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</p>

  <p><b>List with object</b></p>
  <p v-for="name in fullNames" :key="name.first">{{ name.first }} {{ name.last }}</p>

  <p><b>List with Array</b></p>
  <div v-for="actor in actors" :key="actor.name">
    <p :style="{ color: highlightColor }">{{ actor.name }}</p>
    <p v-for="movie in actor.movies" :key="movie">{{ movie }}</p>
  </div>

  <p><b>List with Array with value, key and index</b></p>
  <p v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </p>

  <p><b>Conditional List Rendering</b></p>
  <template v-for="name in namesall" :key="name"> 
    <p v-if="name === 'Bruce'">{{ name }}</p>
  </template>

</template>

<script>

export default {
  data() {
    return {

      /* 1. Binding Text  */
      name: 'Moana',

      /* 2. Binding HTML */
      play: '<p><b>Cricket</b></p>',

      /* 3. Binding Attributes  */
      headingId: 5,
      isDisabled: true,

      /* 4. Binding Class  */
      status: "danger",
      isPromoted: true,
      isSoldOut: true,

      /* 5. Binding Styles  */
      highlightColor: 'green',
      textSize: 24,
      headerStyleObject: {
        color: 'orange',
        fontSize: '24px',
      },
      baseStyleObject: {
        fontSize: '24px',
        padding: '10px',
        margin: '10px',
      },
      successStyleObject: {
        color: 'green',
        backgroundColor: 'lightgreen',
        border: '1px solid green',
      },
      dangerStyleObject: {
        color: 'darkred',
        backgroundColor: 'red',
        border: '3px solid darkred',
      },

      /* 6. Conditional Rendering (v-if, v-else, v-else-if, v-show)  */
      num: 5,
      showElement: true,

      /* 7. List Rendering */
      names: ['Bruce', 'Clark', 'Diana'],
      fullNames: [
        { first: 'Bruce', last: 'Wayne' },
        { first: 'Clark', last: 'Kent' },
        { first: 'Princess', last: 'Diana' },
      ],
      actors: [
        {
          name: 'Christian Bale',
          movies: ['Batman', 'American Psycho'],
        },
        {
          name: 'Di Caprio',
          movies: ['Titanic', 'Inception'],
        },
      ],
      myInfo: {
        name: 'Vishwas',
        channel: 'Codevolution',
        course: 'Vue 3',
      },
      namesall: ['Bruce', 'Clark', 'Diana'], /* COnditional List Rendering  */



    };
  }
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}

.danger {
  color: red;
}

.success {
  color: green;
}

.promoted {
  font-style: italic;
}

.sold-out {
  color: pink;
}

.new {
  color: olivedrab;
}
</style>
