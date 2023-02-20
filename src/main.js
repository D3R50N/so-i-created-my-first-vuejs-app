import { createApp } from 'vue/dist/vue.esm-bundler.js'

// import './assets/main.css'

const app = createApp({
    data() {
        return {
            title: 'Todo App',
            text: '',
            todos: [
            ],
        }
    }, 
    methods: {
        addTodo() {
            this.todos.push({
                id: Date.now(),
                title: this.text,
                date: date_to_str(),
            })
            this.text = ''
        }
    }
})


app.mount('#app')


function date_to_str(date=Date.now()) {
    let d = new Date(date)
    return d.toLocaleString()

}