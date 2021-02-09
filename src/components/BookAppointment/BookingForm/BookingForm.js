import React from 'react';
import Input from '../../UI/forms/input/Input';
const bookingForm = props => {

    const elementsArray = []
        for (let key in props.bookForm) {
            elementsArray.push({
                id: key,
                config: props.bookForm[key]
            });
        }
        let form = (
            <form onSubmit={props.handleSubmit}>
                {elementsArray.map(element => {
                    return <Input
                        key={element.id}
                        name={element.id}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        label={element.config.label}
                        handleBlur={props.handleBlur}
                        handleChange={props.handleChange}
                    />
                })}
                <button>Book!</button>
            </form>
        )
    return (
        form
    );
};

export default bookingForm;