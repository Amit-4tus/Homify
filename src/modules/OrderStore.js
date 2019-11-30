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
        }

    },
    mutations: {
        setOrderToShow(state, orderToShow) {
            state.orderToShow = orderToShow;
        },
        addOrder(state, { newOrder }) {
            state.orders.unshift(newOrder);
        }
    },
    actions: {
        async loadOrders(context, id) {
            const orders = await orderService.getOrderById(id)
            context.commit({ type: 'setOrderToShow', orders })
            return orders
        },
        async addOrder(context, order) {
            const newOrder = await orderService.addOrder(order)
            context.commit({ type: 'addOrder', newOrder })
           console.log(newOrder)
           return newOrder
        }

    }
}