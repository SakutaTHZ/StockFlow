import { useState, ChangeEvent, useRef } from "react"
import * as React from 'react'
import { FaChevronDown } from "react-icons/fa"

interface RangeSliderProps {
    boxName: string
    min: number
    max: number
    selectedMin?: number | null
    selectedMax?: number | null
    customClass?: string
    onMinValueChange?: (value: number) => void,
    onMaxValueChange?: (value: number) => void
}

const RangeSlider_V3: React.FC<RangeSliderProps> = ({
    boxName,
    min,
    max,
    selectedMin,
    selectedMax,
    customClass,
    onMinValueChange,
    onMaxValueChange
}) => {
    const halfPoint = Math.round((min + max) / 2)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const minInput = useRef<HTMLInputElement>(null)
    const maxInput = useRef<HTMLInputElement>(null)

    const displayMin = selectedMin ?? min    
    const displayMax = selectedMax ?? max
    const isEdited = (selectedMin && selectedMin > min) || (selectedMax && selectedMax < max)

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), displayMax - 1)
        if (onMinValueChange)
            onMinValueChange(value)

        setMinValueOnInputBox(value)
    }

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), displayMin + 1)
        if (onMaxValueChange)
            onMaxValueChange(value)

        setMaxValueOnInputBox(value)
    }

    const handleMinSlider = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        if (onMinValueChange)
            onMinValueChange(value)

        setMinValueOnInputBox(value)
    }

    const handleMaxSlider = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        if (onMaxValueChange)
            onMaxValueChange(value)

        setMaxValueOnInputBox(value)
    }

    const setMinValueOnInputBox = (minValue: number) => {
        if (minInput.current) 
            minInput.current.value = minValue.toString()
    }

    const setMaxValueOnInputBox = (maxValue: number) => {
        if (maxInput.current)
            maxInput.current.value = maxValue.toString()
    }

    return (
        <div className={`px-4 py-2 bg-gray-50 ${customClass}`}>
            {/* Slider Label */}
            <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between font-bold cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <p className="flex items-center gap-2">
                        {boxName}
                        {isEdited && (
                            <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                        )}
                    </p>
                    <FaChevronDown
                        size={14}
                        className={`text-gray-400 transition-all duration-500 ${isDropdownOpen ? "rotate-180" : ""
                            }`}  
                    />
                </label>

                {isDropdownOpen && (
                    <div className="mb-2 flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                ref={minInput}
                                type="number"
                                defaultValue={displayMin}
                                onBlur={handleMinChange}
                                className="w-full rounded-md bg-gray-100 py-2 pl-2 pr-4 outline-none"
                            />
                            <span>to</span>
                            <input
                                ref={maxInput}
                                type="number"
                                defaultValue={displayMax }
                                onBlur={handleMaxChange}
                                className="w-full rounded-md bg-gray-100 py-2 pl-2 pr-4 outline-none"
                            />
                        </div>

                        <div className="relative mt-2 flex items-center gap-2">
                            {/* Min Slider */}
                            <input
                                type="range"
                                min={min}
                                max={halfPoint}
                                step="1"
                                value={displayMin}
                                onChange={handleMinSlider}
                                className="rangeSlider w-full translate-x-1.5 appearance-none rounded-lg"
                            />
                            {/* Max Slider */}
                            <input
                                type="range"
                                min={halfPoint}
                                max={max}
                                step="1"
                                value={displayMax}
                                onChange={handleMaxSlider}
                                className="rangeSlider -translate-x-1.5 w-full appearance-none rounded-lg focus:outline-none"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RangeSlider_V3