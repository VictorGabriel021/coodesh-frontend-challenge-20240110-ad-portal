class Place {
  name: string;
  state: {
    name: string;
    shortname: string;
  };
  placeId: number;

  constructor(
    name: string,
    state: { name: string; shortname: string },
    placeId: number
  ) {
    this.name = name;
    this.state = state;
    this.placeId = placeId;
  }
}
