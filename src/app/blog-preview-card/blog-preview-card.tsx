import illustration from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';

export default function BlogPreviewCard() {
    return (
        <div id="blogPreviewCard" className="bg-[hsl(47,88%,63%)] min-h-[calc(100vh-60px)] font-figtree"> 
          <div className="flex flex-col gap-3 bg-white border border-solid border-black w-80 rounded-xl p-4 relative top-16 mx-auto shadow-[5px_5px_5px_black]">
            <img src={illustration} alt="Illustration" className=" rounded-xl"/>

            <span className="bg-[hsl(47,88%,63%)] w-fit px-2 py-1 rounded-md font-bold text-sm">Learning</span>

            <span className="font-semibold text-xs">Published 21 Dec 2023</span>
            
            <p className="text-xl font-bold">HTML & CSS foundations</p>

            <p className="text-sm">These language are the backbone of every website, defining structure, content, and presentation</p>

            <div className='flex flex-row items-center gap-2'>

            <img src={avatar} alt="avatar" className="rounded-full w-6"/>
            
            <p className="text-sm font-bold">Greg Hooper</p>
            </div>
          </div>
        </div>
    );
  }