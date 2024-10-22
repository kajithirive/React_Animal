import 'bulma/css/bulma.css'
function Card ({image, imageName, content}: any) {
    return (
        <div>
        <div className="card">
        <div className="card-image">
        <figure >
        <img src={image}  alt="Placeholder image" />
       </figure>
       </div>
  
      <div className="media-content">
        <p className="title is-3">{imageName}</p>
        <div className="content">
            <p className='title is-5'>{content}</p>
        </div>
      </div>
    </div>
    
  </div>

    );

}
export default Card;