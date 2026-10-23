/**
 * Centrale fotobibliotheek
 * Alle foto's van de website staan hier op één plek. Wilt u een foto vervangen
 * (bijvoorbeeld door een foto van een eigen project)? Zet het bestand in
 * src/public/images/ en vervang de url hieronder door bv. '/images/project-1.jpg'.
 */

// Stockfoto's van Unsplash (gratis te gebruiken, https://unsplash.com/license)
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75`;

export interface Photo {
  url: string;
  alt: string;
}

export const photos: Record<string, Photo> = {
  welding: { url: unsplash('1504917595217-d4dc5ebe6122'), alt: 'Lasser aan het werk met vonken' },
  sparks: { url: unsplash('1530124566582-a618bc2615dc'), alt: 'Vonken bij het slijpen van metaal' },
  engineer: { url: unsplash('1581091226825-a6a2a5aee158'), alt: 'Technicus aan het werk in een werkplaats' },
  construction: { url: unsplash('1541888946425-d81bb19240f5'), alt: 'Bouwplaats met staalconstructie' },
  blueprint: { url: unsplash('1503387762-592deb58ef4e'), alt: 'Technische tekeningen en planning' },
  metalwork: { url: unsplash('1565514020179-026b92b84bb6'), alt: 'Metaalbewerking in de industrie' },
  specialist: { url: unsplash('1581092160562-40aa08e78837'), alt: 'Specialist bij industriële installatie' },
  warehouse: { url: unsplash('1553413077-190dd305871c'), alt: 'Magazijn met stellingen' },
  steel: { url: unsplash('1590856029826-c7a73142bbf1'), alt: 'Stalen balken en constructie' },
  installation: { url: unsplash('1621905251189-08b45d6a269e'), alt: 'Montage van een industriële installatie' },
  office: { url: unsplash('1423666639041-f56000c27a9a'), alt: 'Contact en planning op kantoor' }
};

/**
 * Geeft de url van een foto in de gewenste breedte terug
 */
export function photoUrl(key: string, width = 1200): string {
  const photo = photos[key];
  if (!photo) return '';
  return photo.url.startsWith('https://images.unsplash.com') ? `${photo.url}&w=${width}` : photo.url;
}
