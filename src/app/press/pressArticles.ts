export interface PressArticle {
  id: number;
  image_url: string | null;
  link: string;
  media_name: string;
  title: string;
}

export const pressArticles = [
  {
    id: 2,
    image_url:
      "https://epigram.org.uk/content/images/2020/07/Untitled-design--1--3.png",
    link: "https://epigram.org.uk/2020/07/02/now-u-an-app-for-social-change-created-by-a-bristol-student/",
    media_name: "Epigram",
    title: "An app for social change created by a Bristol student",
  },
  {
    id: 4,
    image_url:
      "https://fundraising.co.uk/wp-content/uploads/2020/06/Screen-Shot-2020-06-22-at-08.03.45.png",
    link: "https://fundraising.co.uk/2020/06/22/app-launches-to-help-people-take-on-global-issues-through-individual-action/",
    media_name: "UKFundraising",
    title:
      "App launches to help people take on global issues through individual action",
  },
  {
    id: 3,
    image_url:
      "https://fundraising.co.uk/wp-content/uploads/2020/06/Screen-Shot-2020-06-22-at-08.03.45.png",
    link: "https://www.palatinate.org.uk/durham-alumna-helps-launch-now-u-app-to-tackle-world-issues/",
    media_name: "Palatinate",
    title: "Durham alumna helps launch now-u app to tackle world issues",
  },
];
