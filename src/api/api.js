import axios from 'axios';
import { toast } from 'react-toastify'

const handleSearchProducts = async ({ searchWord, currentPage }) => {
  const KEY_API = "21698474-fb36d7b3400c91ab3d227d6db";
  const BASE_URL = "https://pixabay.com/api/";

  try {
    const { data } = await axios.get(`${BASE_URL}?q=${searchWord}
      &page=${currentPage}
      &key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (!data.hits.length) {
      toast.error(`No photos available for your request`, {
        theme: 'colored',
      })
    }
    return { data }
  }
  catch (error) {
    toast.error(`${error.message}`, {
      theme: 'colored',
    })
  }
  finally {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
}
export default handleSearchProducts