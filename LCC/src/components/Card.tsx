type CardProps = {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
};

export default function Card({
  title,
  description,
  image,
  buttonText = "Explore More",
  onClick,
  className = "",
  id = "",
}: CardProps) {
  return (
    <div className={`card ${className}`} id={id}>

      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">

        <h3 className="card-title">{title}</h3>

        <p className="card-description">
          {description}
        </p>

        <button className="card-button" onClick={onClick}>
          {buttonText}
        </button>

      </div>

    </div>
  );
}