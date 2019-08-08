<template>
<div class="price-layout py-4">
  <div class="container h-100">
     <div class="price-overlay p-2">
       <h1>ДЕТСКИ МАГАЗИН ДЕНИ ШУГАР </h1>
       <h4>ОНЛАЙН МАГАЗИН ЗА ДЕТСКИ ИГРАЧКИ, ДЕТСКИ ДРЕШКИ И ДЕТСКИ ХРАНИ</h4>
<div class="row">
        <div class="col-md-6">
           <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 30px #000"
    fade
    indicators
    img-width=""
    img-height="">
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="http://img.alicdn.com/imgextra/i3/866276081/TB2jpGam8DH8KJjSspnXXbNAVXa_!!866276081.jpg"  class="img-thumbnail"  alt="Center image"/>
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="http://img.alicdn.com/imgextra/i3/866276081/TB2jpGam8DH8KJjSspnXXbNAVXa_!!866276081.jpg" class="img-thumbnail"  alt="Center image" />
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="http://img.alicdn.com/imgextra/i3/866276081/TB2jpGam8DH8KJjSspnXXbNAVXa_!!866276081.jpg" class="img-thumbnail" alt="Center image"/>
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="http://img.alicdn.com/imgextra/i3/866276081/TB2jpGam8DH8KJjSspnXXbNAVXa_!!866276081.jpg" class="img-thumbnail" alt="Center image"/>
  </b-carousel>
        </div>
      <div class="col-md-6">  
         <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 30px #000"
    fade
    indicators
    img-width=""
    img-height="">
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="http://img.alicdn.com/imgextra/i3/866276081/TB2jpGam8DH8KJjSspnXXbNAVXa_!!866276081.jpg"  class="img-thumbnail"  alt="Center image"/>
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="http://img.alicdn.com/imgextra/i3/866276081/TB2jpGam8DH8KJjSspnXXbNAVXa_!!866276081.jpg" class="img-thumbnail"  alt="Center image" />
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="http://img.alicdn.com/imgextra/i3/866276081/TB2jpGam8DH8KJjSspnXXbNAVXa_!!866276081.jpg" class="img-thumbnail" alt="Center image"/>
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="http://img.alicdn.com/imgextra/i3/866276081/TB2jpGam8DH8KJjSspnXXbNAVXa_!!866276081.jpg" class="img-thumbnail" alt="Center image"/>
  </b-carousel>
      </div>
     </div>
     <br>
       <p style="font-size:large; font-style: italic; color: black; font-weight: !important">Влезте в приложението,
          като задължително запишете име и парола!</p>
    <div class="row justify-content-center align-items-center h-50 border: 10px solid #256">
      <div class="col-md-3 col-lg-4">
        <b-card>
          <b-form @submit="onLogin">
            <b-form-group id="userInputGroup"
                          label="ИМЕ:"
                          variant="text-muted"
                          label-for="userInput"
            >
              <b-form-input id="userInput"
                            type="text"
                            v-model="form.user"
                            required
                            placeholder="Enter username">
              </b-form-input>
            </b-form-group>
            <b-form-group id="passwordInputGroup"
                          label="ПАРОЛА:"
                          variant="text-muted"
                          label-for="passwordInput">
              <b-form-input id="passwordInput"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Enter password">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="dark" block>ВХОД</b-button>
          </b-form>
        </b-card>
        <br>
          </div>
          </div> 
           <div class="row">
    <div class="col-sm-4" style="background-color:lavender; ">  
      <a href="http://localhost:8080/#/home/" target="_blank">СЕКЦИЯ ДЕТСКИ ИГРАЧКИ</a>
      <br>
</div>
<div class="col-sm-4" style="background-color:lavender;">  
      <a href="http://localhost:8080/#/dress/" target="_blank">СЕКЦИЯ ДЕТСКИ ДРЕШКИ</a> 
      <br>
      </div>
     <div class="col-sm-4" style="background-color:lavender;">  
      <a href="http://localhost:8080/#/foods/" target="_blank">СЕКЦИЯ ДЕТСКИ ХРАНИ</a> 
      <br>
      </div> 
      </div>
   
      </div>
    </div>
    <br>
     </div>  
 
</template>

<script>
  export default {
    data() {
      return {
        form: {
          user: '',
          password: '',
        },
      };
    },
    methods: {
      onLogin(e) {
        e.preventDefault();
        console.log(JSON.stringify(this.form));
        this.$router.push({path: 'home'});
      },
    },
  };
</script>
<style>
 h1 {
        padding: 0;
        margin-top: 0;
        color: black;
        font-style: bold;
    }
  h4 {
        padding: 0;
        margin-top: 0;
        color: black;
        font-style: bold;
    }
</style>




