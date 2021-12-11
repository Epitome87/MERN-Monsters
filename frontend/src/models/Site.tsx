class Site {
  _id: string;
  name: string;
  description: string;

  constructor(siteId: string, siteName: string, siteDescription: string) {
    this._id = siteId;
    this.name = siteName;
    this.description = siteDescription;
  }
}

export default Site;
