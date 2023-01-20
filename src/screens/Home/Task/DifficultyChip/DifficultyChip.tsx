import { Chip } from "@features/UI"
import { Props as ChipPros } from '@features/UI/Chip'
import { IDifficulty } from "@models/Store/Difficulties/Difficulty"
import { colors } from "@styles/colors"

type Props = {
    difficulty: IDifficulty
}

export const DifficultyChip = ({ difficulty }: Props) => {

    return (
        <Chip {...getChipProps(difficulty.quantityPoints)}/>
    )
}

function getChipProps(quantity: number): Pick<ChipPros, "color" | "label" | "labelColor"> {
    const label = quantity > 1 ? `${quantity} points` : `${quantity} point`

    switch (quantity) {
        case 1:
            return {
                label,
                color: "#32D74B33",
                labelColor: colors.defaultSystemGreenLight,
            }

        case 2:
            return {
                label,
                color: "#0A84FF33",
                labelColor: colors.defaultSystemBlueLight,
            }

        case 3:
            return {
                label,
                color: "#FFD60A33",
                labelColor: colors.defaultSystemYellowLight,
            }

        case 5:
            return {
                label,
                color: "#FF9F0A33",
                labelColor: colors.defaultSystemOrangeLight,
            }

        case 8:
            return {
                label,
                color: "#FF453A33",
                labelColor: colors.defaultSystemRedDark,
            }

        default:
            return { 
                label,
                color: "#fff",
                labelColor: "#000"
            }
    }
}