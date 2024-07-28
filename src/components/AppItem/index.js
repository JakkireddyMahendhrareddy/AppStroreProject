import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-details">
      <img src={imageUrl} alt="img" className="img" />
      <h1>{appName}</h1>
    </li>
  )
}
export default AppItem
