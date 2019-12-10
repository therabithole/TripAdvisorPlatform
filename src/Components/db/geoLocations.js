export const locations = [
  {
    punjab: [
      { _id: "7v21ca3eeb7f6fbccd473456", city: "Lahore" },
      { _id: "7v51ca3eeb7f6fbccd413456", city: "Rawalpindi" },
      { _id: "7v71ca3eeb7f6fbccd471378", city: "Faisalabad" },
      { _id: "7v81ca3eeb7f6fbccd479876", city: "Multan" }
    ]
  },
  {
    federalCapital: [
      {
        _id: "7v11ca3eeb7f6fbccd423911",
        city: "Islamabad"
      }
    ]
  },
  {
    khyberPakhtunkhawa: [
      {
        _id: "7v81ca3eeb7f6fbccd479876",
        city: "Hazara"
      }
    ]
  },
  {
    sindh: [
      { _id: "7v41ca3eeb7f6fbccd122345", city: "Karachi" },
      { _id: "7v41ca3eeb7f6fbccd122345", city: "Hyderabad" }
    ]
  },

  {
    balochistan: [{ _id: "7v41ca3eeb7f6fbccd122345", city: "Quetta" }]
  }
];

let punjabCities = locations[0].punjab;
let federalCapitalCities = locations[1].federalCapital;
let kpkCities = locations[2].khyberPakhtunkhawa;
let sindhCities = locations[3].sindh;
let balochistanCities = locations[4].balochistan;

export function getAllLocations() {
  return locations.filter(allLocations => allLocations);
}

export function getPunjabCities() {
  let punjablist = punjabCities.map(punjab => {
    return punjab.city;
  });

  return punjablist;
}

export function getKPKCities() {
  return kpkCities;
}

export function getSindhCities() {
  return sindhCities;
}

export function getBalochistanCities() {
  return balochistanCities;
}

export function getfederalCapitalCities() {
  return federalCapitalCities;
}
