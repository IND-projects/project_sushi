import './SushiCard.scss'
import '../../node_modules/bootstrap/scss/bootstrap.scss'

export const SushiCard = ({ sushi }) => {
  const { Name, Composition, Weight, Price, ImageId } = sushi;

  return (
    <a
      href='###' 
      className='sushiCard card bg-success-subtle col-md-3 mx-2 text-decoration-none d-block'
    >
      <img src={ImageId} alt={Name} className='img-fluid rounded mx-auto d-block mt-2 card-image-top card-img'/>
      <div className="card-body pb-0">
        <p className='text-secondary-emphasis fs-2 fst-italic'>{Name}</p>
        <p className='text-secondary-emphasis fs-5'>{`Склад: ${Composition}`}</p>
        <p className='text-secondary-emphasis fs-5'>{`Вага: ${Weight}г`}</p>
        <p className='text-secondary-emphasis fs-5 mb-2'>{`Ціна: ${Price}`}</p>
      </div>
    </a>
  );
};