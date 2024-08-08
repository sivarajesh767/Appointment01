// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {onAppointMent, toggleIsStarred} = props
  const {id, title, date, isStarred} = onAppointMent
  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const onClickButton = () => {
    toggleIsStarred(id)
  }
  return (
    <li>
      <div>
        <p>{title}</p>
        <button onClick={onClickButton} type="button">
          start
          <img src={imgUrl} alt="star" />
        </button>
      </div>
      <p className="date"> Date:{date}</p>
    </li>
  )
}
export default AppointmentItem
