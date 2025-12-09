
import type { Metadata } from 'next';
import AdminLoginForm from '../components/adminLoginForm';


export const metadata: Metadata = {
  title: 'E-Paper Admin | Login',
  description: '...',
}



export default function AdminLogin() {
  return (
    <section
      className={`flex h-screen items-center justify-center bg-[#E7E2FF]`}
    >
      {/* Row Section Start */}
      <div className="flex h-[70vh] w-[80%] items-center rounded-xl bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <div className="h-full w-1/2 rounded-s-xl bg-[url('/images/man-reading-news-paper.webp')] bg-cover bg-center"></div>
        <div className="w-1/2">
          <div className="flex h-100 items-center justify-center">
            <AdminLoginForm>
              
            </AdminLoginForm>
          </div>
        </div>
      </div>
      {/* Row Section End */}
    </section>
  );
}
