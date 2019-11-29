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
            return currHouse
        },
        async addHouse(context, {newHouse}) {
            const house = await houseService.addItem(newHouse)
            // context.commit({ type: 'setCurrHouse', currHouse })
        },
        async updateHouse(context, {house}) {
            const updatedHouse = await houseService.updateItem(house)
            
        },
        
    }
}
