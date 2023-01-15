import { types, Instance } from "mobx-state-tree";
import { Categories } from "./Categories"
import { Todos } from "./Todos"

const Store = types.model({
    todos: Todos,
    categories: Categories
})

export const initialState = Store.create({
    todos: {},
    categories: {}
})

export interface IStore extends Instance<typeof Store>{}

export default Store