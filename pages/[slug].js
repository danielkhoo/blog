import { getPostBySlug, getAllPosts } from '../lib/api';
import Head from 'next/head';
import Navigation from '../Components/navigation';
import Layout from '../Components/layout';
import markdownToHtml from '../lib/markdownToHtml';
import { parseISO, format } from 'date-fns';

export default function Post({ post }) {
  return (
    <Layout>
      <Navigation selected="/blog" />
      <Head>
        <title>{post.title}</title>
        <link href={`https://unpkg.com/prismjs@0.0.1/themes/prism.css`} rel="stylesheet" />
      </Head>

      <main className={'mx-6 my-12'}>
        <div className={'my-12'}>
          <h3 className={'text-lg text-lightgray'}>
            <DateFormatter dateString={post.date} />
          </h3>

          <h1>{post.title}</h1>
        </div>
<<<<<<< HEAD
        <div className={'text-md text-gray p-2'} dangerouslySetInnerHTML={{ __html: post.content }} />
=======
        <div className={"text-md"} dangerouslySetInnerHTML={{ __html: post.content }}
        />
>>>>>>> ae65839ca8ae4cd80fe421cf96e0d0c2ed72fc66
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMM yyyy')}</time>;
}
