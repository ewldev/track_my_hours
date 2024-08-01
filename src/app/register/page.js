import Image from 'next/image';

export default function Register() {
  return (
    <div className="container mx-auto px-4 flex flex-col flex-grow">
      <div className="flex items-center justify-center py-4 md:py-6 lg:py-8">
        <h1 id="sign-up" className="text-[#181311] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
          Sign up
        </h1>
      </div>

      <div className="flex-grow flex flex-col justify-start items-center pt-4 sm:pt-8 custom-pt" role="main">
        <div className="space-y-2 w-full max-w-md">
          <label>Email</label>
          <div className="flex rounded-xl border border-[#e6dedb] overflow-hidden">
            <input type="email" className="flex-grow px-4 py-2" />
          </div>
        </div>

        <div className="space-y-2 w-full max-w-md mt-4">
          <label>Password</label>
          <div className="flex rounded-xl border border-[#e6dedb] overflow-hidden">
            <input type="password" className="flex-grow px-4 py-2" />
          </div>
        </div>

        <button className="mt-6 bg-[#f14b0e] text-white font-bold py-2 px-4 rounded-xl hover:bg-[#d64100] transition duration-300 ease-in-out w-full max-w-md">
          Create account
        </button>
      </div>
    </div>
  );
}