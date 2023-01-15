import { types, Instance } from "mobx-state-tree";
import { Categories } from "./Categories"
import { Tasks } from "./Tasks"

const Store = types.model({
    tasks: Tasks,
    categories: Categories
})

export const initialState = Store.create({
    tasks: {},
    categories: {}
})

export interface IStore extends Instance<typeof Store>{}

export default Store