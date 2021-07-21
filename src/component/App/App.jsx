import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import Container from '../Container/Container';
import ImageGallery from '../ImageGallery/ImageGallery';
import pixabayAPI from '../service/pixabay-api';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [imageName, setImageName] = useState('')
  const [images, setImages] = useState([])
  const [status, setStatus] = useState(Status.IDLE)
  const [error, setError] = useState(null)
  const [alt, setAlt] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState('')
  
 

  const handleSearchForm = imageName => {
    setImageName(imageName);
    setImages([]);
    setCurrentPage(1)
  };

   useEffect(() => {
    if (!imageName) {
      return;
    }
       
    setStatus(status.PENDING)
    
    pixabayAPI
      .fetchImage(imageName, currentPage)
      .then(images => {
        if (images.total === 0) {
          toast.dark('No images. Please try another query!');
          setStatus(Status.REJECTED);

          return;
        }

    
        setImages(prevState => [...prevState, ...images.hits])
        setStatus(Status.RESOLVED)
      })
      .catch(error => {setError(error);
       setStatus(Status.REJECTED)})
      .finally(() => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 500);
      });
  
  },[imageName, status.PENDING, currentPage, error])

    
   const toggleModal = () => {
    setShowModal(!showModal);
  };

  const setImgInfo = (e) => {
    const { source } = e.target.dataset;
    const { alt } = e.target;

    setLargeImageURL(source);
    setAlt(alt);

    toggleModal();
  };

  const  onClickLoadMore = () => {
   setCurrentPage(prevState => 
      prevState.currentPage + 1,
    );
  };

    return (
    <Container>
      <Searchbar onSubmit={handleSearchForm} />

      {status === Status.IDLE && (
        <div
          style={{
            margin: '20px auto',
            textAlign: 'center',
            fontSize: '20px',
          }}
        >
          Please, enter a query!
        </div>
      )}
      {images.length > 0 && (
        <>
             <ImageGallery images={images} onSetImgInfo={setImgInfo} />
            <Button onClickLoadMore={onClickLoadMore} />
                {showModal && (
          <Modal onClose={toggleModal} largeImageURL={largeImageURL} alt={alt} />
          )}
        </>
      )}

      {status === Status.PENDING && (
        <div>
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
      {status === Status.REJECTED && null}

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

