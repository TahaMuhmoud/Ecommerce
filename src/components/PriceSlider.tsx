import { MutableRefObject, useRef, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
interface PriceSlider {
  min: number;
  max: number;
  register: UseFormRegister<FieldValues>;
}
const PriceSlider = ({ min, max, register }: PriceSlider) => {
  const [URLSearchParams] = useSearchParams();
  const minPrice = URLSearchParams.get("min_price") || min;
  const maxPrice = URLSearchParams.get("max_price") || max;
  const [minVal, setMinVal] = useState<number>(Number(minPrice));
  const [maxVal, setMaxVal] = useState<number>(Number(maxPrice));
  const progress =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < maxVal - 100) {
      progress.current.style.left = `${(Number(e.target.value) / max) * 100}%`;
      setMinVal(Number(e.target.value));
    }
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > minVal + 100) {
      progress.current.style.right = `${
        100 - (Number(e.target.value) / max) * 100
      }%`;
      setMaxVal(Number(e.target.value));
    }
  };
  return (
    <div className="">
      <div className="flex items-center justify-evenly mb-5">
        <div className="rounded-lg border-2 border-secondary w-fit p-2">
          {minVal} £
        </div>
        <span>-</span>
        <div className="rounded-lg border-2 border-secondary w-fit p-2">
          {maxVal} £
        </div>
      </div>
      <div className="slider w-full h-2 bg-secondary/20 rounded-full relative">
        <div
          ref={progress}
          className={`progress absolute h-full rounded-full bg-secondary`}
          style={{
            left: `${(minVal / max) * 100}%`,
            width: `${((maxVal - minVal) / max) * 100}%`,
          }}
        ></div>
      </div>
      <div className="relative">
        <input
          type="range"
          id=""
          title="d"
          value={minVal}
          min={min}
          max={max}
          className="range-inp pointer-events-none absolute -top-2 h-2 w-full"
          style={{ background: "none", WebkitAppearance: "none" }}
          {...register("minPrice")}
          onChange={handleMinChange}
        />
        <input
          type="range"
          id=""
          title="s"
          value={maxVal}
          min={min}
          max={max}
          className="range-inp pointer-events-none absolute -top-2 h-2 w-full"
          style={{ background: "none", WebkitAppearance: "none" }}
          {...register("maxPrice")}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
