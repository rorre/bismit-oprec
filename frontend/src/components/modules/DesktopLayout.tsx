import { FunctionalComponent } from 'preact'
import ContactInfo from './ContactInfo'
import Location from './Location'
import MascotArea from './MascotArea'
import SendMessage from './SendMessage'

const DesktopLayout: FunctionalComponent = () => (
    <div className="flex flex-row space-x-6">
        <div className="basis-1/3">
            <Location />
        </div>
        <div className="basis-[45%]">
            <div className="flex flex-col space-y-4">
                <ContactInfo />
                <hr className="border border-gray-200" />
                <SendMessage />
            </div>
        </div>
        <div className="basis-[13/60]">
            <MascotArea />
        </div>
    </div>
)

export default DesktopLayout
