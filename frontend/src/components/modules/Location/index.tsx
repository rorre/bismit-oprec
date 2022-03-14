import { FunctionalComponent } from 'preact'
import { IoLocation } from 'react-icons/io5'

const Location: FunctionalComponent = () => (
    <div className="flex flex-col space-y-4">
        <img src="/map.png" className="rounded-lg w-full aspect-square" />
        <div className="flex flex-row space-x-4">
            <i className="text-4xl text-orange">
                <IoLocation />
            </i>
            <div className="flex flex-col space-y-2">
                <p>
                    Satria Building 2nd Lt 2 Unit A204-A206, Jl. Akses UI No.24-26, Tugu, Kec. Cimanggis, Kota Depok,
                    Jawa Barat Depok Jawa Barat, 16451 Indonesia
                </p>
                <div>
                    <button className="text-orange border border-orange rounded p-2 px-4 font-bold">
                        Lihat di Google Maps
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default Location
