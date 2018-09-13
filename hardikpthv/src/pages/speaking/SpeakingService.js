import Rest from "../../utils";

const MEDIA_URL = "http://onlineedu.in/tutorials";

class SpeakingService {
  constructor() {
    this.rest = new Rest();
  }

  getEvents() {
    return this.rest.get(`${MEDIA_URL}/assets/data/github/events.json`);
  }
}

export default SpeakingService;
