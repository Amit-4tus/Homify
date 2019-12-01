<template>
  <div class="about">
    <!-- <h1>About Us</h1>
    <p>We like You</p> -->
    <!-- <h2>Lets Chat About {{topic}}</h2> -->
    <!-- <label> -->
      <!-- <input type="radio" value="Politics" v-model="topic" @change="changeTopic" />  -->
      <!-- Politics
    </label>
    <label> -->
      <!-- <input type="radio" value="Love" v-model="topic" @change="changeTopic" />  -->
      <!-- Love
    </label>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        {{msg.txt}}
      </li>
    </ul> -->
    <ul>
      <li v-for="(order, idx) in orders" :key="idx">
        {{order.user}}
      </li>
        <li>
          <button @click="approveOrder">Approve</button>
          <button @click="rejectOrder">Reject</button>
          </li>
    </ul> 
    <p>{{orders}}</p>

    <!-- <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" />
      <button>Send</button> -->
    <!-- </form> -->
  </div>
</template>

<script>

import SocketService from '../services/SocketService.js';

export default {
  data() {
    return {
      // msg: {from: 'Me', txt: ''},
      // msgs: [],
      orders: [],
      // topic : prompt('Topic?')
    }
  },
  created() {
    // SocketService.emit('chat topic', this.topic)
    // SocketService.on('chat addMsg', msg=>{
    //   this.msgs.push(msg)
    // })

    // SocketService.emit('order details', this.orderData)
    SocketService.on('get order details', order=>{
      this.orders.push(order)
    })
  },
  methods: {
    approveOrder() {
      console.log('approve')
      SocketService.emit('approve order', this.order)
    },
    rejectOrder() {
      console.log('reject')
      SocketService.emit('reject order', this.order)
    }
    // sendMsg() {
    //   console.log('Sending', this.msg);
    //   SocketService.emit('chat newMsg', this.msg)
    // },
    // changeTopic() {
    //   SocketService.emit('chat topic', this.topic)
    // }
  }
}
</script>
