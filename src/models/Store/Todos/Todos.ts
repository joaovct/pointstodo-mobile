import { Instance, types } from "mobx-state-tree"
import { Todo } from "./Todo/Todo"

export const Todos = types.model({
    all: types.array(Todo)
})

export interface ITodos extends Instance<typeof Todos>{}