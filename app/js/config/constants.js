
export const HTML = document.querySelector('html');
export const LANG = HTML.getAttribute('lang');

export const METRIC_DEFAULT_CATEGORY = '';

if (process.env.NODE_ENV === 'development') {
    // TO DEVELOP ON LOCALHOST

} else {
    // PRODUCTION VALUES
}