import './SushiCard.scss'
import '../../node_modules/bootstrap/scss/bootstrap.scss'

export const SushiCard = ({ sushi }) => {
  const { name, composition, weight, price, imageId } = sushi;

  return (
    <a
      href='###' 
      className='sushiCard card bg-success-subtle col-md-3 mx-2 text-decoration-none d-block'
    >
      <img src={imageId} alt={name} className='img-fluid rounded mx-auto d-block mt-2 card-image-top card-img'/>
      <div className="card-body pb-0">
        <p className='text-secondary-emphasis fs-2 fst-italic'>{name}</p>
        <p className='text-secondary-emphasis fs-5'>{`Склад: ${composition}`}</p>
        <p className='text-secondary-emphasis fs-5'>{`Вага: ${weight}г`}</p>
        <p className='text-secondary-emphasis fs-5 mb-2'>{`Ціна: ${price}`}</p>
      </div>
    </a>
  );
};