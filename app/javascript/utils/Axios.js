import axios from 'axios'

const Axios = () => {
  const CSRF = document.querySelector('[name=csrf-token').content
  axios.defaults.headers.common['X-CSRF-TOKEN'] = CSRF
}

export default Axios