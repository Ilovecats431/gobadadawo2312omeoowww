import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './nav.css'
import './styles.css'
import { Account, Language } from '../header';

let Switch = createContext(null);

export default function NavigationBar() {
    let [switcher, setSwitcher] = useState(true)


    useEffect(() => {
        let root = document.querySelector('body')

        root.style.overflow = `${switcher ? 'hidden' : ''}`;
    }, [switcher, setSwitcher])

    return (
        <> 
            <Switch.Provider value={[switcher, setSwitcher]}>
                <div id='ratatatata' className='blocker'>
                    <div id="nav-bar">
                        <div className='kk-2 flex content-between'>
                            <div className='flex align-center g-1'>
                            <X targetId={'ratatatata'}/>
                            <SignOutBtn/>
                            </div>
                            <UAE username={'Stroking cat'}/>
                        </div>
                        <NavCats/>
                    </div>
                </div>
            </Switch.Provider>
        </>
    )
}


const GrayLine = () => {

    return (
        <>
        <div className='w-100 flex content-center'>
            <div className='gr-line'>
            </div>
        </div>
        </>
    )
}

const NavCats = () => {

    return (
        <>
            <div id='nav-contents'>
                <NavCat title={`Deals & Events`} objArr={[{name: 'Valentine Deals', src: './valentines-shopping'}, {name: 'Best Sellings', src: './NA'}, {name: 'Newests Deals', src: './NA'}]} />
                <NavCat title={`Neccessities`} objArr={[{name: 'Household Items', src: './nah-shopping'}, {name: 'Phones/PC', src: './NA'}, {name: 'Drinks', src: './NA'}, {name: 'Takeout Foods', src: './NA'}, {name: 'DIY Tools', src: './NA'}, {name: 'Pesk Spray', src: './NA'},  {name: 'Home Cleaning', src: './NA'}, {name: 'Clothes', src: './NA'}, {name: 'Workout Tools', src: './NA'}]} />
                <SettingsCat title={'Accounts & Settings'}/>
            </div>
        </>
    )
}


const SettingsCat = ({title}) => {

    return (
        <>
            <div className='ft-da'>
                <h1 className='title'>{title}</h1>
                <div className='flex align-center g-1 black'>
                <Language/>
                <span>|</span>
                Language
                </div>
                <a href="account">Account</a>
                <a href="Customer Support">Customer Support</a>
            </div>
        </>
    )
}


// Navigation Categories
const NavCat = ({title, objArr}) => {
    // objArr = [{name, src}, {name, src}]

    return (
        <>
            <div className='ft-da'>
                <h1 className='title'>{title}</h1>
                {objArr.map((e, index) => (
                    <a key={index} href={e.src}>{e.name}</a>
                ))}
            </div>
        <GrayLine/>
        </>
    )
}


// User Account Extra
export function UAE({username}) {

    return (
        <div className='rawr  flex align-center'>
            <h2 className='dada-pa'>{username}</h2>
            <UserProfile/>
        </div>
    )
}

export function UserProfile() {
    // WORKING IN PROGRESS...


    return (
             <>
                <img  className='p-w circle img-fit' src="https://i.pinimg.com/736x/d0/7b/a6/d07ba6dcf05fa86c0a61855bc722cb7a.jpg" alt="" />
            </>
    )
}

export function SignOutBtn() {
    
    return (
     <>
        <button className='so-btn'>
            Sign Out
        </button>
     </>   
    )
}


export function X({ targetId }) {
    const xButtonRef = useRef(null);
    let [switcher, setSwitcher] = useContext(Switch);

    const switchIt = () => {
        setSwitcher(false)
    }

    useEffect(() => {
        const xButton = xButtonRef.current;
        if (xButton) {
            const handleClick = (e) => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.style.display = 'none';
                }
            };
            xButton.addEventListener('click', handleClick);
            
            return () => {
                xButton.removeEventListener('click', handleClick);
            };
        }
    }, [targetId]);

    return (
        <button onClick={switchIt} ref={xButtonRef} id='x-btn' className='gray'>
            &times;
        </button>
    );
}
