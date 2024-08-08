// Write your code here
import {format} from 'date-fns'
import {v4} from 'uuid'
import {Component} from 'react'
import './index.css'
import AppointmentItem from '../AppointmentItem'
class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentList: [],
    isFilterActive: false,
  }
  onAddApppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const dateUpdate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    const newComment = {
      id: v4(),
      title: titleInput,
      date: dateUpdate,
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

  getFilterClassName = () => {
    const {appointmentList, isFilterActive} = this.state
    if (isFilterActive) {
      return appointmentList.filter(
        eachTranscation => eachTranscation.isStarred === true,
      )
    }
    return appointmentList
  }
  render() {
    const {titleInput, dateInput, isFilterActive} = this.state
    const filterClassName = isFilterActive ? 'filter-filled' : 'filter-bottom'
    const filterAppointList = this.getFilterClassName()

    return (
      <div className="bg-co">
        <div className="card-co">
          <h1>Add Appointment</h1>
          <form onSubmit={this.onAddApppointment}>
            <label>TITLE</label>
            <input
              type="search"
              value={titleInput}
              onChange={this.onChangeTitle}
            />
            <label>DATE</label>
            <input
              type="date"
              id="date"
              value={dateInput}
              onChange={this.onChangeDate}
            />
            <button type="submit">Add</button>
          </form>
          <img src="" alt="appointment" />
          <hr className="line" />
          <h1>Appointments</h1>
          <button
            type="button"
            className={`filter-style ${filterClassName}`}
            onClick={this.activeBtn}
          >
            Add
          </button>

          <ul>
            {filterAppointList.map(eachComment => (
              <AppointmentItem
                key={eachComment.id}
                onAppointMent={this.onAppointMent}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
