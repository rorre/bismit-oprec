import { FunctionalComponent } from 'preact'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

const MascotArea: FunctionalComponent = () => (
    <div className="flex flex-col space-y-4">
        <img src="/mascot.png" className="w-full px-8" />
        <p className="font-bold font-sans text-2xl text-center">Follow SabilaMall yuk!</p>
        <div className="flex flex-row space-x-3 text-orange text-4xl justify-center">
            <IoLogoFacebook />
            <IoLogoTwitter />
            <IoLogoInstagram />
            <IoLogoLinkedin />
        </div>
    </div>
)

export default MascotArea
