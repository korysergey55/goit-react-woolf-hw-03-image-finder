Image searcher App

Task- Write an image search application by keyword.

Register and get a private access key. For HTTP requests, use the public image search service Pixabay. The URL string of the HTTP request: 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'

When you click on the Load more button, the next batch of images should be loaded and rendered together with the
previous ones. The button should render only when there are any images loaded. If the image array is empty, the button is not rendered.

The spinner component is displayed while the images are loading. Use any ready made component like react-loader- spinner or any other.

Clicking on a gallery item should open a modal window with a dark overlay and display a large version of the image. The modal window should be closed by pressing the ESC key or by clicking on the overlay.
