import './body.css';
import './header.css';

export default function Body() {
  return (
    <section id="main-body">
      <AdSection />
      <CategorySection/>
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
    </div>
    <div className='c-bndle-s'>
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
          <Bundle src={obj.src} img={obj.img} distance={index}/>
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
