import Image from 'next/image';

const Preloader = () => (
  <div id="preloader" className="preloader flex items-center justify-center h-screen w-screen fixed top-0 left-0 bg-white z-50">
    <div className="box flex flex-col gap-4">
      <span className="man-pre mx-auto">
        <Image src="/assets/img/banner/preloader.png" alt="img" width={100} height={100} />
      </span>
    </div>
  </div>
);

export default Preloader;