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
}`;

export const STARTUP_BY_ID_QUERY = `*[_type == "startup" && _id == $id][0] |  {
  _id,
  slug,
  author->{
    _id,
    name,
    image,
    bio,
    username
  },
  category,
  description,
  image,
  pitch,
  title,
  view,
  _createdAt
}`;

export const STARTUP_VIEWS_QUERY = `*[_type == "startup" && _id == $id][0]{
_id,view}`


export const AUTHOR_BY_GITHUB_ID_QUERY = 
  `*[_type == "author" && _id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }`