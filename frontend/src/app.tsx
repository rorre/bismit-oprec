import Breadcrumb from './components/elements/Breadcrumb'
import ContactInfo from './components/modules/ContactInfo'
import DesktopLayout from './components/modules/DesktopLayout'
import MobileLayout from './components/modules/MobileLayout'

export function App() {
    return (
        <div className="p-8 lg:px-32">
            <Breadcrumb paths={['Home', 'Kontak Kami']} />
            <h1 className="text-4xl lg:text-[48px] font-bold font-sans my-8">Kontak Kami</h1>
            <div className="hidden lg:block">
                <DesktopLayout />
            </div>

            <div className="block lg:hidden">
                <MobileLayout />
            </div>
        </div>
    )
}
