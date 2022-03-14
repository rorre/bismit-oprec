import { FunctionalComponent } from 'preact'
import Input from '../../elements/Input'
import { BsPeopleFill } from 'react-icons/bs'
import { IoCall, IoMail } from 'react-icons/io5'

const SendMessage: FunctionalComponent = () => (
    <div>
        <h2 className="text-2xl font-sans font-bold mb-6">Tinggalkan Pesan</h2>
        <form className="flex flex-col space-y-4">
            <Input icon={BsPeopleFill} placeholder="Nama Anda" />
            <Input icon={IoMail} placeholder="Alamat email Anda" />
            <Input icon={IoCall} placeholder="Nomor telepon Anda" />
            <textarea
                className="p-2 placeholder:text-gray-400 text-black appearance-none border border-gray-400 rounded"
                placeholder="Tuliskan pesan anda di sini"
                rows={4}
            />
            <div className="self-end w-full lg:w-fit">
                <button className="text-white rounded p-2 px-16 bg-red-500 font-bold w-full lg:w-fit ml-auto">
                    Kirim
                </button>
            </div>
        </form>
    </div>
)

export default SendMessage
