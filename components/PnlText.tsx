import { formatUsdValue } from '../utils'

const PnlText = ({ className, pnl }: { className?: string; pnl?: number }) => (
  <div  style={{marginRight: "5px"}} className="sol-perp-position-down-count">
    {pnl ? (
      <p
        className={`mb-0 ${className} ${
          pnl > 0 ? 'text-th-green' : 'text-th-red'
        }`}
      >
        {formatUsdValue(pnl)}
      </p>
    ) : (
      '--'
    )}
  </div>
)

export default PnlText
