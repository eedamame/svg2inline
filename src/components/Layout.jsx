import React from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Home</a>
            <a href="#privacy" className="hover:text-gray-900">Privacy</a>
            <a href="#terms" className="hover:text-gray-900">Terms</a>
            <span className="text-gray-400">|</span>
            <span>© 2025 svg2css by eedamame</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;