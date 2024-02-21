import React, { Component } from 'react';
import styles from './styles.module.css'
import sprite from '../../icons/sprite.svg'
import { toast } from 'react-toastify'

class Searchbar extends Component {
  state = {
    searchWord: ''
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handaleSubmit = (evt) => {
    evt.preventDefault();

    if (this.state.searchWord === '') {
      toast.error(`Field can't be empty. Please enter somsing...`, {
        theme: 'colored',
      })
      return
    }

    if (this.state.searchWord === ' ') {
      toast.error(`Field can't be an empty string.`, {
        theme: 'colored',
      })
      this.setState({ searchWord: '' })
      return
    }
    this.props.handleChangeWord(this.state.searchWord)
  }
  render() {
    return (
      <header className={styles.searchbar} >
        <form className={styles.form} onSubmit={this.handaleSubmit}>
          <button type="submit" className={styles.button}>
            <svg className={styles.icon} width="24" height="24" aria-label="icon-search">
              <use href={sprite + '#icon-park-search'}></use>
            </svg>
          </button>

          <input
            className={styles.input}
            name='searchWord'
            value={this.state.searchWord}
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;