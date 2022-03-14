import { FunctionalComponent } from 'preact'
import { IoCall, IoMail } from 'react-icons/io5'

const ContactInfo: FunctionalComponent = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-center space-y-3 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-row items-center space-x-2">
                <i className="text-xl text-orange lg:text-4xl">
                    <IoCall />
                </i>
                <span>+62 851-5995-4161</span>
            </div>

            <div className="self-center hidden lg:block">
                <div className="border border-gray-200 h-12" />
            </div>

            <div className="flex flex-row items-center space-x-2">
                <i className="text-xl text-orange lg:text-4xl">
                    <IoMail />
                </i>
                <span>customer@sabilamall.co.id</span>
            </div>
        </div>
    )
}

export default ContactInfo
