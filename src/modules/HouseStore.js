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
        // setCurrHouse(state, {currHouse}) {
        //     state.currHouse = currHouse[0]
        // }

        //server
        setCurrHouse(state, { currHouse }) {
            state.currHouse = currHouse
        }
    },
    actions: {
        async loadItems(context,filter) {
         console.log(filter)
            const items = await houseService.getItems(filter)
            context.commit({ type: 'setItemsToShow', items })
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
