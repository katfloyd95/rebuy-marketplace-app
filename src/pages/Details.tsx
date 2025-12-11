import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { offersData } from "../data/offers";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const offerId = Number(id);
  const offer = offersData.find((offer) => offer.id === offerId);

  if (!offer) {
    return (
      <div>
        <p>Offer Not Found</p>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="img-wrapper">
        <img src={offer.imageSrc} width="100%" />
      </div>
      <div className="product-info-container">
        <div className="product-name-details-wrapper">
          <h2>{offer?.title}</h2>
          <p>{offer?.description}</p>
        </div>
        <div className="purchase-container">
          <p>{offer?.price}€</p>
          <a href={offer?.purchaseUrl}>
            <button className="button">Buy on rebuy</button>
          </a>
          <div>
            <Link to="/">
              <button className="button">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}