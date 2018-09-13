import Rest, { URL } from "../../utils";

export default class SpeakingService {
  constructor() {
    this.rest = new Rest();
  }

  getEvents() {
    return this.rest.get(
      "https://raw.githubusercontent.com/hardikpthv/about/master/src/assets/data/events.json"
    );
  }
}
