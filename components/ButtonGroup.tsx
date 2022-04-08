import { FunctionComponent } from 'react'

interface ButtonGroupProps {
  activeValue: string
  className?: string
  onChange: (x) => void
  unit?: string
  values: Array<any>
  names?: Array<string>
}

const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({
  activeValue,
  className,
  unit,
  values,
  onChange,
  names,
}) => {
  return (
    <div className="">
      <div className="tradeform-persent-text-general relative">
        {activeValue && values.includes(activeValue) ? (
          <div
            className={`default-transition absolute left-0 top-0`}
            style={{
              transform: `translateX(${
                values.findIndex((v) => v === activeValue) * 100
              }%)`,
              width: `${100 / values.length}%`,
            }}
          />
        ) : null}
        {values.map((v, i) => (
          <button
            className={`${className} tradeform-persent-text default-transition relative
              ${
                v === activeValue
                  ? `text-th-primary`
                  : `text-th-fgd-2 hover:text-th-primary`
              }
            `}
            key={`${v}${i}`}
            onClick={() => onChange(v)}
            style={{
              width: `${100 / values.length}%`,
            }}
          >
            {names ? (unit ? names[i] + unit : names[i]) : unit ? v + unit : v}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ButtonGroup
