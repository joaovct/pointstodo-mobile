import { Instance, types } from "mobx-state-tree"
import { Category } from "../../Categories/Category"
import { Difficulty } from "../../Difficulties/Difficulty"
import { Subtasks } from "./Subtasks"

export const Task = types.model({
    id: types.string,
    done: types.boolean,
    title: types.string,
    description: types.string,
    subtasks: Subtasks,
    difficulty: types.reference(Difficulty),
    category: types.reference(Category)
})

export interface ITask extends Instance<typeof Task>