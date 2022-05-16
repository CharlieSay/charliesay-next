import { getBlogPosts } from '../lib/dev-to-api'
import { TitleH1 } from '../styles/common.styles'
import { NvContainerFixedWide } from '../styles/containers.styles'
import {
  BlogPostGrid,
  BlogPost,
  CardTitle,
  CardFooter,
  Tag,
  TagsGroup,
  DateTag,
  ReadingTime,
} from '../styles/blog.styles'
import Link from 'next/link'
import moment from 'moment'

const Blog = (posts: any): JSX.Element => {
  return (
    <NvContainerFixedWide>
      <TitleH1>Blog Posts</TitleH1>
      <BlogPostGrid>
        {posts.posts.props.post.map((post: DevToPost) => (
          <Link key={post.id} href={post.url} passHref={true}>
            <BlogPost>
              <CardFooter>
                <DateTag>
                  {moment(post.published_timestamp).utc().format("DD MMM 'YY")}
                </DateTag>
                <TagsGroup>
                  {post.tag_list.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagsGroup>
              </CardFooter>
              <CardTitle>{post.title}</CardTitle>
              <ReadingTime>
                Takes {post.reading_time_minutes} minute
                {post.reading_time_minutes === 1 ? '' : 's'} to read
              </ReadingTime>
            </BlogPost>
          </Link>
        ))}
      </BlogPostGrid>
    </NvContainerFixedWide>
  )
}

interface DevToPost {
  title: string
  id: number
  url: string
  published_timestamp: string
  tag_list: string[]
  reading_time_minutes: number
}

Blog.getInitialProps = async ({}) => {
  const res = await getBlogPosts()
  return { posts: res }
}

export default Blog
