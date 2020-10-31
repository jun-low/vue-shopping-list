<template>
  <section>
    <div class="form-container">
    <img alt="Shoppingd List" width="400" src="https://cdn.dribbble.com/users/633402/screenshots/5755508/healthyeating_infographic-02.png">
      <form @submit.prevent="addItem">
        <div class="input-container">
          <h2>My Shopping List</h2>
          <input v-model="state.input" type="text" placeholder="Item Name"/>
          <button type="submit" class="submit">Add</button>
        </div>
      </form>
    </div>
    <div class="list-container">
      <ul v-for="(item,index) in state.items" :key="index">
        <li>
          {{item}}
          <button @click="removeItem(index)">X</button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
    const { state, addItem, removeItem } = ItemList();
    return { state, addItem, removeItem };
  }
};
function ItemList() {
  let state = reactive({
    input: '',
    items: ['3 Apples']
  });
  let addItem = () => {
    if (state.input !== ''){
    state.items.push(state.input);
    state.input = '';
    }
  };
  let removeItem = index => {
    state.items.splice(index, 1);
  };
  return { state, addItem, removeItem };
}
</script>

<style scoped>
.input-container{
  margin: 0 25%;
  box-shadow: 0 0 15px rgba(0,0,0,0.125);
  border-radius: 32px;
  padding: 16px;
  background-color: #EBF6EF;
}

input {
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.125);
  height: 28px;
  margin: 16px;
}

input:focus{
  outline:none;
}

.submit {
  padding: 8px;
  border-radius: 4px;
  border: 0px;
  background: #2D5672;
  color: white;
}

.list-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul{
  border-radius: 4px;
  padding: 12px;
  transition: all .25s;
}
ul:hover{
  background: #f8f9f9;
  border-left: 4px solid #03363d;
  box-shadow: 0 2px 15px rgba(0,0,0,.125);
}

ul li {
  list-style: none;
}

li button{    
  border: none;
  border-radius: 2px;
  float: right;
}
</style>