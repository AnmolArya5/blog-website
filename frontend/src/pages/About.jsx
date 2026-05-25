export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About AABlog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to AABlog — a platform created to share informative, helpful, and easy-to-understand content across technology, programming, education, digital trends, and everyday learning topics.
            </p>

            <p>
              At AABlog, our goal is to provide readers with high-quality articles that are accurate, practical, and valuable. We focus on creating content that helps students, developers, beginners, and curious learners improve their knowledge and stay updated with the latest information.
            </p>

            <p>Our mission is to build a trusted online knowledge platform where users can learn new skills, explore technology, and find useful information in one place.</p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
