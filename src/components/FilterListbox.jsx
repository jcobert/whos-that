import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon, FilterIcon } from '@heroicons/react/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function FilterListbox(props) {
    const [selected, setSelected] = React.useState("All")

    React.useEffect(() => {
        handleFilter();
    }, [selected]);

    function filterPeopleByAssoc(key) {
        return props.cards.filter(function (p) {
            return p.props.assoc.indexOf(key) >= 0
        })
    }

    function handleFilter() {
        if (selected === "All") {
            props.setSelectionState(props.cards);
        }
        else {
            props.setSelectionState(filterPeopleByAssoc(selected));
            props.setFilteredState(true);
        }
    }

    return (
        <div className="w-9/12 md:w-72 mx-auto md:mr-4">
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700">Filter by Association</Listbox.Label>
                        <div className="mt-1 relative">
                            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#7396c8] focus:border-[#7396c8] sm:text-sm">
                                <span className="flex items-center">
                                    <FilterIcon className="h-5 w-5" aria-hidden="true" />
                                    <span className="ml-3 block truncate">{selected}</span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Transition
                                show={open}
                                as={React.Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {props.associations.map((assoc) => (
                                        <Listbox.Option
                                            key={assoc.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-[#3c76bd]' : 'text-gray-900',
                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={assoc}
                                            onClick={handleFilter}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <span
                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                        >
                                                            {assoc}
                                                        </span>
                                                    </div>
                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-[#3c76bd]',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    )
}

export default FilterListbox;