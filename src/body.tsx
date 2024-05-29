import './body.css';
import './header.css';

export default function Body() {
  return (
    <section id="main-body">
      <AdSection />
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

}

// Horizontal Recommend Items
export function HRI() {

  return (
    <>
    <div className='HRI'>
      
    </div>
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
