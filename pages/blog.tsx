import moment from 'moment'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getBlogPosts } from '../lib/dev-to-api'
import {
  BlogPost,
  BlogPostGrid,
  CardFooter,
  CardHeader,
  CardTitle,
  DateTag,
  ReadingTime,
  Tag,
  TagsGroup,
} from '../styles/blog.styles'
import { TitleH1 } from '../styles/common.styles'
import { NvContainerFixedWide } from '../styles/containers.styles'

interface DevToPost {
  title: string
  id: number
  url: string
  published_timestamp: string
  tag_list: string[]
  reading_time_minutes: number
  positive_reactions_count: number
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await getBlogPosts()
  return { props: { posts: res || [] } }
}

const Blog = (props: { posts: DevToPost[] }): JSX.Element => {
  const { posts } = props
  return (
    <NvContainerFixedWide>
      <TitleH1>Blog Posts</TitleH1>
      <BlogPostGrid>
        {posts.map((post: DevToPost) => (
          <Link key={post.id} href={post.url} passHref={true}>
            <BlogPost>
              <CardHeader>
                <DateTag>
                  {moment(post.published_timestamp)
                    .utc()
                    .format("DD MMM 'YY")
                    .toUpperCase()}
                </DateTag>
                <TagsGroup>
                  {post.tag_list.map((tag) => (
                    <Tag key={tag}>{tag.toUpperCase()}</Tag>
                  ))}
                </TagsGroup>
              </CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardFooter>
                <ReadingTime>
                  Takes {post.reading_time_minutes} minute
                  {post.reading_time_minutes === 1 ? '' : 's'} to read
                </ReadingTime>
              </CardFooter>
            </BlogPost>
          </Link>
        ))}
      </BlogPostGrid>
    </NvContainerFixedWide>
  )
}

export default Blog
