import { Pokemon } from '../models/Pokemon';

interface PokemonProps{
    pokemon:Pokemon;
}



export default function PokemonComponent(props:PokemonProps){
    return(
        <>
            <img width={"100px"} src={props.pokemon?.sprites.other['official-artwork'].front_default} alt={props.pokemon?.name}></img>
            <p>{props.pokemon.name}</p>
            <p>{props.pokemon.id}</p>
            {props.pokemon.abilities.map((ability)=>{
                return(
                    <p key={ability.ability.name}>{ability.ability.name}</p>
                )
            })}
        </>
    )

}