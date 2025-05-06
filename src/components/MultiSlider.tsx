import "./MultiSlider.scss";
import { MultiSliderProps } from "../types";

const MultiRangeSlider = ({ min, max, onChange, selectedMin, selectedMax }: MultiSliderProps) => {

  const getPercent = (value: number) => {
    if (typeof value !== "number" || isNaN(value)) return 0;
    return Math.round(((value - min) / (max - min)) * 100);
  };

  const minPercent = getPercent(selectedMin);
  const maxPercent = getPercent(selectedMax);
  const rangeLeft = `${minPercent}%`;
  const rangeWidth = `${maxPercent - minPercent}%`;

  return (
    <div className="multislider__container">
      <input
        type="range"
        min={min}
        max={max}
        value={selectedMin}
        onChange={(e) => {
          const value = Math.min(+e.target.value, selectedMax - 1);
          onChange({ min: value, max: selectedMax });
        }}
        className={`thumb thumb--zindex-3 ${selectedMin > max - 100 ? "thumb--zindex-5" : ""}`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={selectedMax}
        onChange={(e) => {
          const value = Math.max(+e.target.value, selectedMin + 1);
          onChange({ min: selectedMin, max: value });
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div
          className="slider__range"
          style={{
            left: rangeLeft,
            width: rangeWidth,
          }}
        />
        <div className="slider__left-value">{selectedMin}</div>
        <div className="slider__right-value">{selectedMax}</div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
