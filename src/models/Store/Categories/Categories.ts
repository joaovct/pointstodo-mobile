import { types } from "mobx-state-tree"
import { Category } from "./Category"

export const Categories = types.model({
    all: types.array(Category)
})