const DEV_TO_API = 'https://dev.to/api/articles?username=charliesay'

export const getBlogPosts = async () => {
  const res = await fetch(DEV_TO_API)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return { props: { post: json } }
}
