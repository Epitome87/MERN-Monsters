class Site {
  _id: string;
  name: string;
  description: string;
  date: Date;

  constructor(
    siteId: string,
    siteName: string,
    siteDescription: string,
    siteDate: Date
  ) {
    this._id = siteId;
    this.name = siteName;
    this.description = siteDescription;
    this.date = siteDate;
  }
}

export default Site;
