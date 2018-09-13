import Rest, { URL } from "../../utils";

export default class SpeakingService {
  constructor() {
    this.rest = new Rest();
  }

  getEvents() {
    return this.rest.get(`${URL.onlineEdu}/assets/data/github/events.json`);
  }
}
