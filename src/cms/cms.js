import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import NewsPostPreview from './preview-templates/NewsPostPreview'
import ServicePagePreview from './preview-templates/ServicePagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProfilePreview from './preview-templates/ProfilePreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('service', ServicePagePreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
// CMS.registerPreviewTemplate('gallery', GalleryPreview)
CMS.registerPreviewTemplate('team', ProfilePreview)
