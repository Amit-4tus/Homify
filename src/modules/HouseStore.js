import houseService from '../services/HouseService'

export default {
    strict: true,
    state: {
        itemsToShow: [],
        currHouse: {}
    },
    getters: {
        itemsToShow(state) {
            return state.itemsToShow;
        },
        currHouse(state) {
            return state.currHouse
        }
    },
    mutations: {
        setItemsToShow(state, itemsToShow) {
            state.itemsToShow = itemsToShow.items;
        },
        setCurrHouse(state, {currHouse}) {
            state.currHouse = currHouse[0]
            console.log(state.currHouse);
        }
    },
    actions: {
        async loadItems(context) {
            const items = await houseService.getItems()
            context.commit({ type: 'setItemsToShow', items })
        },
        async loadHouseById(context, id) {
            const currHouse = await houseService.getItemById(id)
            context.commit({ type: 'setCurrHouse', currHouse })
        },
    }
}