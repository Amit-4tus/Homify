import orderService from '../services/OrderService'

export default {
    strict: true,
    state: {
        orderToShow: []
    },
    getters: {
        orderToSHow(state) {
            return state.orderToShow;
        }

    },
    mutations: {
        setOrderToSHow(state, ordersToShow) {
            state.orderToShow = ordersToShow.orders;
        },
        addOrder(state, { newOrder }) {
            state.orderToShow.unshift(newOrder);
        }



    },
    actions: {

        async loadOrders(context, id) {
            const orders = await orderService.getOrderById(id)
            context.commit({ type: 'setOrderToSHow', orders })
            return orders
        },
        async addOrder(context, order) {
            const newOrder = await orderService.addOrder(order)
            console.log(newOrder)
            context.commit({ type: 'addOrder', newOrder })
           return newOrder
        }

    }
}