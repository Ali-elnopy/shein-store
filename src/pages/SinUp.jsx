import React from 'react';

const SinUp = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#faf8fa] via-[#ffffff] to-[#f4f7fd] flex flex-col items-center justify-center font-sans overflow-hidden text-gray-900">
      
      {/* الصور الزخرفية (نفس الـ Visual Identity لصفحة الـ Login)
      <div className="hidden lg:block absolute left-[12%] top-[25%] z-0 pointer-events-none drop-shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1600164318329-87a4128f142c?q=80&w=400&auto=format&fit=crop" 
          alt="Abstract Gold Fabric" 
          className="w-56 h-72 object-cover rounded-[2px] opacity-90" 
        />
      </div> */}
      
      {/* <div className="hidden lg:block absolute right-[12%] top-[30%] z-0 pointer-events-none drop-shadow-2xl">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop" 
            alt="Fall 24 Collection" 
            className="w-72 h-[400px] object-cover rounded-[2px]" 
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold tracking-widest mb-1">FALL '24</h3>
            <p className="text-[10px] tracking-[0.2em] font-medium opacity-80 uppercase">The Collection</p>
          </div>
        </div>
      </div> */}

      <main className="relative z-10 flex flex-col items-center w-full px-4 py-12">
        
        {/* الـ Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold tracking-tighter text-gray-900 mb-1">THE CURATOR</h1>
          <p className="text-[9px] font-bold text-gray-500 tracking-[0.25em] uppercase">Elevated Fashion Identity</p>
        </header>

        {/* كارت الـ Sign Up */}
        <div className="bg-white p-10 sm:p-12 w-full max-w-[440px] rounded-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]">
          
          {/* التبويبات - هنا SIGN UP هو النشط */}
          <div className="flex gap-8 border-b border-gray-100 mb-8">
            <button className="pb-3 text-[13px] font-bold text-gray-400 hover:text-gray-800 transition-colors tracking-wide">LOGIN</button>
            <button className="pb-3 text-[13px] font-bold text-[#1a55ff] border-b-2 border-[#1a55ff] tracking-wide">SIGN UP</button>
          </div>

          {/* التسجيل السريع */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#f6f6f8] hover:bg-[#ececec] transition-colors py-3.5 rounded-[2px] text-[11px] font-bold tracking-wider text-gray-700 uppercase">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#f6f6f8] hover:bg-[#ececec] transition-colors py-3.5 rounded-[2px] text-[11px] font-bold tracking-wider text-gray-700 uppercase">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.05 2.53.68 3.14.68.65 0 2.09-.8 3.65-.68 1.25.05 2.83.48 3.86 1.83-3.2 1.76-2.68 5.76.4 6.91-1.02 2.51-2.08 3.33-3.05 4.23zM12.03 7.25c-.15-2.3 1.83-4.18 3.97-4.25.29 2.45-2.08 4.41-3.97 4.25z"/>
              </svg>
              Apple
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <hr className="flex-1 border-gray-100" />
            <span className="text-[9px] text-gray-400 font-bold tracking-[0.15em] uppercase">Or register with email</span>
            <hr className="flex-1 border-gray-100" />
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* حقل الاسم الكامل - إضافي في الـ Sign up */}
            <div className="mb-6">
              <label className="block text-[10px] font-bold text-gray-500 tracking-[0.15em] mb-2 uppercase">Full Name</label>
              <input 
                type="text" 
                placeholder="Alexander Curator" 
                className="w-full pb-3 text-sm text-gray-900 border-b border-gray-200 focus:outline-none focus:border-[#1a55ff] placeholder-gray-300 bg-transparent transition-colors" 
              />
            </div>

            <div className="mb-6">
              <label className="block text-[10px] font-bold text-gray-500 tracking-[0.15em] mb-2 uppercase">Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full pb-3 text-sm text-gray-900 border-b border-gray-200 focus:outline-none focus:border-[#1a55ff] placeholder-gray-300 bg-transparent transition-colors" 
              />
            </div>

            <div className="mb-10">
              <label className="block text-[10px] font-bold text-gray-500 tracking-[0.15em] mb-2 uppercase">Create Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pb-3 text-sm text-gray-900 border-b border-gray-200 focus:outline-none focus:border-[#1a55ff] placeholder-gray-300 bg-transparent transition-colors tracking-[0.3em]" 
              />
            </div>

            <button type="submit" className="w-full bg-[#114bf5] hover:bg-[#0d3ccc] text-white text-[12px] font-bold tracking-[0.15em] py-4 rounded-[2px] shadow-[0_8px_20px_-6px_rgba(17,75,245,0.4)] transition-all flex justify-center items-center gap-2 mb-6 uppercase">
              Create Account
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>

          </form>

          <p className="text-center text-[11px] text-gray-500 leading-relaxed max-w-[300px] mx-auto">
            Joining THE CURATOR means you agree to our <br />
            <a href="#" className="text-gray-800 underline decoration-gray-300 underline-offset-2">Terms of Service</a> and <a href="#" className="text-gray-800 underline decoration-gray-300 underline-offset-2">Privacy Policy</a>.
          </p>

        </div>

        <a href="#" className="mt-10 text-[10px] font-bold text-gray-600 hover:text-gray-900 tracking-[0.15em] flex items-center gap-2 uppercase transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Return to Shop
        </a>

      </main>
    </div>
  );
};

export default SinUp;