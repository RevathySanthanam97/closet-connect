import { FilterProps } from '../types'
import './Filters.scss'
import FilterIcon from '../assets/filter.svg'
import { useState } from 'react';
import Sidebar from './Sidebar';
import MultiRangeSlider from './RangeSlider';

const Filters = ({
  range,
  minVal,
  maxVal,
  filterOptions,
  handleReset,
  handleToggle,
  handleRangeChange,
} : FilterProps) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className='filter__options'>
      <div className='filter__options__mobile mob-menu'>
        <button
          className='filter__options__mobile-btn'
          onClick={() => setShowFilters(prev => !prev)}>
          <img src={FilterIcon} />
        </button>
      </div>
      <Sidebar
        title="Filters"
        className="mob-menu"
        open={showFilters}
        onClose={() => setShowFilters(false)}
      >
        <ul>
          <li>
            <p>Pricing Options: </p>
          </li>
          {filterOptions.map((option) => (
            <li key={option.value}>
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => handleToggle(option.value)}
              />
              <label>{option.label.replace("_", " ").toLowerCase()}</label>
            </li>
          ))}
          <li className='filter__price-range'>
            <label>Max Price: </label>
            <MultiRangeSlider
              selectedMin={range.min}
              selectedMax={range.max}
              min={minVal}
              max={maxVal}
              onChange={handleRangeChange}
            />
          </li>
          <li>
            <button
              onClick={handleReset}
            >
              Reset
            </button>
          </li>
        </ul>
      </Sidebar>
      <ul className='filter__options__desktop'>
        <li>
          <p>Pricing Options: </p>
        </li>
        {filterOptions.map((option) => (
          <li key={option.value}>
            <input
              type="checkbox"
              checked={option.checked}
              onChange={() => handleToggle(option.value)}
            />
            <label>{option.label.replace("_", " ").toLowerCase()}</label>
          </li>
        ))}
        <li className='filter__price-range'>
          <label>Max Price: </label>
          <MultiRangeSlider
            selectedMin={range.min}
            selectedMax={range.max}
            min={minVal}
            max={maxVal}
            onChange={handleRangeChange}
          />
        </li>
        <li>
          <button
            onClick={handleReset}
          >
            Reset
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Filters