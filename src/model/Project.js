class Project {
  constructor(
    id,
    title,
    cardImage,
    bannerImage,
    type,
    place,
    begin,
    end,
    company,
    html
  ) {
    this.id = id;
    this.title = title;
    this.cardImage = cardImage;
    this.bannerImage = bannerImage;
    this.type = type;
    this.place = place;
    this.begin = new Date(begin);
    this.end = new Date(end);
    this.company = company;
    this.html = html;
  }
}

export default Project;