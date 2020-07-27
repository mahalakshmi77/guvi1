const Bus = require("../models/BusModel");

const busdata = [
  {
    busno: "TN11 AB2282",
    from: "Chennai",
    to: "Banglore",
    date: "27/07/2020",
    ticket: 20
  },
  {
    busno: "TN11 AB2282",
    from: "Chennai",
    to: "Banglore",
    date: "28/07/2020",
    ticket: 20
  },
  {
    busno: "TN11 AB2282",
    from: "Banglore",
    to: "chennai",
    date: "29/07/2020",
    ticket: 20
  },
  {
    busno: "TN11 AB2282",
    from: "Banglore",
    to: "Chennai",
    date: "29/07/2020",
    ticket: 20
  },
  {
    busno: "TN11 AB2282",
    from: "Chennai",
    to: "Banglore",
    date: "30/07/2020",
    ticket: 20
  }
];
const busseeder = async () => {
  await Bus.sync({ force: true });
  busdata.forEach(async bus => {
    try {
      const result = await Bus.create(bus);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};
busseeder();
