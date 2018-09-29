import Rest, { URL } from "../../utils";

export default class ProjectService {
  constructor() {
    this.rest = new Rest();
  }

  getProjects() {
    return this.rest.get(`${URL.api}/projects`);
  }
}
