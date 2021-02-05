import React from 'react';
import classes from './BookAppointment.module.css';
import BookingForm from './BookingForm/BookingForm';
const BookAppointment = () => {

    const setFormElementConfig = (elementType, type, placeholder, value, label) => {
        return {
            elementType: elementType,
            elementConfig: {
                type: type,
                placeholder: placeholder
            },
            value: value,
            label: label
        }
    }
    const formInitialValue = {
        firtstName: setFormElementConfig('input', 'text', 'First Name', '', 'First Name'),
        lastName: setFormElementConfig('input', 'text', 'Last Name', '', 'Last Name'),
        phone: setFormElementConfig('input', 'number', 'Phone Number', '', 'Phone Number'),
        email: setFormElementConfig('input', 'text', 'Email', '', 'Email'),
        services: setFormElementConfig('input', 'text', 'Services', '', 'Services'),
        date: setFormElementConfig('input', 'text', 'Date', '', 'Date'),
        time: setFormElementConfig('input', 'text', 'Time', '', 'Time')
    }
    const [bookForm, setBookForm] = React.useState(formInitialValue);
    const [errors, setErrors] = React.useState();
    const [touched, setTouched] = React.useState();
    
    
    
    const handleChange = (event, id) => {
        const updatedBookForm = { ...bookForm };
        const updatedFormElement = { ...updatedBookForm[id] };
        updatedFormElement.value = event.target.value;
        updatedBookForm[id] = updatedFormElement;
        
        
        setBookForm(updatedBookForm )
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //??
        const bookingData = {};
        for (let key in bookForm) {
            bookingData[key] = bookForm[key].value;
        }
    }
    const handleBlur = (event) => {

    }

    return (
            <div className={classes.BookAppointmentContainer}>
                <div className={classes.BookHeading}>
                    <h1> Book an Appointment!</h1>
                </div>
                <div className={classes.BookFormContainer}>
                    <div className={classes.BookForm}>
                        <BookingForm
                            bookForm={bookForm}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>


            </div>
        )
    
}

export default BookAppointment;