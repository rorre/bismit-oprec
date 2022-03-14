import { ComponentType, FunctionalComponent } from 'preact'

interface IInput extends Omit<JSX.HTMLAttributes<HTMLInputElement>, 'icon'> {
    icon?: ComponentType
}

const Input: FunctionalComponent<IInput> = (props) => {
    const Icon = props.icon
    delete props.icon

    return (
        <div className="flex pl-2 flex-row space-x-2 text-gray-400 items-center border rounded">
            {Icon && (
                <i>
                    <Icon />
                </i>
            )}
            {/* @ts-ignore By this point props.icon is already gone */}
            <input className="py-2 placeholder:text-gray-400 text-black appearance-none w-full" {...props} />
        </div>
    )
}

export default Input
