import game from './game'
import $ from 'jquery'
import Vue from 'vue/dist/vue.esm.js'
import store from 'store'
import './index.scss'

const app = window.app = new Vue({
    el: '#app',
    data: {
        difficulty: 3, // 默认简单
        list: [],
        score: 0
    },
    mounted () {
        const canvas = $('#canvas')
        const body = $('body')
        this.list = store.get('history') || []
        canvas.get(0).width = body.width()
        canvas.get(0).height = body.height()
        this.initGame()

        this.$on('gameEnd', this.saveData.bind(this))
        this.$on('updateScore', this.updateScore.bind(this))
    },

    methods: {

        updateScore (data) {
            this.score = data || 0
        },

        saveData (data) {
            this.list.unshift({
                date: new Date().toLocaleString(),
                score: data
            })
            store.set('history', this.list)
            let conti = confirm("游戏结束，是否继续？");

            if (conti) {
                this.initGame()
            }

        },

        initGame () {
            game.start({
                mode: parseInt(this.difficulty),
                cellCount: 9
            })
            window.game = game
        }
    },

    watch: {
        difficulty: {
            handler (val) {
                this.initGame()
            }
        }
    }

})
