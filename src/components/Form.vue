<template>
  <h1 class="mb-5">Form Handling</h1>

  <form @submit.prevent="submitForm" class="p-3 border rounded shadow-sm">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" id="name" v-model.trim="formValues.name" class="form-control" />
    </div>

    <div class="mb-3">
      <label for="profile" class="form-label">Profile Summary</label>
      <textarea id="profile" v-model="formValues.profileSummary" class="form-control"></textarea>
    </div>

    <div class="mb-3">
      <label for="country" class="form-label">Country</label>
      <select id="country" v-model="formValues.country" class="form-select">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="job-location" class="form-label">Job Location</label>
      <select id="job-location" v-model="formValues.jobLocation" multiple class="form-select">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div class="form-check mb-3">
      <input id="remoteWork" type="checkbox" v-model="formValues.remoteWork" true-value="yes" false-value="no"
        class="form-check-input" />
      <label for="remoteWork" class="form-check-label">Open to remote work?</label>
    </div>

    <div class="mb-3">
      <label class="form-label">Skill Set</label>
      <div class="form-check">
        <input type="checkbox" id="html" value="html" v-model="formValues.skillSet" class="form-check-input" />
        <label for="html" class="form-check-label">HTML</label>
      </div>
      <div class="form-check">
        <input type="checkbox" id="css" value="css" v-model="formValues.skillSet" class="form-check-input" />
        <label for="css" class="form-check-label">CSS</label>
      </div>
      <div class="form-check">
        <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet"
          class="form-check-input" />
        <label for="javascript" class="form-check-label">JavaScript</label>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Years of Experience</label>
      <div class="form-check">
        <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience" class="form-check-input" />
        <label for="0-2" class="form-check-label">0-2</label>
      </div>
      <div class="form-check">
        <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience" class="form-check-input" />
        <label for="3-5" class="form-check-label">3-5</label>
      </div>
      <div class="form-check">
        <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience" class="form-check-input" />
        <label for="6-10" class="form-check-label">6-10</label>
      </div>
      <div class="form-check">
        <input type="radio" id="10+" value="10+" v-model="formValues.yearsOfExperience" class="form-check-input" />
        <label for="10+" class="form-check-label">10+</label>
      </div>
    </div>

    <div class="mb-3">
      <label for="age" class="form-label">Age</label>
      <input type="number" id="age" v-model.number="formValues.age" class="form-control" />
    </div>

    <div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>

  <div class="mt-5">
    <pre>
    {{ JSON.stringify(formValues, null, 2) }}
  </pre>
  </div>

</template>

<script>

export default {
  data() {
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        jobLocation: [],
        remoteWork: 'no',
        skillSet: [],
        yearsOfExperience: '',
        age: null,
      },

    };
  },
  methods: {
    submitForm() {
      console.log('form values', this.formValues)
    },
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input+label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
