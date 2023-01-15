import { Instance, types } from "mobx-state-tree"

export const Subtask = types.model({
    id: types.string,
    title: types.string,
    done: types.boolean
})

export interface ISubtask extends Instance<typeof Subtask>{}