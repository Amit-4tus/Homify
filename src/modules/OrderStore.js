import orderService from '../services/OrderService'

export default {
    strict: true,
    state: {
        orders: [],
        orderToShow: {},
    },
    getters: {
        orderToShow(state) {
            return state.orderToShow;
        },
        orders(state){
            return state.orders
        }

    },
    mutations: {
        setOrderToShow(state, orderToShow) {
            // console.log(orderToShow)
            state.orderToShow = orderToShow.order;
        },
        addOrder(state, { newOrder }) {
            state.orders.unshift(newOrder);
        },
        setOrders(state, {orders}) {
            // console.log(orderToShow)
            state.orders = orders;
        },
    },
    actions: {
        async loadOrder(context, id) {
            const order = await orderService.getOrderById(id)
            context.commit({ type: 'setOrderToShow', order })
            return order
        },
        async loadOrders(context, criteria) {
            console.log(criteria)
            const orders = await orderService.getOrders(criteria.id,criteria.query)
           await context.commit({ type: 'setOrders', orders })
            return orders
        },
        async addOrder(context, order) {
            const newOrder = await orderService.addOrder(order)
            context.commit({ type: 'addOrder', newOrder })
           console.log(newOrder)
           return newOrder
        },
        async updateOrder(context, { order }) {
            console.log(order)
            // const updatedOrder = await orderService.updateOrder(order)

        }

    }
}