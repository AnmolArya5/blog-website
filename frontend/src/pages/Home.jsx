import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Button } from 'flowbite-react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex items-center justify-center flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to AABlog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          AABlog shares informative articles on technology, programming,news, new things, tutorials, and useful digital tips for all. 
          <br/>
          Explore easy-to-understand guides, tech updates, and learning resources to improve your knowledge and skills.
        </p>
        
       <Button
         href='/search'
         outline
         className='className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" hover:opacity-100'
       >
         View all posts
       </Button>
      </div>
    

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
