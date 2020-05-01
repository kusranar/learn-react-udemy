import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>
                    {label}
                </label>
                <input
                    // onChange={formProps.input.onChange}
                    // value={formProps.input.value}
                    {...input}
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit(formProps) {
        console.log(formProps)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="desc" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary" type="submit">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.desc) {
        errors.desc = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'StreamCreate',
    validate
})(StreamCreate);