import { Component } from 'react';
import styles from './styles.module.css'
import { ToastContainer } from 'react-toastify'

import Searchbar from 'components/searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/loader/Loader';
import Modal from 'components/modal/Modal';
import Button from 'components/button/Button';
import handleSearchProducts from 'api/api';

class App extends Component {
  state = {
    images: [],
    searchWord: "",
    currentPage: 0,
    loading: false,
    largeImageURL: "",
    shawModal: false,
    isLoadMore: 0
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchWord !== this.state.searchWord ||
      prevState.currentPage !== this.state.currentPage
    ) {
      document.body.style.backgroundImage = 'none'

      this.setState({ loading: true });

      handleSearchProducts(this.state, this.setState)
        .then(({ data }) => {
          this.setState((prev) => ({
            images: [...prev.images, ...data.hits],
            isLoadMore: data.hits.length,
            loading: false
          }))
        })
    }
  }

  handleChangeWord = (data) => {
    this.setState({ searchWord: data, images: [], currentPage: 1 })
  }

  taggleModal = (bigImage) => {
    this.setState({ largeImageURL: bigImage });
  };

  showMore = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    return (
      <div className={styles.container} >
        <Searchbar handleChangeWord={this.handleChangeWord} />

        {this.state.images && <ImageGallery images={this.state.images} taggleModal={this.taggleModal} />}

        {this.state.loading && <Loader />}

        {this.state.largeImageURL && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            taggleModal={this.taggleModal}
          />
        )}

        {this.state.isLoadMore > 11 && !this.state.loading && <Button showMore={this.showMore} />}

        <ToastContainer />
      </div>
    );
  }
};
export default App
