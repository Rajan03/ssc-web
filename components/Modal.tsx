import React, {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'

interface Props {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    className?: string;
}

export default function Modal(props: Props) {
    const {isOpen, onClose, className, children} = props;

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className={"relative z-10 "} onClose={onClose}>
                    {/* MODAL OVERLAY */}
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
                                      leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25 z-40"/>
                    </Transition.Child>

                    {/* MODAL BODY */}
                    <div className="fixed inset-0 overflow-y-auto z-50">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className={`w-max max-w-max transform overflow-hidden rounded-2xl bg-white
                                    text-left align-middle shadow-xl transition-all ${className}`}>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
