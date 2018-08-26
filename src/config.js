module.exports = {
  rates: {
    commissionPct: 0.02,
    surcharge: 3,
    minimalCommission: 10,
    margin: 0.01,
    refreshRate: 6
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
