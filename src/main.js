import { createApp } from 'vue/dist/vue.esm-bundler.js'

// import './assets/main.css'

const app = createApp({
    data() {
        return {
          title: "Todo App",
          text: "",
          todos: [
            
          ],
        };
    }, 
    methods: {
        addTodo() {
            this.todos.push({
              id: Date.now(),
              title: this.text,
              date: date_to_str(),
              class: "",
            });
            this.text = ''
        }, 
        removeTodo(id) {
            this.todos.filter((todo) => todo.id == id)[0].class = "fadeout"
            setTimeout(() => {
                this.todos = this.todos.filter(todo => todo.id !== id)
            }, 200)
            // this.todos = this.todos.filter(todo => todo.id !== id)
        }
    }
})


app.mount('#app')


function date_to_str(date=Date.now()) {
    let d = new Date(date)
    return d.toLocaleString()

}