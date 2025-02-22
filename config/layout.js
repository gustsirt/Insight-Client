const config = {
  navbar: {
    default: [
      { name: 'Home', path: '/' },
      { name: 'Servicios', path: '/services' },
      { name: 'Portfolio', path: '/samples' },
      { name: 'Conocenos', path: '/conocenos' },
      { name: 'Escribenos', path: '/contacto' },
    ],
    public_It: [
      { name: 'Home', path: '/introit' },
      { name: 'Participa', path: '/participa' },
      { name: 'Conocenos', path: '/about' },
      { name: 'Reglas', path: '/reglas' },
      // { name: 'Login', path: '/login' },
    ],
  },
}

export const icons = {
  x: 'bx:x', // X de cerrar
  addEle: 'fluent:stack-add-20-regular', // agregar Elemento
  plus: 'ph:plus-fill', // agregar uno m+as +
  edit: "mage:edit", // editar contenido
  reset: "ix:reset", // resetear
  deploy: 'eos-icons:deploy', // deploy
  repository: 'mdi:bookmark-outline',
}

export const styles = {
  button: "px-2 py-2 text-center rounded transition-all",
}

export const variant = {
  primary: " bg-primary hover:bg-primary-dark text-white",
  secondary: " bg-secondary hover:bg-secondary-dark text-white",
  tertiary: " bg-tertiary hover:bg-tertiary-dark text-white",
  complementary: " bg-complementary hover:bg-complementary-dark text-white",
  danger: " bg-red-700 hover:bg-red-900 text-white",
  success: " bg-green-700 hover:bg-green-900 text-white",
  warning: " bg-yellow-700 hover:bg-yellow-900 text-white",
}

export default config