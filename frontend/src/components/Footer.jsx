import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsYoutube } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-cyan-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg '>
                AA
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About Us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  AABlogs
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About
                </Footer.Link>
                <Footer.Link
                  href='/contact'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            
            <div>
              <Footer.Title title='Legal Policy' />
              <Footer.LinkGroup col>
                <Footer.Link href='/PrivacyPolicy' target='_blank'  rel='noopener noreferrer'>PrivacyPolicy</Footer.Link>
                <Footer.Link href='/Disclaimer' target='_blank'  rel='noopener noreferrer'>Disclaimer</Footer.Link>
                <Footer.Link href='/termsConditions' target='_blank'rel='noopener noreferrer'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="AA blog"
            year={new Date().getFullYear()}
          />
          {/* <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='#' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsYoutube}/>

          </div> */}
        </div>
      </div>
    </Footer>
  );
}
