export default function ({ from, to, store, redirect }) {
  // If the user didn't pass the previous puzzle.
  if (
    store?.state?.learningUnit?.indexPage?.password?.fromUser !==
    store?.state?.learningUnit?.indexPage?.password?.expected
  ) {
    // eslint-disable-next-line no-console
    console.error('Pregunta a tu profesor si no tienes el código secreto para empezar.')
    return redirect('/')
  }
}