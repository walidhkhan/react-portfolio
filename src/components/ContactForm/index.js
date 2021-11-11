import React from 'react';

function ContactForm() {
    const [formState, setFormState] = useState();
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    console.log(formState);

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
            // name input
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
            // email input
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
            // message text area
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;