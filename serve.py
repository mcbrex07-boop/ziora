import http.server
import socketserver
import os
import urllib.parse

PORT = 3000
BUILD_DIR = os.path.join(os.path.dirname(__file__), '.next', 'standalone', '.next', 'server', 'app')
PUBLIC_DIR = os.path.join(os.path.dirname(__file__), 'public')

class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Decode URL-encoded path
        path = urllib.parse.unquote(path)
        
        # Remove leading slash
        if path.startswith('/'):
            path = path[1:]
        
        # Try static files from public directory first
        public_path = os.path.join(PUBLIC_DIR, path)
        if os.path.exists(public_path) and os.path.isfile(public_path):
            return public_path
        
        # Try HTML files from build output
        # Map / to index.html
        if path == '' or path == '/':
            html_path = os.path.join(BUILD_DIR, 'index.html')
            if os.path.exists(html_path):
                return html_path
        
        # Try exact path with .html
        html_path = os.path.join(BUILD_DIR, path + '.html')
        if os.path.exists(html_path):
            return html_path
        
        # Try path as directory with index.html
        dir_path = os.path.join(BUILD_DIR, path)
        if os.path.isdir(dir_path):
            index_path = os.path.join(dir_path, 'index.html')
            if os.path.exists(index_path):
                return index_path
        
        # Fallback to index.html for client-side routing
        index_path = os.path.join(BUILD_DIR, 'index.html')
        if os.path.exists(index_path):
            return index_path
        
        return super().translate_path('/' + path)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        httpd.serve_forever()
