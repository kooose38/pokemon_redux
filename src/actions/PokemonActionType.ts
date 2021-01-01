export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
//fetch data の型
export type PokemonType = {
   abilities: PokemonAbility[],
   sprites: PokemonSprites,
   stats: PokemonStats[],
}

export type PokemonAbility = {
   ability: {
      name: string,
      url: string,
   }
}

export type PokemonSprites = {
   front_default: string,
}

export type PokemonStats = {
   base_stat: number,
   stat: {
      name: string,
   }
}
//actionの種類の型 + fetch data
export interface PokemonLoading {
   type: typeof POKEMON_LOADING
}

export interface PokemonFail {
   type: typeof POKEMON_FAIL
}

export interface PokemonSuccess {
   type: typeof POKEMON_SUCCESS,
   payload: {
      abilities: PokemonAbility[],
      sprites: PokemonSprites,
      stats: PokemonStats[],
   }
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess