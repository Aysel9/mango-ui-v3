/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react'
import Tabs1 from '../components/Tabs1'
export default function Multipanel(){
	const [data, setData] = useState([
         {
          	name: "USDC/agEUR",
          	logo1: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
          	logo2: "https://assets.coingecko.com/coins/images/19479/small/agEUR.png?1635283566",
          	sellMain: "1.0",
         	sellMainSpan: 39,
         	buyMain: "4.0",
         	buyMainSpan: 39,
         	sellLow: "0.71314",
         	buyLow: "0.61314",
         	posAbs: 0.1,
         	oneM: 1,
         	oneNum: 30,
         	twoNum: 335,
         	threeNum: 336,
         	fourthNum: 30
         },
         {
          	name: "USDC/BRZ",
          	logo1: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
          	logo2: "https://assets.coingecko.com/coins/images/8472/small/2_vtiD3xwce9knG2COxtSMaQ.png?1597786961",
          	sellMain: "2.0",
         	sellMainSpan: 49,
         	buyMain: "5.0",
         	buyMainSpan: 49,
         	sellLow: "0.51314",
         	buyLow: "0.41314",
         	posAbs: 0.2,
         	oneM: 2,
         	oneNum: 40,
         	twoNum: 337,
         	threeNum: 338,
         	fourthNum: 40
         },
         {
         	name: "USDC/TRYB",
         	logo1: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
          	logo2: "https://assets.coingecko.com/coins/images/10119/small/JBs9jiXO_400x400.jpg?1642668342",
         	sellMain: "3.0",
         	sellMainSpan: 59,
         	buyMain: "6.0",
         	buyMainSpan: 59,
         	sellLow: "0.31314",
         	buyLow: "0.21314",
         	posAbs: 0.5,
         	oneM: 4,
         	oneNum: 50,
         	twoNum: 339,
         	threeNum: 340,
         	fourthNum: 50
         }
		])
	return(
		<div className="Multipanel">
			<div className="part-one">
            {
            	data.map((data) => {
            		return(
                     	<div className="coins-general-div">
					<div className="coins-name-icons">
						<div className="coins-name">{data.name}</div>
						<div className="images-icon">
							<img width="32px" height="32px" src={data.logo1}/>
							<img width="32px" height="32px" src={data.logo2}/>
						</div>
						<div className="icons-c-s"> <i class="fa-solid fa-share"></i> <i class="fa-solid fa-circle-xmark"></i></div>
					</div>
					<div className="outright-sp">
						<div className="outright">Outright</div>
						<div className="sp">SP</div>
					</div>
					<div className="sell-buy">
						<div className="sell">
							<div className="sell-in">Sell</div>
							<div className="sell-main">{data.sellMain}<span>{data.sellMainSpan}</span></div>
							<div className="sell-low">Low {data.sellLow}</div>
						</div>
						<div className="buy">
							<div className="buy-in">Buy</div>
							<div className="buy-main">{data.buyMain}<span>{data.buyMainSpan}</span></div>
							<div className="buy-low">Low {data.buyLow}</div>
						</div>
						<div className="pos-abs">{data.posAbs}</div>
					</div>
					<div className="bid-offer">
						<div className="arrow-l"><i class="fa-solid fa-caret-left"></i></div>
						<div className="bid">BID</div>
						<div className="rfs">RFS</div>
						<div className="offer">OFFER</div>
						<div className="arrow-r"><i class="fa-solid fa-caret-right"></i></div>						
					</div>
					<div className="usd-1m-ager">
						<div className="usd">USD</div>
						<div className="onem">{data.oneM}</div>
						<div className="ager">agER</div>
					</div>
					<div className="all-up-down-numbers">
						<div className="fourthly-num">
							<div className="one-num">{data.oneNum}</div>
							<div className="two-num"><i class="fa-solid fa-caret-up"></i> {data.twoNum}</div>
							<div className="three-num"><i class="fa-solid fa-caret-down"></i> {data.threeNum}</div>
							<div className="fourth-num">{data.fourthNum}</div>
						</div>
						<div className="fourthly-num">
							<div className="one-num">{data.oneNum}</div>
							<div className="two-num"><i class="fa-solid fa-caret-up"></i> {data.twoNum}</div>
							<div className="three-num"><i class="fa-solid fa-caret-down"></i> {data.threeNum}</div>
							<div className="fourth-num">{data.fourthNum}</div>
						</div>
						<div className="fourthly-num">
							<div className="one-num">{data.oneNum}</div>
							<div className="two-num"><i class="fa-solid fa-caret-up"></i> {data.twoNum}</div>
							<div className="three-num"><i class="fa-solid fa-caret-down"></i> {data.threeNum}</div>
							<div className="fourth-num">{data.fourthNum}</div>
						</div>
						<div className="fourthly-num">
							<div className="one-num">{data.oneNum}</div>
							<div className="two-num"><i class="fa-solid fa-caret-up"></i> {data.twoNum}</div>
							<div className="three-num"><i class="fa-solid fa-caret-down"></i> {data.threeNum}</div>
							<div className="fourth-num">{data.fourthNum}</div>
						</div>
						<div className="fourthly-num">
							<div className="one-num">{data.oneNum}</div>
							<div className="two-num"><i class="fa-solid fa-caret-up"></i> {data.twoNum}</div>
							<div className="three-num"><i class="fa-solid fa-caret-down"></i> {data.threeNum}</div>
							<div className="fourth-num">{data.fourthNum}</div>
						</div>
						<div className="fourthly-num">
							<div className="one-num">{data.oneNum}</div>
							<div className="two-num"><i class="fa-solid fa-caret-up"></i> {data.twoNum}</div>
							<div className="three-num"><i class="fa-solid fa-caret-down"></i> {data.threeNum}</div>
							<div className="fourth-num">{data.fourthNum}</div>
						</div>
						<div className="sub-add">
							<div className="sub-add-button"> - </div>
							<div className="sub-add-button"> + </div>
						</div>
						<div className="fourthly-num">
							<div className="one-num">{data.oneNum}</div>
							<div className="two-num"><i class="fa-solid fa-caret-up"></i> {data.twoNum}</div>
							<div className="three-num"><i class="fa-solid fa-caret-down"></i> {data.threeNum}</div>
							<div className="fourth-num">{data.fourthNum}</div>
						</div>
					</div>
				</div>
            	)
            	})
            }
			</div>
			<Tabs1 />
		</div>
		)
}