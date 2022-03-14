import { FunctionalComponent } from 'preact'
import ContactInfo from './ContactInfo'
import Location from './Location'
import MascotArea from './MascotArea'
import SendMessage from './SendMessage'

const MobileLayout: FunctionalComponent = () => (
    <div className="flex flex-col space-y-6">
        <ContactInfo />
        <Location />
        <MascotArea />
        <SendMessage />
    </div>
)

export default MobileLayout
