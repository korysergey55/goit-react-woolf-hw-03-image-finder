import { Component } from 'react';
import axios from 'axios';
import styles from './styles.module.css'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

import Searchbar from 'components/searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/loader/Loader';
import Modal from 'components/modal/Modal';
import Button from 'components/button/Button';


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
      this.handleSearchProducts();
    }
  }

  handleChangeWord = (data) => {
    this.setState({ searchWord: data, images: [], currentPage: 1 })
  }

  taggleModal = (bigImage) => {
    this.setState({ largeImageURL: bigImage });
  };

  handleSearchProducts = async () => {
    const KEY_API = "21698474-fb36d7b3400c91ab3d227d6db";
    const BASE_URL = "https://pixabay.com/api/";

    try {
      this.setState({ loading: true });
      const { data } = await axios.get(`${BASE_URL}?q=${this.state.searchWord}
      &page=${this.state.currentPage}
      &key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (!data.hits.length) {
        toast.error(`No photos available for your request`, {
          theme: 'colored',
        })
      }

      this.setState((prev) => ({
        images: [...prev.images, ...data.hits], isLoadMore: data.hits.length
      }))

    }
    catch (error) {
      toast.error(`${error.message}`, {
        theme: 'colored',
      })
    }
    finally {
      this.setState({ loading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

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
