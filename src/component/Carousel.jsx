/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

function Carousel() {
  // Membuat state 'index' dan method setIndex untuk mengatur indeks gambar saat ini
  const [index, setIndex] = useState(0);

  // Daftar URL gambar yang akan ditampilkan dalam carousel
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/1.png?alt=media&token=8f109246-fa6e-4bf9-bd1c-ad4cda799c0b',
    'https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/2.png?alt=media&token=927ffc76-2934-42be-8a80-91a5285ac632',
    'https://firebasestorage.googleapis.com/v0/b/tigarist-df774.appspot.com/o/3.png?alt=media&token=c47c170c-5fc8-43e2-90c9-c675960f7784',
  ];

  // Menggunakan effect untuk membuat carousel secara otomatis berubah setiap 7 detik
  useEffect(() => {
    // Set interval untuk mengubah index setiap 7 detik
    const interval = setInterval(() => {
      // Jika sudah mencapai gambar terakhir, kembali ke gambar pertama
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 7000);
    // Bersihkan interval saat component unmount
    return () => clearInterval(interval);
  }, [images.length, index]);

  // Method untuk mengubah index saat tombol "prev" diklik
  const handlePrevClick = () => {
    // Jika sudah mencapai gambar pertama, pindah ke gambar terakhir
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  // Method untuk mengubah index saat tombol "next" diklik
  const handleNextClick = () => {
    // Jika sudah mencapai gambar terakhir, pindah ke gambar pertama
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="carousel slide carousel-dark" id="carouselExampleAutoplaying" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, i) => (
          <div
            key={i}
            className={`carousel-item animate__animated ${index === i ? 'active' : ''}`}
          >
            <img src={image} className="d-block w-50 mx-auto" alt="tigarist" />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
