export const CMS_API_URL = import.meta.env.VITE_CMS_API_URL || "https://blog.nextventures.in";

export const ENDPOINTS = {
  CONTACT: `${CMS_API_URL}/api/contact`,
  SUBSCRIBE: `${CMS_API_URL}/api/subscribe`,
  BLOGS: `${CMS_API_URL}/api/blogs?limit=3`,
  CASE_STUDIES: `${CMS_API_URL}/api/case-studies?limit=3`,
  BLOG_PAGE: `${CMS_API_URL}/blog`,
  CASE_STUDIES_PAGE: `${CMS_API_URL}/case-studies`,
};
