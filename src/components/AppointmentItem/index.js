import './index.css'

const AppointmentItem = props => {
  const {toggleAppointment, buttonAppointment} = props
  const {id, title, date, isStarred} = toggleAppointment
  const imgurl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const onClickBtn = () => {
    buttonAppointment(id)
  }
  return (
    <li>
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <button testid="star" onClick={onClickBtn}>
          <img src={imgurl} />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem
