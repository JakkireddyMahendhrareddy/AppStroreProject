import './index.css'

const TabItem = props => {
  const {tabDetails, getTabId} = props
  const {tabId, displayText} = tabDetails

  const changeTabId = () => {
    getTabId(tabId)
  }

  return (
    <button type="button" className="btn" onClick={changeTabId}>
      <li className="tab-details">
        <h1>{displayText}</h1>
      </li>
    </button>
  )
}
export default TabItem
