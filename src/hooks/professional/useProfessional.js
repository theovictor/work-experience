import axios from "axios";
import { toast } from "react-toastify";
import { professional } from "../../services/api";
import { useDispatch } from "react-redux";
import professinalActions from '../../redux/actions/professinalActions';

export function useProfessional() {
  const dispatch = useDispatch();

  const getTotalProfessinal = () => {
    axios.get(`${professional}/total`)
    .then((res) => {
      dispatch(professinalActions.index_professinal(res.data));
    });
  }

  const postProfessinal = (values) => {
    axios.post(professional, values)
    .then((res) => {
      getTotalProfessinal();
      toast.success('Cadastro realizado com sucesso!');
    })
    .catch(err => {
      toast.error('Falha ao realizar o cadastro!');
    });
  }

  return {
    getTotalProfessinal,
    postProfessinal,
  }
}
