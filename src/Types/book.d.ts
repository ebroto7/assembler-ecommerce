
export interface BookType {
    id:               string;
    title:            string;
    author:           string;
    isbn:             string;
    publisher?:        string;
    publication_date?: string;
    genre?:            string;
    language?:         string;
    page_count?:       number;
    price:            number;
    format?:           string;
    rating?:           number;
    description:      string;
    bestseller:       boolean;
    series?:           string;
    awards?:           string;
    img?:              string;
    stock:            number;
}

export enum Awards {
    BookerPrize = "Booker Prize",
    NationalBookAward = "National Book Award",
    PulitzerPrize = "Pulitzer Prize",
}

export enum Format {
    Audiobook = "audiobook",
    Ebook = "ebook",
    Hardcover = "hardcover",
    Paperback = "paperback",
}

export enum Genre {
    Fiction = "fiction",
    Mystery = "mystery",
    NonFiction = "non-fiction",
    Romance = "romance",
    SciFi = "sci-fi",
}

export enum Series {
    Series = "series",
    Standalone = "standalone",
}

export enum Title {
    DR = "Dr",
    Honorable = "Honorable",
    MS = "Ms",
    Mr = "Mr",
    Mrs = "Mrs",
    Rev = "Rev",
}