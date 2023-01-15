import { types } from "mobx-state-tree"

export const Category = types.model({
    id: types.string,
    name: types.string,
    icon: types.string
})