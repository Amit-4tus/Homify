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
<<<<<<< HEAD
        async loadHouseById(context, id) {
            const currHouse = await houseService.getItemById(id)
            context.commit({ type: 'setCurrHouse', currHouse })
        },
    }
}
=======
        async updateHouseImgs(context) {

        }
    },
}

// async updateUser(context, {user}) {
//     //             user = await UserService.update(user);
//     //             context.commit({type: 'setUser', user})
//     //         }
>>>>>>> user
