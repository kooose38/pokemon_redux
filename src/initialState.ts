import { PokemonType } from "./actions/PokemonActionType"

export interface DefaultStateProps {
   loading: boolean,
   pokemon?: PokemonType
}

export const defaultState: DefaultStateProps = {
   loading: false,
};