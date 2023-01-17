import { types, Instance, cast } from "mobx-state-tree";
import { Categories } from "./Categories"
import { Difficulties } from "./Difficulties"
import { Tasks } from "./Tasks"

const Store = types.model({
    tasks: Tasks,
    categories: Categories,
    difficulties: Difficulties
})

export const initialState = Store.create({
    tasks: {},
    categories: {},
    difficulties: {
        all: [
            // bring this from the server
            { quantityPoints: 8 },
            { quantityPoints: 5 },
            { quantityPoints: 3 },
            { quantityPoints: 2 },
            { quantityPoints: 1 },
        ]
    }
})

export interface IStore extends Instance<typeof Store>{}

export default Store