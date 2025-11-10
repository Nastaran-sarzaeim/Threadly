"use client";

export default function FooterSection() {
  return (
    <footer className="bg-gray-50 py-10 px-6 md:px-20 border-t">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Funiro.</h3>
          <p className="text-gray-500 text-sm">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <div className="flex border-b border-gray-400 pb-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex bg-transparent outline-none text-sm"
            />
            <button className="text-sm font-medium hover:underline">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © 2023 Funiro. All rights reserved
      </div>
    </footer>
  );
}
