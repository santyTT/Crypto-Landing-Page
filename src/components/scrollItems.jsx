import "../styles/tiker.css";

const items = [
  { name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
  { name: "Bitcoin", symbol: "BTC", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
  { name: "Fantom", symbol: "FTM", icon: "https://cryptologos.cc/logos/fantom-ftm-logo.png" },
  { name: "Tether", symbol: "USDT", icon: "https://cryptologos.cc/logos/tether-usdt-logo.png" },
  { name: "HUSD", symbol: "HUSD", icon: "https://cryptologos.cc/logos/huobi-token-ht-logo.png" },
  { name: "Ankr", symbol: "ANKR", icon: "https://cryptologos.cc/logos/ankr-ankr-logo.png" },
  { name: "Hifi Finance", symbol: "MFT", icon: "https://cryptologos.cc/logos/hifi-finance-hifi-logo.png" },
  { name: "BotXcoin", symbol: "BOTX", icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png" },
  { name: "CoinEx Token", symbol: "CET", icon: "https://cryptologos.cc/logos/coinex-token-cet-logo.png" },
  { name: "RChain", symbol: "REV", icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png" },
  { name: "HEX", symbol: "HEX", icon: "https://cryptologos.cc/logos/hex-hex-logo.png" },
  { name: "Polkastarter", symbol: "POLS", icon: "https://cryptologos.cc/logos/polkastarter-pols-logo.png" },
  { name: "Egoras", symbol: "EGR", icon: "https://cryptologos.cc/logos/uniswap-uni-logo.png" },
];

const Ticker = () => {
  return (
    <div className="ticker-container">
      {/* Fila 1 - Izquierda */}
      <div className="ticker-row">
        <div className="ticker-wrapper">
          {items.concat(items).map((item, index) => (
            <div key={index} className="ticker-item">
              <img src={item.icon} alt={item.name} />
              {item.name} ({item.symbol})
            </div>
          ))}
        </div>
      </div>

      {/* Fila 2 - Derecha */}
      <div className="ticker-row">
        <div className="ticker-wrapper reverse fast">
          {items.concat(items).map((item, index) => (
            <div key={`reverse-${index}`} className="ticker-item">
              <img src={item.icon} alt={item.name} />
              {item.name} ({item.symbol})
            </div>
          ))}
        </div>
      </div>

      {/* Fila 3 - Izquierda (lenta) */}
      <div className="ticker-row">
        <div className="ticker-wrapper slow">
          {items.concat(items).map((item, index) => (
            <div key={`slow-${index}`} className="ticker-item">
              <img src={item.icon} alt={item.name} />
              {item.name} ({item.symbol})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
