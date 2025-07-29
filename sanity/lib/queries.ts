
export const STARTUPS_QUERY = `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  slug,
  author->{
    _id,
    name,
    image,
    bio
  },
  category,
  description,
  image,
  pitch,
  title,
  view,
  _createdAt
}`