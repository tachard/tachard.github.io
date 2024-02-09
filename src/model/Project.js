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
    summary,
    keySkills,
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
    this.summary = summary;
    this.keySkills = keySkills;
    this.company = company;
    this.html = html;
  }
}

export default Project;