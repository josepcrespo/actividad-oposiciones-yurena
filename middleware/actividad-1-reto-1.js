export default function ({ from, to, store, redirect }) {
  // If the user didn't pass the previous puzzle.
  if (
    store?.state?.['index-lock']?.userKey !==
    store?.state?.['index-lock']?.validKey
  ) {
    console.error('Pregunta a tu profesor si no tienes el código secreto para empezar.')
    return redirect('/')
  }
}