import { useContext, useState, createContext } from 'react';
import './body.css';
import './header.css';

export default function Body() {
  return (
    <section id="main-body">
      <AdSection />
      <CategorySection/>
      <RecommendationSection/>
    </section>
  );
}



export function AdSection() {
  return (
    <div className="ad-section">
      <BigAd bgImage="./src/assets/teddy-bear.png" />
      <div className="s-sec-ad f-grow">
        <HorizontalAd bgImage='src/assets/iphone-ad.png'/>
        <HorizontalAd bgImage='src/assets/yakult-ad.png'/>
      </div>
    </div>
  );
}
// <-- COMPONENT


export function BigAd({ bgImage }) {
  return (
    <div
      className="b-ad-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ShopButton scale="2" color="pink" />
    </div>
  );
}

export function HorizontalAd({ bgImage }) {
  return (
    <div className="h-ad-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
      <MoreButton />
    </div>
  );
}

//<-- Ad Section!!!
//<-- Ad Section!!!
//<-- Ad Section!!!


const CategorySection = ()  => {

  return (
    <>
    <div className='categories-section'>
      <div className='tdd-section'>
      <HRI imgList={['src/assets/pc-pack.png', 'src/assets/pk-2.png', 'src/assets/pk-3.png', 'src/assets/snm-pack.png' , 'src/assets/pc-pack.png', 'src/assets/snm-pack.png']}/>
      </div>
      <BundleSection/>
    </div>
    </>
  )
}

// Horizontal Recommend Items
export function HRI({imgList}) {

  return (
    <>
    <div className='hri'>
      {imgList.map((e, index) => (
        <img className='td-deals' key={index} src={e} alt="product" />
      ))}
    </div>
    </>
  )
}


const BundleSection = () => {

  return  (  
  <>
  <div className='p-bndle-s'>
    <div className='c-bndle-s'>
      <Bundles bundleName='Protein Drinks' objProduct={[{src: './NoSource', img: 'https://m.media-amazon.com/images/I/719eDVmYeYL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81U1j+Ni3BL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81gd0FxLYYL._AC_UL480_FMwebp_QL65_.jpg'} ]} />
      <Bundles bundleName='Protein Drinks' objProduct={[{src: './NoSource', img: 'https://m.media-amazon.com/images/I/719eDVmYeYL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81U1j+Ni3BL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81gd0FxLYYL._AC_UL480_FMwebp_QL65_.jpg'} ]} />
      <Bundles bundleName='Protein Drinks' objProduct={[{src: './NoSource', img: 'https://m.media-amazon.com/images/I/719eDVmYeYL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81U1j+Ni3BL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81gd0FxLYYL._AC_UL480_FMwebp_QL65_.jpg'} ]} />
      <Bundles bundleName='Protein Drinks' objProduct={[{src: './NoSource', img: 'https://m.media-amazon.com/images/I/719eDVmYeYL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81U1j+Ni3BL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81gd0FxLYYL._AC_UL480_FMwebp_QL65_.jpg'} ]} />
    </div>
    <div className='c-bndle-s'>
      <Bundles bundleName='Protein Drinks' objProduct={[{src: './NoSource', img: 'https://m.media-amazon.com/images/I/719eDVmYeYL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81U1j+Ni3BL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81gd0FxLYYL._AC_UL480_FMwebp_QL65_.jpg'} ]} />
      <Bundles bundleName='Protein Drinks' objProduct={[{src: './NoSource', img: 'https://m.media-amazon.com/images/I/719eDVmYeYL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81U1j+Ni3BL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81gd0FxLYYL._AC_UL480_FMwebp_QL65_.jpg'} ]} />
      <Bundles bundleName='Protein Drinks' objProduct={[{src: './NoSource', img: 'https://m.media-amazon.com/images/I/719eDVmYeYL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81U1j+Ni3BL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81gd0FxLYYL._AC_UL480_FMwebp_QL65_.jpg'} ]} />
      <Bundles bundleName='Protein Drinks' objProduct={[{src: './NoSource', img: 'https://m.media-amazon.com/images/I/719eDVmYeYL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81U1j+Ni3BL._AC_UL480_FMwebp_QL65_.jpg'}, {src: './NoSoure', img: 'https://m.media-amazon.com/images/I/81gd0FxLYYL._AC_UL480_FMwebp_QL65_.jpg'} ]} />
    </div>
  </div>
  </>)
}

