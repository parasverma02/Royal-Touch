import React from 'react';
import classes from './BookAppointment.module.css';
import BookingForm from './BookingForm/BookingForm';
const BookAppointment = () => {

    const setFormElementConfig = (elementType, type, placeholder, value, validation, label) => {
        return {
            elementType: elementType,
            elementConfig: {
                type: type,
                placeholder: placeholder
            },
            value: value,
            validation: validation,
            label: label
        }
    }

    const nameValidation = name => {
        if (name === '') {
            return 'Name Error!';
        }
        return null;
    };
    const phoneNumberValidation = number => {
        if (number === '') {
            return 'Number Error!';
        }
        return null;
    };
    const emailValidation = email => {
        if (email === '') {
            return 'Email Error!';
        }
        return null;
    };

    //Dynamic Form
    const formInitialValue = {
        firtstName: setFormElementConfig('input', 'text', 'First Name', '', nameValidation, 'First Name'),
        lastName: setFormElementConfig('input', 'text', 'Last Name', '', nameValidation, 'Last Name'),
        phone: setFormElementConfig('input', 'number', 'Phone Number', '', phoneNumberValidation, 'Phone Number'),
        email: setFormElementConfig('input', 'text', 'Email', '', emailValidation, 'Email'),
        services: setFormElementConfig('input', 'text', 'Services', '', nameValidation, 'Services'),
        date: setFormElementConfig('input', 'text', 'Date', '', nameValidation, 'Date'),
        time: setFormElementConfig('input', 'text', 'Time', '', nameValidation, 'Time')
    }

    //Hooks
    const [bookForm, setBookForm] = React.useState(formInitialValue);
    const [errors, setErrors] = React.useState({});
    const [touched, setTouched] = React.useState({});



    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log('['+ name+'] changed')
        const updatedBookForm = { ...bookForm };
        const updatedFormElement = { ...updatedBookForm[name] };
        updatedFormElement.value = value;
        updatedBookForm[name] = updatedFormElement;

        setTouched({
            ...touched,
            [name]: true,
        })
        setBookForm(updatedBookForm)
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //??
        const bookingData = {};
        // [key:value] pair
        for (let key in bookForm) {
            bookingData[key] = bookForm[key].value;
        }

        const formValidation = Object.keys(bookingData).reduce(
            (acc, key) => {
                const newError = bookForm[key].validation(bookingData[key]);
                const newTouched = { [key]: true }
                return {
                    errors: {
                        ...acc.errors,
                        ...(newError && { [key]: newError })
                    },
                    touched: {
                        ...acc.touched,
                        ...newTouched
                    }
                };
            },
            {
                errors: { ...errors },
                touched: { ...touched }
            }
        );
        setErrors(formValidation.errors);
        setTouched(formValidation.touched);

        if (!Object.values(formValidation.errors).length &&
            Object.values(formValidation.touched).length === Object.values(bookingData).length &&
            Object.values(formValidation.touched).every(elTouch => elTouch === true)
        ) {
            //Todo
            console.log('Valid!');
        }
        else {
           // Todo
           console.log('Invalid!')
        }

    }

    const handleBlur = (event) => {
        const { name, value } = event.target;
        const error = bookForm[name].validation(value);
        console.log('['+ name+'] Blur ' + error)
        setErrors({
            ...errors,
            ...(error && { [name]: touched[name] && error }) // show error only if input element is touched
        })
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
                        errors={errors}
                        touched={touched}
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