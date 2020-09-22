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
    @keyframes food-backgrounds {
        0% {
            background-image: url("../public/img/pizza-background.gif");
        }
        40% {
            background-image: url("../public/img/icecream-background.gif");
        }
        80% {
            background-image: url("../public/img/banana-background.gif");
        }
        100% {
            background-image: url("../public/img/pizza-background.gif");
        }
    }


    body {
        animation: food-backgrounds 5s infinite ease-in-out;
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
</style>