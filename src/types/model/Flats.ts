class Flats {
  City: string;
  Title: string;
  Author: string;
  Rooms: number;
  Tags: string[];
  Price: number;

  constructor(
    City: string,
    Title: string,
    Author: string,
    Rooms: number,
    Tags: string[],
    Price: number
  ) {
    this.City = City;
    this.Title = Title;
    this.Author = Author;
    this.Rooms = Rooms;
    this.Tags = Tags;
    this.Price = Price;
  }
}
