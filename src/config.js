module.exports = {
  rates: {
    commissionPct: 0.01,
    surcharge: 1,
    minimalCommission: 1,
    margin: 0.01,
    refreshRate: 1
  },
  initialInventory: {
    GBP: 500,
    INR: 1000,
    CAD: 300,
    EUR: 750,
    CNY: 200,
    USD: 3000
  },

  variableCurrencies: [
    {
      currency: "British Pound",
      abbr: "USDGBP"
    },
    {
      currency: "Canadian Dollar",
      abbr: "USDCAD"
    },
    {
      currency: "Indian Rupee",
      abbr: "USDINR"
    },
    {
      currency: "EU Euro",
      abbr: "USDEUR"
    },
    {
      currency: "Chinese Yuan",
      abbr: "USDCNY"
    }
  ]
};
