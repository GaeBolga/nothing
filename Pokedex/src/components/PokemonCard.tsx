

function PokemonCard(props : {name: string, imgSrc: string} ){
  return (
    <figure>
      {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
      <figcaption>
        <p>{props.name}</p>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
//{pokemon.imgSrc !== "undefined" ? <img src={pokemon.imgSrc} alt={pokemon.Alt}/> : <p>???</p>}
