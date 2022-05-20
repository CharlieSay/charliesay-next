import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts } from '../lib/dev-to-api'
import Like from '../public/img/like.svg'
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
import { FillSvg, TitleH1 } from '../styles/common.styles'
import { NvContainerFixedWide } from '../styles/containers.styles'

const Blog = (posts: any): JSX.Element => {
  return (
    <NvContainerFixedWide>
      <TitleH1>Blog Posts</TitleH1>
      <BlogPostGrid>
        {posts.posts.props.post.map((post: DevToPost) => (
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

interface DevToPost {
  title: string
  id: number
  url: string
  published_timestamp: string
  tag_list: string[]
  reading_time_minutes: number
  positive_reactions_count: number
}

Blog.getInitialProps = async ({}) => {
  const res = await getBlogPosts()
  return { posts: res }
}

export default Blog
