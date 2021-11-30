import axios from "axios";
import { toast } from "react-toastify";
import { companie } from "../../services/api";
import { useDispatch } from "react-redux";
import companieActions from '../../redux/actions/companieActions';

export function useCompanie() {
  const dispatch = useDispatch();

  const getAllMsgCompanie = () => {
    axios.get(`${companie}/total`)
    .then((res) => {
      dispatch(companieActions.index_companie(res.data));
    });
  }

  const postMsgCompanie = (values) => {
    axios.post(companie, values)
    .then((res) => {
      getAllMsgCompanie();
      toast.success('Mensagem enviada com sucesso!');
    })
    .catch(err => {
      toast.error('Falha ao enviar a mensagem!');
    });
  }

  return {
    postMsgCompanie,
    getAllMsgCompanie,
  }
}
