import instagramLogo from '../instagramIcon.svg'
import facebookLogo from '../facebookIcon.svg'

const Home = () => {
    return (
        <>
            <div className='banner'>

            </div>
            <div className="homeContentGrid">
                <div className="boxA contentBox">
                    <h1>About Me</h1>
                </div>
                <div className="boxB contentBox">
                    <h1>Naked Yoga</h1>
                </div>
                <div className="boxC contentBox">
                    <h1>Contact</h1>
                </div>
                <div className="boxD contentBox">
                    <h1>Classes</h1>
                </div>
                <div className="boxE contentBox">
                    <img className="socialMediaIcon" src={facebookLogo}/>
                </div>
                <div className="boxF contentBox">
                    <img className="socialMediaIcon" src={instagramLogo}/>
                </div>
            </div>
        </>
    )
}

export default Home