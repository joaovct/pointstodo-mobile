import { Instance, types } from "mobx-state-tree"

export const Difficulty = types.model({
    quantityPoints: types.number
})

export interface IDifficulty extends Instance<typeof Difficulty>{}