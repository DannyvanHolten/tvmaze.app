export default (str) => {
  if (!str || typeof str !== 'string') {
    return str;
  }

  let slug = str.normalize('NFD').toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/ø/g, 'o')
    .replace(/'s/g, 's')
    .replace(/_/g, '-')
    .replace(/[\u0300-\u036f]/g, '') // remove unicode diacritics
    .replace(/\W/g, '-')
    .replace(/--+/g, '-');

  if (slug.substring(0, 1) === '-') {
    slug = slug.substring(1);
  }

  if (slug.substring(slug.length - 1) === '-') {
    slug = slug.substring(0, slug.length - 1);
  }

  return slug;
};