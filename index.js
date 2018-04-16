import game from './game'
import $ from 'jquery'
import Vue from 'vue/dist/vue.esm.js'



new Vue({
    el: '#app',
    mounted () {
        const canvas = $('#canvas')
        const body = $('body')

        canvas.get(0).width = body.width()
        canvas.get(0).height = body.height()
        console.log(game)
        game.start()
        window.game = game
    }
})
