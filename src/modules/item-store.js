import itemService from '../services/itemService'

export default {
    strict: true,
    state: {
        itemsToShow: [],
    },
    getters: {   
        itemsToShow(state) {
            return state.itemsToShow;
        }
    },
    mutations: {
        setItemsToShow(state,  itemsToShow ) {
            console.log('mutation:',itemsToShow)
            state.itemsToShow = itemsToShow.items;
        }
    },
    actions: {
        async loadItems(context) {
            const items = await itemService.getItems()
            console.log('items', items);
            context.commit({ type: 'setItemsToShow', items })
        }
    },
}