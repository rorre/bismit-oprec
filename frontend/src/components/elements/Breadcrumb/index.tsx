import { FunctionalComponent } from 'preact'
import { IoChevronForward } from 'react-icons/io5'

interface IBreadcrumb {
    paths: string[]
}

const Breadcrumb: FunctionalComponent<IBreadcrumb> = ({ paths }) => {
    return (
        <div className="flex flex-row space-x-4 font-sans items-center">
            {paths.slice(0, -1).map((path) => (
                <>
                    <span>{path}</span>
                    <IoChevronForward />
                </>
            ))}

            <span className="font-bold text-orange">{paths[paths.length - 1]}</span>
        </div>
    )
}

export default Breadcrumb
