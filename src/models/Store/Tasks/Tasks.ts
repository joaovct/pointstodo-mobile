import { types } from "mobx-state-tree"
import { Task } from "./Task"

export const Tasks = types.model({
    all: types.array(Task)
})