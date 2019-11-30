import orderService from '../services/OrderService'

export default {
    strict: true,
    state: {
        orderToShow: []
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
            state.orderToShow.unshift(newOrder);
        }



    },
    actions: {

        async loadOrders(context, id) {
            
            const orders = await orderService.getOrderById(id)
            console.log(orders);
            context.commit({ type: 'setOrderToShow', orders })
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