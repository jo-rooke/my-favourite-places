interface FavPlaceItemProps {
  placeName: string;
  imgSrc: string;
  imgAlt: string;
  location: string;
  mapLink: string;
  description: string;
  proTip: string;
}

function FavPlaceItem(props: FavPlaceItemProps): JSX.Element {
  return (
    <section>
      <h2>
        <strong>{props.placeName}</strong>
      </h2>
      <img src={props.imgSrc} />
      <h3>
        <strong>
          {props.location} (<a href={props.mapLink}>map link</a>)
        </strong>
      </h3>
      <p>{props.description}</p>
      <p>
        <em>
          <strong>Pro tip:</strong> {props.proTip}
        </em>
      </p>
    </section>
  );
}

export default FavPlaceItem;
