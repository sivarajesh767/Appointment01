// Write your code here
import {format} from 'date-fns'
import {v4} from 'uuid'
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentList: [],
    isFilterActive: false,
  }
  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const formatDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    const newComment = {
      id: v4(),
      title: titleInput,
      date: formatDate,
      isStarred: false,
    }
    this.setState(preState => ({
      appointmentList: [...preState.appointmentList, newComment],
      titleInput: '',
      dateInput: '',
    }))
  }
  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }
  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }
  toggleAppointment = id => {
    this.setState(preState => ({
      appointmentList: preState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }
  newAppointmentList = () => {
    const {appointmentList, isFilterActive} = this.state
    if (isFilterActive) {
      return appointmentList.filter(eachFilter => {
        eachFilter.isStarred === true
      })
    }
  }
  isActive = () => {
    const {isFilterActive} = this.state
    this.setState({isFilterActive: !isFilterActive})
  }
  render() {
    const {titleInput, dateInput, isFilterActive} = this.state
    const filterAppointment = this.newAppointmentList()
    return (
      <div className="bg-container">
        <div className="container">
          <form onSubmit={this.onAddAppointment}>
            <h1 className="heading-1">Add Appointment</h1>
            <div className="con-1">
              <label className="title">Title</label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitle}
                className="changeTitle"
              />
              <label className="date">Date</label>
              <input
                type="date"
                id="date"
                value={dateInput}
                datenChange={this.onChangeDate}
                className="changeDate"
              />
              <div className="img-co">
                <button type="submit" className="button-1">
                  Add
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                  alt="appointments"
                  className="img"
                />
              </div>
            </div>
          </form>
          <hr className="line" />
          <h1 className="headg-1">Appointments</h1>
          <button type="button" onClick={this.isActive}>
            Starred
          </button>
          <ul className="un-order">
            {filterAppointment.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                toggleAppointment={this.toggleAppointment}
                buttonAppointment={this.buttonAppointment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments

