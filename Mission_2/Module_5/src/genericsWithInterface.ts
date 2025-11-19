interface IDeveloper<T,X = null> {
  name: string,
  salary: number,
  devices: {
    brand: string,
    model: string,
    releaseYear: number,
  },
  smartWatch : T,
  bike ?: X,
}

interface IPoorSmartWatch {
  brand: string;
  heartRateMonitor: boolean;
}

interface IRichSmartWatch {
  brand: string;
  heartRateMonitor: boolean;
  callFeatures: boolean;
  runningFeatures: boolean;
  stopWatchFeatures: boolean;
}

const poorDeveloper : IDeveloper<IPoorSmartWatch> = {
  name: "Mr.Poor",
  salary: 5000,
  devices:{
    brand: "HP",
    model: "15-ef",
    releaseYear: 2020,
  },
  smartWatch: {
    brand: "Readme",
    heartRateMonitor: true,
  },
  bike : null,
}

const richDeveloper: IDeveloper<IRichSmartWatch , {
  brand : string,
}> = {
  name: "Mr.Rich",
  salary: 50000,
  devices: {
    brand: "Apple",
    model: "v-4",
    releaseYear: 2025,
  },
  smartWatch: {
    brand: "Readme",
    heartRateMonitor: true,
    callFeatures: true,
    runningFeatures: true,
    stopWatchFeatures: true,
  },
  bike : {
    brand : "Yamaha"
  }
};

