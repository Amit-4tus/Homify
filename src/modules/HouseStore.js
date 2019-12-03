import houseService from '../services/HouseService'

export default {
    strict: true,
    state: {
        itemsToShow: [],
        currHouse: {},
        coords: []
    },
    getters: {
        itemsToShow(state) {
            return state.itemsToShow;
        },
        currHouse(state) {
            return state.currHouse
        },
        coords(state) {
            return state.coords
        }
    },
    mutations: {
        setItemsToShow(state, itemsToShow) {
            state.itemsToShow = itemsToShow.items;
        },
        setCoords(state) {
            state.itemsToShow.forEach(house => {
                state.coords.push(house.location.coords)
            })
        },
        resetCoords(state) {
            state.coords = [];
        },
        //server
        setCurrHouse(state, { currHouse }) {
            state.currHouse = currHouse
        }
    },
    actions: {
        async loadItems(context, filter) {
            const items = await houseService.getItems(filter)
            context.commit({ type: 'setItemsToShow', items })
        },
        loadCoords(context) {
            context.commit({ type: 'setCoords' })
        },
        resetCoords(context) {
            context.commit({ type: 'resetCoords' })
        },
        async loadHouseById(context, id) {
            const currHouse = await houseService.getItemById(id)
            context.commit({ type: 'setCurrHouse', currHouse })
            return currHouse
        },
        async addHouse(context, { newHouse }) {
            const house = await houseService.addItem(newHouse)
            return house;
        },
        async updateHouse(context, { house }) {
            const updatedHouse = await houseService.updateItem(house)
        },
        async deleteHouse(context, { id }) {
            console.log(id)
            const deletedHouse = await houseService.deleteItem(id)
            return deletedHouse
        },
    }
}
