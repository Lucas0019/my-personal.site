type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Motion Primitives Pro",
    description:
      "Advanced components and templates to craft beautiful websites.",
    link: "https://pro.motion-primitives.com/",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
    id: "project1",
  },
  {
    name: "Motion Primitives",
    description: "UI kit to make beautiful, animated interfaces.",
    link: "https://motion-primitives.com/",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
    id: "project2",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Keyrus",
    title: "Frontend Developer Pleno",
    start: "2024",
    end: "Present",
    link: "https://olucasxavier.vercel.app/",
    id: "work3",
  },
  {
    company: "Codeby, Keyrus Company",
    title: "Frontend Developer Pleno",
    start: "2022",
    end: "2024",
    link: "https://olucasxavier.vercel.app/",
    id: "work2",
  },
  {
    company: "Codeby",
    title: "Frontend Developer",
    start: "2021",
    end: "2022",
    link: "https://olucasxavier.vercel.app/",
    id: "work1",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "#00 Piloto",
    description: "O começo de uma nova jornada, explorando o desconhecido.",
    link: "/blog/piloto",
    uid: "blog-1",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/Lucas0019",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/olucasxavier/",
  },
];

export const EMAIL = "olucasxavier@duck.com";
export const SITE_URL = "https://olucasxavier.vercel.app/";
export const SITE_NAME = "Lucas Xavier";
export const SITE_DESCRIPTION =
  "Lucas Xavier is a personal website template built with Next.js 15, React 19 and Motion-Primitives.";
