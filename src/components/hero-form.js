import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styles from './hero.module.css'



export default class SubscribeForm extends React.Component {
     state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
            <div>
                <div className={styles.emailWrapper}>
                    <form onSubmit={this._handleSubmit}>
                         <input
                            className={styles.emailForm}
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Enter your email"
                            name="email"
                          ></input>
                         <input
                            className={styles.submitButton}
                            type="submit"
                            value="Send" />
                    </form>
                    <div className={styles.helperText}>Learn when new handbooks are added</div>
                </div>
            </div>
        );
    }
}



