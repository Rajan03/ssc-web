import {Listbox, Transition} from "@headlessui/react";
import React, {Fragment, useState} from "react";
import {BiChevronDown} from "react-icons/bi";

interface ISelect {
    selected: string;
    setSelected: (_value: string) => void;
    options: string[];
    label: string;
    error?: string;
    className?: string;
}

const Select: React.FC<ISelect> = ({selected,label, className , setSelected, options, error}) => {
    const [selectedVal, setSelectedVal] = useState<string>(selected)

    const onChange = (value: string) => {
        setSelectedVal(value)
        setSelected(value)
    }

    return (
        <Listbox value={selectedVal} as={Fragment} onChange={onChange}>
            <div className={"relative flex flex-col " + className}>
                <label className={`text-2xl font-light mb-2 ${error ? 'text-red-500' : 'text-dark'}`}>
                    {label}
                </label>
                <Listbox.Button className={`relative text-start h-full border focus:border-transparent 
                ${error ? 'border-red-500 web-input-error' : 'border-primary-50 web-input'}`}>
                    <span className="block truncate">{selectedVal}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <BiChevronDown className="h-5 w-5"/>
                    </span>
                    {error && <p className='text-sm font-normal text-red-600'>{error}</p>}
                </Listbox.Button>

                <Transition as={Fragment} leaveFrom="opacity-100" leaveTo="opacity-0"
                            leave="transition ease-in duration-100">
                    <Listbox.Options className={`absolute top-full mt-1 max-h-60 w-full overflow-auto rounded bg-white 
                    py-2 shadow-lg z-40 ring-1 ring-black ring-opacity-5 focus:outline-none scrollbar-hide`}>
                        {options.map((opt, i) => (
                            <Listbox.Option
                                key={opt + i} value={opt}
                                className={({active}) => `text-xl relative cursor-default select-none p-4 ${
                                    active ? 'bg-primary-50/40 text-primary-900' : 'text-gray-900'
                                }`}>
                                {({selected}) => (
                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                        {opt}
                                    </span>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default Select;
