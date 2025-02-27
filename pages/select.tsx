/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import useMangoStore from '../stores/useMangoStore'
import Link from 'next/link'
import { formatUsdValue } from '../utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageBodyContainer from '../components/PageBodyContainer'
import TopBar from '../components/TopBar'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'tv-chart'])),
      // Will be passed to the page component as props
    },
  }
}

const SelectMarket = () => {
  const { t } = useTranslation('common')
  const groupConfig = useMangoStore((s) => s.selectedMangoGroup.config)
  const mangoGroup = useMangoStore((s) => s.selectedMangoGroup.current)
  const mangoCache = useMangoStore((s) => s.selectedMangoGroup.cache)

  const [markets, setMarkets] = useState<any[]>([])
  useEffect(() => {
    const markets: any[] = []
    const allMarkets =
      groupConfig?.spotMarkets && groupConfig?.perpMarkets
        ? [...groupConfig.spotMarkets, ...groupConfig.perpMarkets]
        : []
    allMarkets.forEach((market) => {
      const base = market.name.slice(0, -5)
      const found = markets.find((b) => b.baseAsset === base)
      if (!found) {
        markets.push({ baseAsset: base, markets: [market] })
      } else {
        found.markets.push(market)
      }
    })
    setMarkets(markets)
  }, [])

  if (!mangoCache) {
    return null
  }

  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all`}>
      <TopBar />
      <PageBodyContainer>
        <div className="py-4 text-2xl font-bold text-th-fgd-1">
          {t('markets')}
        </div>
        {markets.map((mkt) => {
          return (
            <div key={mkt.baseAsset}>
              <div className="flex items-center justify-between bg-th-bkg-3 px-2.5 py-2">
                <div className="flex items-center">
                  <img
                    alt=""
                    src={`/assets/icons/${mkt.baseAsset.toLowerCase()}.svg`}
                    className={`mr-2.5 h-5 w-auto`}
                  />
                  <span className="text-th-fgd-2">{mkt.baseAsset}</span>
                </div>
              </div>
              <div className="divide-y divide-th-bkg-4">
                {mangoGroup
                  ? mkt.markets.map((m) => (
                      <div
                        className={`flex items-center justify-between px-2.5 text-xs`}
                        key={m.name}
                      >
                        <Link href={`/?name=${m.name}`} key={m.name}>
                          <a className="default-transition flex h-12 w-full cursor-pointer items-center justify-between text-th-fgd-2 hover:text-th-primary">
                            {m.name}
                            <div className="flex items-center">
                              <span className="w-20 text-right">
                                {formatUsdValue(
                                  mangoGroup
                                    .getPrice(m.marketIndex, mangoCache)
                                    .toNumber()
                                )}
                              </span>
                              <ChevronRightIcon className="ml-1 h-4 w-5 text-th-fgd-2" />
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          )
        })}
        {/* spacer so last market can be selected albeit bottom bar overlay */}
        <p className="flex h-12 md:hidden"></p>
      </PageBodyContainer>
    </div>
  )
}

export default SelectMarket
