import './header.css'
import './footer.css'


export default function FooterSection() {


    return (
        <>
            <div id='f-sect'>
            <FC categoryTitle={'Help'} objArr={[{name: 'Account', src: './NA'}, {name: 'Refund', src: './NA'}, {name: 'Report a problem', src: './NA'}, {name: 'Bug Bounty', src: './NA'}]} />  
            <FC categoryTitle={'Payment'} objArr={[{name: 'SwiftCard Payment', src: './NA'}, {name: 'Amazon Store Card', src: './NA'}, {name: 'SwiftCard Secured Card', src: './NA'}, {name: 'Visa', src: './NA'}]} />  
            <FC categoryTitle={'Work with us'} objArr={[{name: 'Help with exporting product', src: './NA'}, {name: 'Sell on SwiftCart', src: './NA'}, {name: 'Become Affiliate', src: './NA'}, {name: 'Advertise Product', src: './NA'}]} />  
                <FC categoryTitle={'Others'} objArr={[{name: 'Career', src: './NA'}, {name: 'Press Center', src: './NA'}, {name: 'SwiftCart License', src: './NA'}, {name: 'Accessibility', src: './NA'},  {name: 'Support Cats', src: './NA'}]} />  
            </div>
        </>
    )
}

export function FC({categoryTitle ,objArr}) {
    // objArr = [{name, src}, {name, src}]
    

    return (
        <>
            <div className='f-cag'>
                {/* title */}
                <h1 className='bg-font'>{categoryTitle}</h1>
                {/* line */}
                <div className='g-line'></div>
                {/* content */}
                <div className='fchl-w'>
                    {objArr.map((e, index) => (
                        <a key={index} className='fc-hl' href={e.src}>{e.name}</a>
                    ))}
                </div>
            </div>
        </>
    )
}

