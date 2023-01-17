import { types } from "mobx-state-tree"
import { Difficulty } from "../../Difficulties/Difficulty"
import { Subtasks } from "./Subtasks"

export const Task = types.model({
    id: types.string,
    done: types.boolean,
    title: types.string,
    description: types.string,
    subtasks: Subtasks,
    difficulty: types.reference(Difficulty)
    //difficulty
    //category
})