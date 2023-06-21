import {Fragment, useEffect, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import {Opinions} from "@/utils/constants";
import {CgRadioChecked} from "react-icons/cg";

interface RadioLabelledBtnProps {
    label: string
    value: string
    setValue: (_value: Opinions) => void
    options: string[]
    className?: string
}

function RadioLabelledBtn({label, options, value, setValue, className}: RadioLabelledBtnProps) {
    let [selected, setSelected] = useState(value)

    useEffect(() => {
        setSelected(value)
    }, [value])

    const onChange = (value: Opinions) => {
        setSelected(value)
        setValue(value)
    }

    return (
        <RadioGroup value={selected} onChange={onChange} className={className}>
            <RadioGroup.Label className={'text-2xl font-medium text-dark'}>
                {label}
            </RadioGroup.Label>
            <div className={'flex flex-col md:flex-row justify-start gap-y-4 gap-x-32 mt-2'}>
                {
                    options.map((option, index) => (
                        <RadioGroup.Option key={index} value={option} as={Fragment}>
                            {({checked, active}) => (
                                <div
                                    className={`cursor-pointer text-2xl font-light flex flex-row justify-start gap-x-2 items-center
                                    ${active ? ' text-primary-600' : ' text-dark'}
                                    ${checked ? ' font-medium text-primary-600' : ' font-normal'}`
                                }>
                                    {checked
                                        ? <CgRadioChecked className="w-6 h-6 text-primary-600"/>
                                        : <CgRadioChecked className="w-6 h-6 text-neutral-500"/>}

                                    <span>{option}</span>
                                </div>
                            )}
                        </RadioGroup.Option>
                    ))
                }
            </div>
        </RadioGroup>
    )
}

export default RadioLabelledBtn
