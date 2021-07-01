<template>
  <div class="background">
    <div class="container h-100">
      <div class="d-flex justify-content-md-center align-items-center vh-100">
        <div class="jumbotron bg-light">
          <div class="form-group input-group-lg">
            <label>Product calories <strong>(per 100g)</strong></label>
            <input type="text" class="form-control" v-model="form.kcal" @keypress="isNumber($event)" id="kcal">
          </div>
          <div class="form-group input-group-lg">
            <label>Product carbohydrates <strong>(per 100g)</strong></label>
            <input type="text" class="form-control" v-model="form.carbs" @keypress="isNumber($event)"
                   id="carbs">
          </div>
          <div class="form-group input-group-lg">
            <label>Product fats <strong>(per 100g)</strong></label>
            <input type="text" class="form-control" v-model="form.fats" @keypress="isNumber($event)" id="fats">
          </div>
          <div class="form-group input-group-lg">
            <label>Product protein <strong>(per 100g)</strong></label>
            <input type="text" class="form-control" v-model="form.protein" @keypress="isNumber($event)"
                   id="protein">
          </div>
          <div class="form-group input-group-lg">
            <label>How much grams did you eat?</label>
            <input type="text" class="form-control" v-model="form.grams" @keypress="isNumber($event)"
                   id="grams">
          </div>
          <hr>
          <h3>Results</h3>
          <table class="table table-danger table-borderless table-responsive">
            <thead>
            <tr>
              <th scope="col">Total calories</th>
              <th scope="col">Total carbohydrates</th>
              <th scope="col">Total fats</th>
              <th scope="col">Total protein</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>{{ (form.grams * form.kcal) / 100 }}</th>
              <td>{{ (form.grams * form.carbs) / 100 }}</td>
              <td>{{ (form.grams * form.fats) / 100 }}</td>
              <td>{{ (form.grams * form.protein) / 100 }}</td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        grams: null,
        kcal: null,
        carbs: null,
        fats: null,
        protein: null,

      }
    }
  },
  methods: {
    isNumber: function (evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>