import './Header.scss'

export const Header = () => (
  <div className="header text-center">
    <img 
      src="https://d3d7qmccklvqbw.cloudfront.net/wp-content/uploads/2019/10/26113822/sushi-header-image-allyoucaneat.jpg" 
      alt="sushi-header" 
      className="img-fluid mx-auto d-block header_img" 
    />
    <p className='header_title mb-0 text-white'>Sushi from IND</p>
  </div>
);