export function Bundles({bundleName, objProduct}) {
  // objProduct = [{key: value}, {key: value}]

  return (
    <>
      <div className='bundle-wrapper'>
        <h1 className='bndle-name black'>{bundleName}</h1>
        <div className='b-organizer'>
        {objProduct.map((obj, index) => (
          <Bundle key={index} src={obj.src} img={obj.img} distance={index}/>
        ))}
      </div>
        </div>
        
    </>
  )
}

const Bundle = ({src, img, distance}) => {

  return (
    <>
      <a style={{right: `${distance * 5}rem`}} className='bndle-a' href={src}>
        <img className='bndle-img' src={img} alt="bundle-product" />
      </a>
    </>
  )
}


// Item Related

let itemInformation = createContext(null)

const RecommendationSection = () => {

  return (
    <>
    <div className='r-tata'>
    <h1 className='b-font recmen'>Recommended:</h1>
      <div className='rmn-section flex align-center'>
        <ItemShowcase img='https://i.pinimg.com/736x/8c/fa/3b/8cfa3be2a7df8f876281384542c8b676.jpg' name='Gang Leader' rating={1} totalRaters={3} cost={{dollars: 9, cents: 99}} />
        <ItemShowcase img='https://i.pinimg.com/736x/8c/fa/3b/8cfa3be2a7df8f876281384542c8b676.jpg' name='Gang Leader' rating={1} totalRaters={3} cost={{dollars: 9, cents: 99}} />
        <ItemShowcase img='https://i.pinimg.com/736x/8c/fa/3b/8cfa3be2a7df8f876281384542c8b676.jpg' name='Gang Leader' rating={1} totalRaters={3} cost={{dollars: 9, cents: 99}} />
        <ItemShowcase img='https://i.pinimg.com/564x/6c/35/1c/6c351ce354dd9f61dfe99864a3369d83.jpg' name='Texas' rating={4} totalRaters={879} cost={{dollars: 19, cents: 99}} />
        <ItemShowcase img='https://i.pinimg.com/736x/8c/fa/3b/8cfa3be2a7df8f876281384542c8b676.jpg' name='Gang Leader' rating={1} totalRaters={3} cost={{dollars: 9, cents: 99}} />
      </div>
      </div>
    </>
  )
}


export function ItemShowcase({img, name, rating, totalRaters, cost}) {
  // cost = {dollars: 9, cents: 99}
  const iInfo = {name, rating, totalRaters, cost}

  return (
    <div className='i-sc'>
        <itemInformation.Provider value={iInfo}>
          <img className='i-img' src={img} alt="product" />
          <ItemInformation/>
        </itemInformation.Provider>
    </div>
  )
}

export function ItemInformation() {
  let iInfo = useContext(itemInformation)


  return (
    <div className='more-i'>
      <h1 className='id-i'>{iInfo.name}</h1>
      <UserRating stars={iInfo.rating} users={iInfo.totalRaters}/>
      <PriceTag dollars={iInfo.cost.dollars} cents={iInfo.cost.cents}/>
      <CartButton/>
    </div>  
  )
}


export function PriceTag({dollars, cents}) {

  return (
    <>
      <h1 className='b-font'>${dollars}.<span className='sml-f'>{cents}</span></h1>
    </>
  )
}


export function UserRating({stars, users}) {
  return (
    <>
      <div className='i-rs flex align-center'>
      <StarRating stars={stars}/>
      <UserCount total={users} />
      </div>
  </>
  )
}


export function StarRating({stars}) {
  // starts = integer | 1 - 5
  const five = [1,2,3,4,5];

  

  return (
    // rating wrapper
    <div className='rw'>
      {five.map((e, index) => (
        <Star key={index} boolean={(index < stars) ? true : false } />
      ))}
    </div>
  )
}

export function Star({ boolean }) {
  const starColor = boolean ? 'src/assets/star-set/y-star.png' : 'src/assets/star-set/g-star.png';
  const alt = boolean ? 'yellow colored star defining positivity' : 'gray colored star defining zero positivity';

  return (
    <img className='icon' src={starColor} alt={alt} />
  );
}


export function UserCount({total}) {

  return (
    <div className='flex align-center'>
      <h3 style={{color: '#2f6dff'}}>{total}</h3>      
      <img className='icon' src="src/assets/user.png" alt="user icon: indicates a real peron" />
    </div>
  )
}

// <-- Body Section








// Button Section
export function ShopButton({ color, scale }) {
  return (
    <button
      className="s-btn"
      style={{ backgroundColor: `${color}`, scale: scale }}
    >
      Shop Now
    </button>
  );
}

export function MoreButton() {
  return <button className="m-btn">More</button>;
}

export function CartButton() {
  return <button className="atc-btn">Add to cart</button>;
}
;

// Button Section
