export default function ({ from, to, store, redirect }) {
  // If the user didn't pass the previous puzzle.
  if (
    store?.state?.['actividad-1-reto-2']?.userResult !==
    store?.state?.['actividad-1-reto-2']?.validResult
  ) {
    console.error('Completa primero los retos anteriores.')
    return redirect('/actividad-1/reto-2')
  }
}