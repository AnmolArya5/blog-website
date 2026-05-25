export default function Disclaimer() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            Disclaimer
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              The information provided on AABlog is for educational and informational purposes only. While we try to keep all content accurate and updated, we do not guarantee the completeness, reliability, or accuracy of any information on this website.
            </p>

            <p>
              Any action you take based on the information found on AABlog is strictly at your own risk. AABlog will not be responsible for any losses, damages, or issues related to the use of our website or content.
            </p>

            <p>Our website may contain links to external websites. We are not responsible for the content, policies, or practices of third-party websites.</p>

            <p>
              By using AABlog, you agree to this disclaimer and its terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
