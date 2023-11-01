function ImageSlider({images, direction}) {
  return (
    <div className="slider-container overflow-hidden whitespace-nowrap relative">
      {[1,2].map(() =>
        <div className={`slider slider-to-${direction} inline-block w-max`}>
          {images.map(image =>
            <img className="max-w-[80vw] md:max-w-[40vw] xl:max-w-2xl aspect-auto rounded-lg m-1 xl:m-3 lg:hover:brightness-50 trasition duration-500" src={image} alt=''/>
          )}
        </div>
      )}
    </div>
  )
}

export default ImageSlider
