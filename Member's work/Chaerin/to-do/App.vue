<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(() => todos.values.sort((a, b) => { //ascending to-do list
    return b.createdAt - a.createdAt
}))

const addTodo = () => {
    if (input_content.value.trim() === '' || input_category.value === null) {
        return
    }

    todos.value.push({
        content: input_content.value,
        category: input_category,value,
        done: false,
        createdAt: new Date.getTime()
    })
    //console.log("addTodo");
    input_content.value = ''
    input_category.value = null
}

const removeTodo = todo => {
    todos.value = todos.value.filter(t => t !== todo)
}

watch(todos, newVal => {
    localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })

watch(name, (newVal) => {
    localStorage.setItem('name', newVal) //setting local storage name
})

onMounted(() => {
    name.value = localStorage.getItem("name") || ''
    todos.value = JSON.parse(localStorage.getItem('todos')) || []
}) // saves the name when refreshed

</script>

<template>
    <main class="app">
        <section class="greeting">
            <h2 class="title">
                What's up, <input type="text" placeholder="Name here"
                v-model="name" />
            </h2>
        </section>    

        <section class="create-to-do">
            <h3>CREATE A TODO</h3>

                <form @submit.prevent="addTodo">
                    <h4>What's on your todo list?</h4>
                    <input
                        type="text"
                        placeholder="e.g.make a video" 
                        v-model="input_content" />

                    <h4>Pick a cateogry</h4>

                    <div class="options">

                        <label>
                            <input
                                type="radio"
                                name="category"
                                id="category1"
                                value="business"
                                v-model="input_category" />
                                <span class="bubble business"></span>
                                <div>Business</div>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="category"
                                id="category1"
                                value="personal"
                                v-model="input_category" />
                                <span class="bubble personal"></span>
                                <div>Personal</div>
                        </label>

                    </div>

                    <input type="submit" value="Add todo" />
                </form>
        </section>

        <section class="todo-list">
            <h3>TODO LIST</h3>
            <div class="list">
                
                <div v-for="todo in todos_asc" :class="`todo-item ${todo.done &&
                'done'}`">

                    <label>
                        <input type="checkbox" v-mode="todo.done" />
                        <span: class="`bubble ${todo.category}`"></span>
                    </label>

                    <div class="todo-content">
                        <input type="text" v-model="todo.content">
                    </div>

                    <div class="actions">
                        <button class="delte" @click="removeTodo(todo)">Delete</button>
                    </div>

                </div>
            </div>
        </section>
    </main>    
</template>
