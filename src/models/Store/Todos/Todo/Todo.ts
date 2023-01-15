import { types } from "mobx-state-tree"
import { Subtasks } from "./Subtasks"

export const Todo = types.model({
    id: types.string,
    done: types.boolean,
    title: types.string,
    description: types.string,
    subtasks: Subtasks
    //difficulty
    //category
})