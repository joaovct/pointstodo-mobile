import { types } from "mobx-state-tree"
import { Difficulty } from "./Difficulty"

export const Difficulties = types.model({
    all: types.array(Difficulty)
})