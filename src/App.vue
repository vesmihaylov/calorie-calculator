<template>
    <div id="app">
        <Calculator projectTitle="Calorie Calculator"/>
    </div>
</template>

<script>
    import Calculator from './components/Calculator.vue'

    export default {
        name: 'App',
        components: {
            Calculator
        }
    }
</script>

<style>
    body {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    .background {
      background: linear-gradient(132deg, #DE6262, #FFB88C, #FFB3F4);
      background-size: 400% 400%;
      animation: Gradient 15s ease infinite;
      position: relative;
      height: 100vh;
      width: 100%;
      overflow: hidden;
      padding:0;
      margin:0px;
    }

    @keyframes Gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
</style>