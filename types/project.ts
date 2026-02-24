export interface ProjectSection {
  title: string;
  content: string | string[];
}

export interface Project {
  name: string;
  location: string;
  category: string;
  scope: string;
  type: string;
  image: string;
  sections: ProjectSection[];
  galleryImages: string[];
  nextSlug?: string;
}
