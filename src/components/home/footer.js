"use client";

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-gray-50 py-10 px-6 md:px-20 border-t text-right">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <Link className="text-2xl font-bold text-yellow-700" href='/'>Threadly</Link>

          <p className="text-gray-500 text-sm leading-6">
            خیابان دانشگاه، پلاک ۴۰۰، طبقه دوم، سوئیت ۲۰۰
            <br />
            میامی، فلوریدا، آمریکا
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-800">لینک‌ها</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-gray-800 cursor-pointer">خانه</li>
            <li className="hover:text-gray-800 cursor-pointer">فروشگاه</li>
            <li className="hover:text-gray-800 cursor-pointer">درباره ما</li>
            <li className="hover:text-gray-800 cursor-pointer">تماس با ما</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-800">راهنما</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-gray-800 cursor-pointer">روش‌های پرداخت</li>
            <li className="hover:text-gray-800 cursor-pointer">مرجوعی کالا</li>
            <li className="hover:text-gray-800 cursor-pointer">سیاست حفظ حریم خصوصی</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-800">خبرنامه</h4>
          <div className="flex items-center border-b border-gray-400 pb-2">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex grow bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 text-right"
            />
            <button className="text-sm font-medium hover:underline text-gray-800">
              اشتراک
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © ۱۴۰۳ فونیرو. تمام حقوق محفوظ است.
      </div>
    </footer>
  );
}
