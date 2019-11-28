import itemService from '../services/itemService'

export default {
    strict: true,
    state: {
        itemsToShow: [],
        currHouse: {}
    },
    getters: {
        itemsToShow(state) {
            return state.itemsToShow;
        }
    },
    mutations: {
        setItemsToShow(state, itemsToShow) {
            state.itemsToShow = itemsToShow.items;

        }
    },
    actions: {
        async loadItems(context) {
            const items = await itemService.getItems()
            context.commit({ type: 'setItemsToShow', items })
        },
        async loadHouseBy_id(context, _id) {
            const currHouse = await itemService.getItemById(_id)
            console.log(currHouse);
        },
    }
}