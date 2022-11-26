export type CountryT = {
  name: {
    common: string,
    official: string,
    nativeName: {
      lang: {
        official: string,
        common: string,
      }
    }
  },
  tld: string,
  cca2: string,
  cca3: string,
  currencies: {
    type: {
      name: string,
      symbol: string,
    }
  },
  capital: string[],
  region: string,
  subregion: string[],
  languages: {
    lang: string,
  },
  borders: string[],
  population: number,
  flags: {
    png: string,
    svg: string,
  }
}