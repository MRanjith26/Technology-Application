import './index.css'

const Technology = props => {
  const {TechDetails} = props
  const {title, description, imgUrl, className} = TechDetails
  return (
    <li className={`card ${className}`}>
      <div className="container">
        <h1 className="title">{title}</h1>
        <p className="para">{description}</p>
        <img src={imgUrl} alt={title} className="avatar" />
      </div>
    </li>
  )
}

export default Technology
