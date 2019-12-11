import houseService from '../services/HouseService'
export default {
    strict: true,

    state: {
        itemsToShow: [],
        currHouse: {},
        coords: [],
        filterBy: {},
        hostHouses: [],
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
        },
        filter(state) {
            return state.filterBy
        },
        hostHouses(state) {
            return state.hostHouses
        }
    },

    mutations: {
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        setItemsToShow(state, itemsToShow) {
            state.itemsToShow = itemsToShow.items;
        },
        setHostHouses(state, itemsToShow) {
            state.hostHouses = itemsToShow;
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
        async loadHostHouses(context, id) {
            const items = await houseService.getItemsByHost(id)
            context.commit({ type: 'setHostHouses', items })
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
            const deletedHouse = await houseService.deleteItem(id)
            return deletedHouse
        },
        async setFilter(context, filterBy) {
            context.commit({ type: 'setFilter', filterBy })
        },
    }
}