const blogWriters = [
  {
    full_name: "Ania Tumm-Brennan",
    profile_picture_url:
      "https://now-u.s3.eu-west-2.amazonaws.com/Ania_Tumm_Brennan_17f12a169e.jpeg",
    description:
      "A marketing consultant and content writer based in North London. Loves road trips and long walks with her two Irish setters. Joined now-u as a copywriter to help promote social inclusion and wildlife conservation.",
    id: 0,
  },
  {
    full_name: "Alexandra Spencer",
    profile_picture_url:
      "https://now-u.s3.eu-west-2.amazonaws.com/alex_headshot_1_cda9607bcb.jpeg",
    description:
      "Alexandra is an English Language graduate, PR executive and mum to one. She freelances as a content writer and volunteers for NOW-U as a copywriter and editor.",
    id: 1,
  },
  {
    full_name: "Seamus May",
    profile_picture_url:
      "https://now-u.s3.eu-west-2.amazonaws.com/blog_writer_Seamus_May_png_a1c2790ecf.png",
    description:
      "A recent PhD graduate and full time spirits copywriter. Lover of great writing. Erstwhile bartender. Now based in Sydney and volunteering as a writer at now-u!",
    id: 2,
  },
  {
    full_name: "Jenny Cole",
    profile_picture_url:
      "https://drive.google.com/file/d/15K7wo67HrVbnsnRzCO1VsjOlmuUSTOBF/view?usp=sharing",
    description:
      "Jenny is currently working as a freelance copywriter. She has over 10 years of professional sales and marketing experience in the private and public sector, including 3 years as an in-house copywriter for an established UK retailer. At now-u, Jenny works on our copywriting.",
    id: 3,
  },
  {
    full_name: "Midra Shanthikumar",
    profile_picture_url:
      "https://now-u.s3.eu-west-2.amazonaws.com/blog_writter_profile_picture_midra_shanthikumar_c6afb9b7f6.png",
    description:
      "A 4th year medical student interested in Global Health. Blogger for now-u. Spends most of her spare time on Netflix and studying (not out of choice). Always has a good documentary recommendation. Convinces herself she is a gym girl.",
    id: 4,
  },
  {
    full_name: "Matthew Harris",
    profile_picture_url:
      "https://now-u.s3.eu-west-2.amazonaws.com/blog_writter_profile_picture_matt_harris_f7c9643a22.jpeg",
    description:
      "A recent chemical engineering graduate from the University of Cambridge. Blogger and copywriter for now-u. Big fan of Jaffa Cakes and road trips. Based near Rugby with two siblings.",
    id: 5,
  },
  {
    full_name: "Emma Mulholland",
    profile_picture_url:
      "https://now-u.s3.eu-west-2.amazonaws.com/blog_writter_profile_picture_emma_mulholland_936b4e0b72.png",
    description:
      "Full-time copywriter with a background in digital communications. In her spare time, she does comms work for several charities, and can be found reading, doing yoga, playing video games or tending to plants. ",
    id: 6,
  },
];

export type BlogWriter = typeof blogWriters[number];

export function getBlogWriter(id: number): BlogWriter {
    const writer = blogWriters.find(writer => writer.id === id)
    if (writer == null) {
        throw new Error(`Blog writter with id ${id} not found`)
    }
    return writer
}
