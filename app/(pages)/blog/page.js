import BlogPageHero from '../../Components/Organisms/BlogPageHero';
import BlogPagination from '../../Components/Organisms/BlogPagination';
import BlogPostRow from '../../Components/Organisms/BlogPostRow';
import Footer from '../../Components/Organisms/Footer';
import Header from '../../Components/Organisms/Header';
import { blogPosts } from '../../content/blogPageContent';

export const metadata = {
  title: 'Blog',
  description:
    'Latest news, feature announcements, and stories from WhatsApp — updates on privacy, groups, calling, and more.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogPageHero />
        <section className="bg-white" aria-label="Blog posts">
          {blogPosts.map((post) => (
            <BlogPostRow
              key={post.id}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              href={post.href}
              visual={post.visual}
              pills={post.pills}
            />
          ))}
        </section>
        <BlogPagination />
      </main>
      <Footer />
    </div>
  );
}
