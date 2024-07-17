export interface user {
  email: string | null; // null if user isn't signed in
  name: string;
  uid: string; //refers to the user's unique id given via Google authentication
  divvys: [string]; //reference to the user's divvys (groups) that they are a part of
}

export interface divvy {
  divvyName: string;
  owner: string; //points to the user who created the divvy's uid
  name: string;
  divvyParticipants: [user | string];
  // divvyMessages: [message]; //?icebox
  passcode: string; //hashed 4 digit passcode
  events: [event | string];
}

export interface event {
  eventName: string;
  eventDate: Date;
  // eventLocation: string; //?icebox
  eventParticipants: [user | string];
  eventDescription: string;
  // eventDivvy: divvy | string; //do we need this?
  amount: number;
  payer: user | string;
  items: [item];
}

export interface item {
  itemName: string;
  itemPrice: number;
  itemParticipants: [user | string];
  itemPayer: user | string;
}