import { types } from "mobx-state-tree"
import { Subtask } from "./Subtask/Subtask"

export const Subtasks = types.model({
    all: types.array(Subtask)
})